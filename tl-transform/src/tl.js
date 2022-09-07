// @flow

import { pipe, o, unnest } from 'ramda'

import type {
  TLProgram,
  Expression,
  Declaration,
  CombinatorDeclaration,
  BuiltinCombinatorDeclaration,
  FullCombinatorIdentifier,
  OptionalVariableIdentifier,
  TypeExpression,
  NatExpression,
  ResultType,
  EExpression,
  Argument,
  EOperator
} from 'tl-parser/ast.h'

import type { Mode, TLExpr, TLComb, TLParam, TL } from './types'

import { BUILTIN, isBuiltin } from './builtin'

type Loc = { offset: number, line: number, column: number }
export class TLError extends Error {
  constructor(node: { start: Loc }, str: string) {
    super(str + ` [${node.start.line}:${node.start.column}]`)
  }
}

const unwrapTypeExpr = (expr: TypeExpression) => expr.expression
const unwrapNatExpr = (expr: NatExpression) => expr.expression
const unwrapEExpr = (expr: EExpression) => expr.subexpressions

const normalizeResultType = (r: ResultType): EExpression => ({
  type: 'EExpression',
  start: r.start,
  end: r.end,
  subexpressions: [{
    type: 'ETypeIdentifier',
    start: r.start,
    end: r.end,
    id: r.id
  }].concat(unwrapEExpr(r.expression))
})

const simplifyOperator = (op: EOperator): TLExpr => {
  switch (op.kind) {
    case '!': return simplifyExpr(op.expression)
    default:
      throw new TLError(op, `Operator ${op.kind} is not supported`)
  }
}

const simplifyExpr = (expr: Expression): TLExpr => {
  switch (expr.type) {
    case 'ETypeIdentifier': return [expr.id.name]
    case 'ENat': return [expr.value.toString()]
    case 'EExpression': {
      const exprs = unwrapEExpr(expr)
      if (exprs.length === 0)
        throw new TLError(expr, 'Empty EExpression')
      return unnest(exprs.map(simplifyExpr))
    }
    case 'EOperator': return simplifyOperator(expr)
    default:
      throw new TLError(expr, `Expression ${expr.type} is not supported`)
  }
}

const unwrapOptIdent = (id: OptionalVariableIdentifier): string => {
  switch (id.type) {
    case 'VariableIdentifier': return id.name
    case 'EmptyVariableIdentifier':
      throw new TLError(id, 'Empty variable identifier is not supported')
    default: return (id: empty)
  }
}

const simplifyArg = (arg: Argument): TLParam => {
  const name = unwrapOptIdent(arg.id)
  const type = o(simplifyExpr, unwrapTypeExpr)(arg.argType)
  const optional = arg.conditionalDef !== null
  return { name, type, optional }
}

const showCombIdent = (id: FullCombinatorIdentifier): string => {
  switch (id.type) {
    case 'FullCombinatorName':
    case 'ShortCombinatorName': return id.name
    case 'EmptyCombinatorName':
      throw new TLError(id, 'Empty combinator name is not supported')
    default: return (id: empty)
  }
}

const simplifyComb = (d: CombinatorDeclaration, mode_: Mode): TLComb | null => {
  const name = showCombIdent(d.id)
  if (isBuiltin(name)) return null
  const params = d.args.map(simplifyArg)
  const resultType = o(simplifyExpr, normalizeResultType)(d.resultType)
  const mode = d.bang ? 'Function' : mode_
  return { name, params, resultType, mode }
}

const simplifyBuiltinComb = (d: BuiltinCombinatorDeclaration, mode: Mode): TLComb | null => {
  const name = showCombIdent(d.id)
  if (isBuiltin(name)) return null
  const params = []
  const resultType = [d.result.name]
  return { name, params, resultType, mode }
}

const simplifyDeclaration = (d: Declaration, mode: Mode): TLComb | null => {
  switch (d.type) {
    case 'CombinatorDeclaration': return simplifyComb(d, mode)
    case 'BuiltinCombinatorDeclaration': return simplifyBuiltinComb(d, mode)
    default: throw new TLError(d, `${d.type} is not supported`)
  }
}

export const simplifyTLProgram = ({ constructors, functions }: TLProgram): TL => {
  const decls: TLComb[] = [].concat(
    BUILTIN,
    constructors.declarations
      .map(d => simplifyDeclaration(d, 'Constructor'))
      .filter(Boolean),
    functions.declarations
      .map(d => simplifyDeclaration(d, 'Function'))
      .filter(Boolean)
  )

  return {
    constructors: decls.filter(e => e.mode === 'Constructor'),
    functions: decls.filter(e => e.mode === 'Function')
  }
}
