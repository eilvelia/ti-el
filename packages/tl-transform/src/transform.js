// @flow

import { parse } from 'tl-parser'
import { EOL } from './util'
import { simplifyTLProgram } from './tl'
import { isBuiltin } from './builtin'

import { JsBuilder } from './builders/javascript'

import { type Config, defaultConfig } from './config'
import type { BuilderFn, TypeName, TLComb, TLType } from './types'

type ConstrName = string
type TLTypeMap = Map<TypeName, ConstrName[]>

const getAllTLTypes = (constructors: TLComb[]): TLTypeMap => {
  const typesMap: TLTypeMap = new Map()

  for (const { name, resultType } of constructors) {
    const resultId = resultType[0]
    const arr = typesMap.get(resultId)
    if (arr == null) typesMap.set(resultId, [name])
    else arr.push(name)
  }

  return typesMap
}

function runner (source: string, build: BuilderFn): string {
  const ast = parse(source)
  const { constructors, functions } = simplifyTLProgram(ast)

  const nonBuiltinConstrs = constructors.filter(comb => !isBuiltin(comb.name))
  const nonBuiltinFuncs = functions.filter(comb => !isBuiltin(comb.name))

  const tlTypeMap = getAllTLTypes(constructors)

  const types: TLType[] = Array.from(tlTypeMap.entries())
    .map(([name, constrNames]) => ({ name, constrNames }))

  const lines = build(nonBuiltinConstrs, nonBuiltinFuncs, types)

  return lines.join(EOL)
}

export function transform (src: string, cfg: Config = defaultConfig): string {
  // const builderCfg = cfg.builderConfig
  switch (cfg.target) {
    case 'javascript': return runner(src, JsBuilder)
    case 'custom':
      if (cfg.customBuilder) return runner(src, cfg.customBuilder)
      throw new Error('"customBuilder" cfg field not found')
    default: return (cfg.target: empty)
  }
}
