// @flow

import { EOL } from 'os'
import { pipe, o } from 'ramda'

import type { Builder } from '../types'

import type {
  TypeName, TLParam, TLComb, TLExpr, TLType
} from '../types'

const CONSTR_NAME_FIELD = '_'
const NAMESPACE_DELIM = '_'
const INDENT = 2

const blackListedIds = ['string', 'String', 'true', 'null', 'Null', 'Vector']
const isIdBlacklisted = (id: string) => blackListedIds.includes(id)

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
  ['long', 'number'],
  ['double', 'number'],

  ['boolFalse', 'false'],
  ['boolTrue', 'true'],

  ['int128', '(number | string)'],
  ['int256', '(number | string)'],

  ['bytes', 'number[]'],

  ['X', 'any']
]

const wrapReturnType = (type: TypeName) => `Promise<${type}>`

const addIndent = (n: number) => (str: string) => ' '.repeat(n) + str
const replaceNsDelim = (name: string) => name[0] !== '\''
  ? name.replace('.', NAMESPACE_DELIM)
  : name

const showExpr = ([id_, ...types]: TLExpr): TypeName => {
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
].filter(Boolean).join(EOL)

// const buildGeneric = (generic?: string[]) => generic
//   ? `<${generic.join(', ')}>`
//   : ''

const buildJSFunction = ({ name, params, returnType }: JSFunction) => [
  `export type ${replaceNsDelim(name)} = (name: '${name}', q: {`,
  buildParams(params),
  `}) => ${returnType}`
].join(EOL)

const buildInfix = (name: TypeName, names: string[], char: string) =>
  `export type ${replaceNsDelim(name)} =`
  + EOL
  + names
    .map(pipe(
      x => `${char} ${x}`,
      addIndent(INDENT)
    ))
    .join(EOL)

export const JsBuilder: Builder = {
  buildFileHeader: () => '// @flow' + EOL,

  buildComment: str => `//${str}`,

  buildBuiltinTypes: () => [
    '/// TL Builtin ///',
    '',
    builtinJs.map(([a, b]) => `type ${a} = ${b}`).join(EOL),
    ''
  ].join(EOL),

  buildConstructor: ({ name, params }: TLComb) => {
    if (isIdBlacklisted(name)) return ''
    return buildJSObjectType({ name, params })
  },

  buildFunction: ({ name, params, resultType }: TLComb) => {
    if (isIdBlacklisted(name)) return ''
    const returnType = wrapReturnType(showExpr(resultType))
    return buildJSFunction({ name, params, returnType })
  },

  buildTLType: ({ name, constrNames }: TLType) =>
    buildInfix(name, constrNames.map(replaceNsDelim), '|'),

  buildInvokeType: fnNames =>
    buildInfix('Invoke', fnNames.map(replaceNsDelim), '&'),

  isValidId: id => !isIdBlacklisted(id)
}
