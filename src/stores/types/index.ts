import { IEnvironment } from '../AbstractEnvironment/types'
import AbstractStoreRoot from '../AbstractStoreRoot'

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
 * Record of all stores.
 */
export interface IStores<TStoreRoot extends AbstractStoreRoot<any, any>>
  extends Record<string, IStoreBase<TStoreRoot>> {
  storeRoot: TStoreRoot
}

/**
 * StoreRoot interface, that your StoreRoot needs to implement.
 */
export interface IStoreRoot<
  TEnvironment extends IEnvironment<any>,
  TStores extends IStores<any>
> {
  environment: TEnvironment
  stores: TStores
}
