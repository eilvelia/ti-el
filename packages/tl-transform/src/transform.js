// @flow

import { EOL } from 'os'
import { parse } from 'tl-parser'
import { simplifyTLProgram } from './tl'
import { isBuiltin } from './builtin'

import { JsBuilder } from './builders/javascript'

import { type Config, type RunnerConfig, defaultConfig } from './config'
import type { Builder, TypeName, TLComb } from './types'

type ConstrName = string
type TLTypeMap = Map<TypeName, ConstrName[]>

const getAllTLTypes = (isValidId, constructors: TLComb[]): TLTypeMap => {
  const typesMap: TLTypeMap = new Map()

  for (const { name, resultType } of constructors) {
    const resultId = resultType[0]
    if (!isValidId(name) || !isValidId(resultId))
      continue
    const arr = typesMap.get(resultId)
    if (arr == null) typesMap.set(resultId, [name])
    else arr.push(name)
  }

  return typesMap
}

function runner (source: string, builder: Builder, cfg: RunnerConfig) {
  const {
    buildFileHeader, buildBuiltinTypes, buildComment,
    buildConstructor, buildFunction, buildTLType,
    isValidId, buildInvokeType
  } = builder

  const ast = parse(source)
  const { constructors, functions } = simplifyTLProgram(ast)

  const o: string[] = []

  const pushln = (str: string = '') => { o.push(str); o.push('') }

  o.push(buildFileHeader())
  o.push(buildBuiltinTypes())

  pushln(buildComment('/ Constructors ///'))

  for (const comb of constructors) {
    if (!isBuiltin(comb.name))
      pushln(buildConstructor(comb))
  }

  pushln(buildComment('/ Functions ///'))

  for (const comb of functions) {
    if (!isBuiltin(comb.name))
      pushln(buildFunction(comb))
  }

  pushln(buildComment('/ Types ///'))

  const tlTypeMap = getAllTLTypes(isValidId, constructors)

  for (const [name, constrNames] of tlTypeMap.entries())
    pushln(buildTLType({ name, constrNames }))

  const fnNames = functions.map(e => e.name)

  if (cfg.generateInvoke) {
    pushln(buildComment('/ Invoke ///'))
    o.push(buildInvokeType(fnNames))
  }

  return o.join(EOL)
}

export function transform (src: string, cfg: Config = defaultConfig): string {
  const rn = cfg.runnerConfig
  switch (cfg.target) {
    case 'javascript': return runner(src, JsBuilder, rn)
    case 'custom':
      if (cfg.customBuilder) return runner(src, cfg.customBuilder, rn)
      throw new Error('"customBuilder" cfg field not found')
    default: return (cfg.target: empty)
  }
}
