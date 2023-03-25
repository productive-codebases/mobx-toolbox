import StoreRootBase from '@/stores/StoreRootBase'
import { LoggerSetup } from '@productive-codebases/toolbox'

export interface IMobxToolboxProviderConfiguration<
  TStoreRoot extends StoreRootBase<any, any>
> {
  storeRoot: TStoreRoot
}

export interface IMobxToolboxProvider<
  TMobxToolboxProviderConfiguration extends IMobxToolboxProviderConfiguration<any>
> {
  storeRoot: TMobxToolboxProviderConfiguration['storeRoot']
}

export interface IEnvironment<TLoggerSetup = LoggerSetup<any>> {
  loggerSetup: TLoggerSetup
  localStorage: Storage
}

export interface IStoreBase<TStoreRoot extends StoreRootBase<any, any>> {
  storeRoot: TStoreRoot
}

export interface IStores<TStoreRoot extends StoreRootBase<any, any>>
  extends Record<string, IStoreBase<TStoreRoot>> {}

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
