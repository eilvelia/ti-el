// @flow

import type {
  TLComb
} from './types'

export const BUILTIN: TLComb[] = Object.freeze([
  { name: 'int', params: [], resultType: ['Int'], mode: 'Constructor' },
  { name: 'long', params: [], resultType: ['Long'], mode: 'Constructor' },
  { name: 'double', params: [], resultType: ['Double'], mode: 'Constructor' },
  { name: 'string', params: [], resultType: ['String'], mode: 'Constructor' },

  { name: 'boolFalse', params: [], resultType: ['Bool'], mode: 'Constructor' },
  { name: 'boolTrue', params: [], resultType: ['Bool'], mode: 'Constructor' },
  { name: 'true', params: [], resultType: ['True'], mode: 'Constructor' },
  { name: 'vector', params: [/*...*/], resultType: ['Vector', 't'], mode: 'Constructor' },
  { name: 'null', params: [], resultType: ['Null'], mode: 'Constructor' },
])

const builtinLookup: Set<string> = new Set()

for (const comb of BUILTIN)
  builtinLookup.add(comb.name)

export const isBuiltin = (name: string) => builtinLookup.has(name)

// const builtinLookup: Map<string, TLComb> = new Map()
//
// for (const comb of BUILTIN)
//   builtinLookup.set(comb.name, comb)
//
// export const isBuiltin = (name: string) => builtinLookup.has(name)
// export const getBuiltin = (name: string): TLComb => {
//   const builtin = builtinLookup.get(name)
//   if (!builtin) throw new Error('Builtin not found')
//   return builtin
// }
