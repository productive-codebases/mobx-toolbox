/**
 * Base tooling and typings
 */

export { EnvironmentBase } from './libs/EnvironmentBase'

export { StoreRootBase } from './libs/stores/StoreRootBase'

export { StoreBase } from './libs/stores/StoreBase'
export type { IStoreBase, IStoreRecord } from './types'

/**
 * Stores helper
 */

/* StoreFlags */

export { StoreFlags } from './libs/stores/StoreFlags'
export {
  __flagsLoading,
  mergeFlags,
  mergeStoreFlags
} from './libs/stores/StoreFlags/helpers'

export type { IFlags } from './libs/stores/StoreFlags/types'

/**
 * Tooling
 */

export { ObservableEither } from './libs/ObservableEither'
