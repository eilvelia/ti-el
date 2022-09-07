// @flow

import { parse as parseTL } from './tl'

import type {
  TLProgram,
  CombinatorDeclaration,
  Argument,
  Expression
} from '../ast'

const findCommentOnLine = (line: string): string | null => {
  const commentRegexp = /^[ \t]*\/\/(.*)/
  const [, comment] = line.match(commentRegexp) || []
  return comment
}

type CommentLine = { line: number, string: string }

const findComments = (str: string): CommentLine[] =>
  str
    .split(/\r?\n/)
    .map(findCommentOnLine)
    .map((e, i) => e
      ? ({ line: i + 1, string: e.trim() })
      : null)
    .filter(Boolean)

const findDocComments = str => findComments(str)
  .filter(({ string }) => ['@', '-'].includes(string[0]))
  .map(obj => ({ ...obj, string: obj.string.replace(/^-/, '') }))

const last = arr => arr[arr.length - 1]
const push = (el, arr) => { arr.push(el); return arr }
const updateLast = (el, arr) => { arr[arr.length - 1] = el; return arr }

const groupDocComments = (comments: CommentLine[]): CommentLine[] =>
  comments.reduce((acc, el, i) => {
    if (i === 0) return push(el, acc)
    const { line, string } = el
    const { line: prevLine, string: prevString } = last(acc)
    return prevLine === line - 1
      ? updateLast({ line, string: prevString + ' ' + string }, acc)
      : push(el, acc)
  }, [])

// mutates regexp
const regAll = (reg: RegExp, str: string) => {
  const output = []
  let result
  while (result = reg.exec(str))
    output.push(result)
  return output
}

type DocMap = Map<string, string>

const parseDocComment = (string: string): DocMap => {
  const regexp = /@(.+?) ([^@]+)/g
  return new Map(
    regAll(regexp, string)
      .map(result => {
        const [, key = "", value = ""] = result
        return [key, value.trim()]
      }))
}

// ---

const removeHash = (str: string) => str.replace(/#.*/, '')

type NormalizedArgument = {
  name: string,
  type: string,
  vector: number
}

type NormalizedCombinator = {
  line: number,
  kind: 'function' | 'constructor',
  name: string,
  args: NormalizedArgument[],
  result: string
}

const combinatorsFromAST = (ast: TLProgram): NormalizedCombinator[] => {
  const constrDecls = ast.constructors.declarations
  const funcDecls = ast.functions.declarations

  const constCombs: CombinatorDeclaration[] = (constrDecls
    .filter(e => e.type === 'CombinatorDeclaration'): $FlowFixMe)
  const funcCombs: CombinatorDeclaration[] = (funcDecls
    .filter(e => e.type === 'CombinatorDeclaration'): $FlowFixMe)

  const combinators = constCombs
    .map(c => normalizeCombinator('constructor', c))
    .concat(funcCombs
      .map(c => normalizeCombinator('function', c))
    )
  return combinators
}

const normalizeExpression = (expr: Expression): {| type: string, vector: number |} => {
  if (typeof expr === 'number') throw new Error('Invalid expression')

  if (expr.type === 'ETypeIdentifier')
    return { type: expr.id.name, vector: 0 }

  if (expr.type === 'EExpression') {
    if (expr.subexpressions.length !== 2)
      throw new Error('Unsupported expression length')
    const typeConstr = expr.subexpressions[0]
    if (typeConstr.type === 'ETypeIdentifier' && typeConstr.id.name === 'vector') {
      const subterm = expr.subexpressions[1]
      const nSubterm = normalizeExpression(subterm)
      return { ...nSubterm, vector: nSubterm.vector + 1 }
    }
    throw new Error('Unsupported type constructor')
  }

  throw new Error('Unsupported expression')
}

const normalizeArgument = (arg: Argument): NormalizedArgument => {
  const { id } = arg
  if (!id) throw new Error('No arg.id')

  const { name } = id
  const type = arg.argType.expression

  return { name, ...normalizeExpression(type) }
}

const normalizeCombinator = (kind, comb: CombinatorDeclaration): NormalizedCombinator => {
  const line = comb.start.line
  const name = removeHash(comb.id.name)

  if (!comb.args) throw new Error('No combinator.args')

  const args = comb.args.map(normalizeArgument)
  const result = comb.resultType.id.name

  return { line, kind, name, args, result }
}

// ---

export type Parameter = {
  name: string,
  type: string,
  vector: number,
  description: string
}

export type BaseClass = {
  name: string,
  description: string
}

export type TdClass = {
  line: number,
  name: string,
  kind: 'function' | 'constructor',
  description: string,
  parameters: Parameter[],
  result: string
}

export type TldocOutput = {
  baseClasses: BaseClass[],
  classes: TdClass[]
}

export const tldoc = (input: string): TldocOutput => {
  const comments =
    groupDocComments(
      findDocComments(input))

  const docMaps = comments.map(({ line, string }) => ({
    line,
    map: parseDocComment(string)
  }))

  const baseClasses = docMaps
    .map(e => e.map)
    .filter(m => !!m.get('class'))
    .map(m => {
      const className = m.get('class')
      const description = m.get('description')
      if (!description) throw new Error('No BaseClass description')
      if (!className) throw new Error('No className')
      return { name: className, description }
    })

  const ast = parseTL(input)
  const combinators = combinatorsFromAST(ast)

  const classes = docMaps
    .filter(({ map }) => !map.get('class'))
    .map(({ line, map }) => {
      const combinator = combinators.find(c => c.line === line + 1)
      if (!combinator) throw new Error(`Combinator on line ${line+1} not found`)

      const { name, kind, result } = combinator
      let description
      const parameters = []

      for (const [key, value] of map.entries()) {
        if (key === 'description') { description = value; continue }
        const name = key.replace(/^param_/, '')
        const combArg = combinator.args.find(arg => arg.name === name)
        if (!combArg) throw new Error(`Argument ${name} not found on line ${line+1}`)
        const { type, vector } = combArg
        parameters.push({ name, type, vector, description: value })
      }

      if (!description) throw new Error(`No description of ${name}`)

      return { line, name, kind, description, parameters, result }
    })

  return { baseClasses, classes }
}
