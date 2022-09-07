// @flow

import type { BuilderFn } from './types'



export type Config = {
  target: 'javascript' | 'custom',
  customBuilder?: BuilderFn,
  // builderConfig: any // TODO
}

export const defaultConfig: Config = Object.freeze({
  target: 'javascript',
  // builderConfig: {}
})
