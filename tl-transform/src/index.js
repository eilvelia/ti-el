// @flow

import { transform } from './transform'

export { transform }

export type { Config } from './config'
export { defaultConfig } from './config'

export type {
  Lines,
  TypeName, TLExpr, TLParam, Mode, TLComb, TL, TLType,
  BuilderFn
} from './types'

export { BUILTIN, isBuiltin } from './builtin'

export default transform
