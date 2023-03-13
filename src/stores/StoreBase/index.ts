import {
  IStoreBase,
  IStoreEnvironment,
  IStoreOptions,
  IStoreRoot,
  IStores
} from '../types'

/**
 * Base store for all stores.
 */
export default abstract class AStoreBase<
  TStoreRoot extends IStoreRoot<IStoreEnvironment, IStores>,
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
