import { StoreRoot } from '..'

/** Base interface implemented by all stores. */
export interface IStore<TStoreRoot extends StoreRoot<any, any>> {
  storeRoot: TStoreRoot
}

/** All stores instanciated via the root store */
export interface IStores<TStoreRoot extends StoreRoot<any, any>>
  extends Record<string, IStore<TStoreRoot>> {}
