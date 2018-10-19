// @flow

// WIP

import { pipe, o } from 'ramda'
import { EOL, addIndent } from '../util'

import type { BuilderFn } from '../types'
import type { TypeName, TLParam, TLComb, TLExpr, TLType } from '../types'

const CONSTR_NAME_FIELD = '_'
const NAMESPACE_DELIM = '_'
const INDENT = 2

// NOTE: SDL = GraphQL SDL = GraphQL Schema Definition Language

const blackListedIds = new Set([
  'string', 'String',
  'true', 'Bool',
  'Int', 'Long', 'Double',
  'null', 'Null', 'Vector'
])
const isIdBlacklisted = (id: string) => blackListedIds.has(id)

const isVector = name => name === 'vector' || name === 'Vector'

const replaceVectors = (expr: TLExpr): string => {
  if (expr.length < 2) return expr.join('')
  const [x, ...xs] = expr
  return isVector(x) ?
    `[${replaceVectors(xs)}!]`
    : replaceVectors(xs)
}

const customScalars = ['Long', 'Int128', 'Int256', 'Bytes', 'X']

const replaceTypeName = (id: TypeName): TypeName => {
  switch (id) {
    // builtin scalars
    case '#': return 'Int'
    case 'int': return 'Int'
    case 'double': return 'Float'
    case 'string': return 'String'
    case 'boolFalse':
    case 'boolTrue':
    case 'true':
    case 'Bool': return 'Boolean'

    // custom scalars
    case 'long': return 'Long'
    case 'int128': return 'Int128'
    case 'int256': return 'Int256'
    case 'bytes': return 'Bytes'

    default: return id
  }
}

const replaceNsDelim = (name: string) => name[0] !== '\''
  ? name.replace('.', NAMESPACE_DELIM)
  : name

const showExpr = (expr: TLExpr): TypeName => {
  const str =
    replaceVectors(expr
      .map(replaceTypeName)
      .map(replaceNsDelim))
  return str
}

type SDLObject = {
  name: string,
  params: TLParam[]
}

type SDLFunction = {
  name: string,
  params: TLParam[],
  returnType: TypeName
}

const buildParam = ({ name, type, optional }: TLParam) =>
  `${name}: ${showExpr(type)}${optional ? '' : '!'}`

const buildParams = (params: TLParam[]) => params
  .map(pipe(
    buildParam,
    addIndent(INDENT)
  ))

const buildObjectType = ({ name, params }: SDLObject) => [
  `type ${replaceNsDelim(name)} {`,
  ...buildParams(params),
  '}'
]

// const buildGeneric = (generic?: string[]) => generic
//   ? `<${generic.join(', ')}>`
//   : ''

const buildSDLFunction = ({ name, params, returnType }: SDLFunction) => {
  if (params.length === 0)
    return [`${replaceNsDelim(name)}: ${returnType}`]
  return [
    `${replaceNsDelim(name)}(`,
    ...buildParams(params),
    `): ${returnType}!`
  ]
}

const buildUnion = (name: TypeName, names: string[]) =>
  `union ${replaceNsDelim(name)} = ${names.join(' | ')}`

const buildConstructor = ({ name, params }: TLComb) => {
  return buildObjectType({ name, params }).join(EOL)
}

const buildFunction = ({ name, params, resultType }: TLComb) => {
  const returnType = showExpr(resultType)
  return buildSDLFunction({ name, params, returnType })
    .map(addIndent(INDENT))
    .join(EOL)
}

const buildTLType = ({ name, constrNames }: TLType) =>
  buildUnion(name, constrNames.map(replaceNsDelim))

const filterBlacklistedCombs = (arr: TLComb[]): TLComb[] => arr
  .filter(comb => !isIdBlacklisted(comb.name))

const filterBlacklistedTypes = (arr: TLType[]): TLType[] => arr
  .filter(({ name }) => !isIdBlacklisted(name))
  .map(({ name, constrNames }) => ({
    name,
    constrNames: constrNames.filter(name => !isIdBlacklisted(name))
  }))
  .filter(({ constrNames }) => constrNames.length > 0)

export const GraphQLBuilder: BuilderFn = (constructors, functions, types) => {
  const validConstrs = filterBlacklistedCombs(constructors)
  const validFuncs = filterBlacklistedCombs(functions)
  const validTypes = filterBlacklistedTypes(types)
  return [
    'schema { query: Query }',
    '',
    '### TL Builtin ###',
    '',
    customScalars.map(name => `scalar ${name}`).join(EOL),
    '',
    '### Constructors ###',
    '',
    validConstrs.map(buildConstructor).join(EOL + EOL),
    '',
    '### Functions ###',
    '',
    // Input unions are required for tl functions.
    'type Query {',
    validFuncs.map(buildFunction).join(EOL + EOL),
    '',
    '}',
    '',
    '### Types ###',
    '',
    validTypes.map(buildTLType).join(EOL + EOL)
  ]
}
