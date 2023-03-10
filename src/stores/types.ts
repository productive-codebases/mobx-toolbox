import { Logger } from '@productive-codebases/toolbox'

/**
 * Describe the options that can be passed to each stores.
 */
export interface IStoreOptions {}

/**
 * Implemented by all stores, allowing to have a common base interface.
 */
export interface IStoreBase {}

/**
 * StoreRoot interface, that your StoreRoot needs to implement.
 */
export interface IStoreRoot {
  logger: Logger
}
