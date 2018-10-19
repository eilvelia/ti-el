// @flow

import { pipe, o } from 'ramda'
import { EOL, addIndent } from '../util'

import type {
  TypeName, TLParam, TLComb, TLExpr, TLType,
  BuilderFn
} from '../types'

const CONSTR_NAME_FIELD = '_'
const NAMESPACE_DELIM = '_'
const INDENT = 2

const blackListedIds = new Set([
  'string', 'String', 'true', 'null', 'Null', 'Vector'
])
const isIdBlacklisted = (id: string) => blackListedIds.has(id)

const replaceTypeName = (id: TypeName): TypeName => {
  switch (id) {
    case '#': return 'number'
    case 'vector':
    case 'Vector': return 'Array'
    default: return id
  }
}

type BuiltinMap = Array<[string, string]>
const builtinJs: BuiltinMap = [
  ['Type', 'any'],

  ['int', 'number'],
  ['long', 'string'],
  ['double', 'number'],

  ['boolFalse', 'false'],
  ['boolTrue', 'true'],

  ['int128', '(number | string)'],
  ['int256', '(number | string)'],

  ['bytes', 'number[]'],

  ['X', 'any']
]

const wrapReturnType = (type: TypeName) => `Promise<${type}>`

const replaceNsDelim = (name: string) => name[0] !== '\''
  ? name.replace('.', NAMESPACE_DELIM)
  : name

const showExpr = ([id_, ...types]: TLExpr): TypeName => {
  if (!id_) throw new Error(`Invalid type identifier: ${String(id_)}`)
  const id = o(replaceNsDelim, replaceTypeName)(id_)
  const str = types
    .map(replaceTypeName)
    .map(replaceNsDelim)
    .join(', ')
  return types.length === 0
    ? id
    : `${id}<${str}>`
}

type JSObject = {
  name: string,
  params: TLParam[]
}

type JSFunction = {
  name: string,
  params: TLParam[],
  returnType: TypeName
}

const buildParam = ({ name, type, optional }: TLParam) =>
  `${name}${optional ? '?' : ''}: ${showExpr(type)}`

const buildParams = (params: TLParam[]) => params
  .map(pipe(
    buildParam,
    addIndent(INDENT),
    x => x + ','
  ))
  .join(EOL)

const buildJSObjectType = ({ name, params }: JSObject) => [
  `export type ${replaceNsDelim(name)} = {`,
  buildParams([
    { name: '_', type: [`'${name}'`], optional: false },
    ...params
  ]),
  '}'
].join(EOL)

// const buildGeneric = (generic?: string[]) => generic
//   ? `<${generic.join(', ')}>`
//   : ''

const buildJSFunction = ({ name, params, returnType }: JSFunction) => [
  `export type ${replaceNsDelim(name)} = (name: '${name}', q: {`,
  buildParams(params),
  `}) => ${returnType}`
].join(EOL)

const buildInfix = (name: TypeName, names: string[], char: string) => [
  `export type ${replaceNsDelim(name)} =`,
  names
    .map(pipe(
      x => `${char} ${x}`,
      addIndent(INDENT)
    ))
    .join(EOL)
].join(EOL)

const buildConstructor = ({ name, params }: TLComb) => {
  return buildJSObjectType({ name, params })
}

const buildFunction = ({ name, params, resultType }: TLComb) => {
  const returnType = wrapReturnType(showExpr(resultType))
  return buildJSFunction({ name, params, returnType })
}

const buildTLType = ({ name, constrNames }: TLType) =>
  buildInfix(name, constrNames.map(replaceNsDelim), '|')

const buildInvokeType = fnNames =>
  buildInfix('Invoke', fnNames.map(replaceNsDelim), '&')

const filterBlacklistedCombs = (arr: TLComb[]): TLComb[] => arr
  .filter(comb => !isIdBlacklisted(comb.name))

const filterBlacklistedTypes = (arr: TLType[]): TLType[] => arr
  .filter(({ name }) => !isIdBlacklisted(name))
  .map(({ name, constrNames }) => ({
    name,
    constrNames: constrNames.filter(name => !isIdBlacklisted(name))
  }))
  .filter(({ constrNames }) => constrNames.length > 0)

// export type JSBuilderConfigStrict = {
//   generateFunctions: boolean,
//   generateInvoke: boolean,
//   constrNameField: string,
//   namespaceDelim: string,
//   indent: number
// }
//
// export type JSBuilderConfig = $Shape<JSBuilderConfig>
//
// const defaultConfig: $Exact<JSBuilderConfigStrict> = {
//   generateFunctions: true,
//   generateInvoke: true,
//   constrNameField: '_',
//   namespaceDelim: '',
//   indent: 2
// }

export const JsBuilder: BuilderFn = (constructors, functions, types) => {
  const validConstrs = filterBlacklistedCombs(constructors)
  const validFuncs = filterBlacklistedCombs(functions)
  const validTypes = filterBlacklistedTypes(types)
  return [
    '// @flow',
    '',
    '/// TL Builtin ///',
    '',
    builtinJs.map(([a, b]) => `type ${a} = ${b}`).join(EOL),
    '',
    '/// Constructors ///',
    '',
    validConstrs.map(buildConstructor).join(EOL + EOL),
    '',
    '/// Functions ///',
    '',
    validFuncs.map(buildFunction).join(EOL + EOL),
    '',
    '/// Types ///',
    '',
    validTypes.map(buildTLType).join(EOL + EOL),
    '',
    '/// Invoke ///',
    '',
    buildInvokeType(validFuncs.map(e => e.name)),
  ]
}
