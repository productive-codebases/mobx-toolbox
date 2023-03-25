import { IStores, IStoreOptions, IStoreBase } from '@/types'
import {
  IEnvironment,
  IEnvironmentConfiguration
} from '../EnvironmentBase/types'
import StoreRootBase from '../StoreRootBase'

/**
 * Base store for all stores.
 */
export default abstract class StoreBase<
  TStoreRoot extends StoreRootBase<
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
