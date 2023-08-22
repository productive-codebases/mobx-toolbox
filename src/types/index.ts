import { defaultLoggerSetup } from '@/libs/logger'
import StoreRootBase from '@/stores/StoreRootBase'
import { LoggerSetup } from '@productive-codebases/toolbox'

/**
 * Provider
 */

export interface IProviderConfiguration<
  TStoreRoot extends StoreRootBase<any, any>
> {
  storeRoot: TStoreRoot
}

export interface IProvider<
  TProviderConfiguration extends IProviderConfiguration<any>
> {
  storeRoot: TProviderConfiguration['storeRoot']
}

/**
 * Environment
 */

export interface IEnvironmentConfiguration<
  TLoggerSetup extends LoggerSetup<any> = typeof defaultLoggerSetup
> {
  loggerSetup: TLoggerSetup
  localStorage: Storage
}

export interface IEnvironment<
  TEnvironmentConfiguration extends IEnvironmentConfiguration
> {
  loggerSetup: TEnvironmentConfiguration['loggerSetup']
  localStorage: TEnvironmentConfiguration['localStorage']
}

/**
 * Stores
 */

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
