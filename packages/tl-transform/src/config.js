// @flow

import type { Builder } from './types'

export type RunnerConfig = {
  generateFunctions: boolean,
  generateInvoke: boolean
}

export const defaultRunnerConfig: RunnerConfig = Object.freeze({
  generateFunctions: true,
  generateInvoke: true
})

export type Config = {
  target: 'javascript' | 'custom',
  customBuilder?: Builder,
  runnerConfig: RunnerConfig
}

export const defaultConfig: Config = Object.freeze({
  target: 'javascript',
  runnerConfig: defaultRunnerConfig
})
