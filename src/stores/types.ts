import { Logger } from '@productive-codebases/toolbox'

/**
 * Options that can be defined for each store.
 */
export interface IStoreOptions {}

/**
 * Base interface implemented by all stores.
 */
export interface IStoreBase<TStoreRoot> {
  storeRoot: TStoreRoot
}

/**
 * Base interface for stores environments.
 */
export interface IStoreEnvironment {
  logger: Logger
  localStorage: Storage
}

/**
 * Record of all stores.
 */
export type IStores = Record<string, IStoreBase<any>>

/**
 * StoreRoot interface, that your StoreRoot needs to implement.
 */
export interface IStoreRoot<
  TEnvironment extends IStoreEnvironment,
  TStores extends IStores
> {
  environment: TEnvironment
  stores: TStores
}
