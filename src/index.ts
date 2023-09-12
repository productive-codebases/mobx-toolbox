/**
 * Base tooling and typings
 */

export { default as Environment } from './libs/Environment'

export { default as StoreRoot } from './libs/stores/StoreRoot'

export { default as Store } from './libs/stores/Store'
export type { IStore, IStores } from './types'

/**
 * Stores helper
 */

// StoreFlags

export { default as StoreFlags } from './libs/stores/StoreFlags'
export {
  __flagsLoading,
  mergeFlags,
  mergeStoreFlags
} from './libs/stores/StoreFlags/helpers'
