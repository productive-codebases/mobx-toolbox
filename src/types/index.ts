import { StoreRootBase } from '..'

/** Base interface implemented by all stores. */
export interface IStoreBase<TStoreRootBase extends StoreRootBase<any, any>> {
  storeRoot: TStoreRootBase
}

/** All stores instanciated via the root store */
export interface IStoreRecord<TStoreRootBase extends StoreRootBase<any, any>>
  extends Record<string, IStoreBase<TStoreRootBase>> {}
