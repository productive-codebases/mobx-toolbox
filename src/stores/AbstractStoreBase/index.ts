import {
  IEnvironment,
  IEnvironmentConfiguration
} from '../AbstractEnvironment/types'
import { IStoreBase, IStoreOptions, IStoreRoot, IStores } from '../types'

/**
 * Base store for all stores.
 */
export default abstract class AbstractStoreBase<
  TStoreRoot extends IStoreRoot<
    IEnvironment<IEnvironmentConfiguration>,
    IStores<any>
  >,
  TStoreOptions extends IStoreOptions = {}
> implements IStoreBase<TStoreRoot>
{
  public storeRoot: TStoreRoot
  public options: TStoreOptions

  constructor(storeRoot: TStoreRoot, options: TStoreOptions) {
    this.storeRoot = storeRoot

    this.options = {
      ...options
    }
  }

  /**
   * Set some options to the store.
   */
  setOptions(options: Partial<TStoreOptions>): this {
    this.options = {
      ...this.options,
      ...options
    }

    return this
  }
}
