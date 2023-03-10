import { IStoreBase, IStoreOptions } from '../types'

/**
 * Base store for all stores.
 */
export default class StoreBase<
  TStoreRoot,
  TStoreOptions extends IStoreOptions = {}
> implements IStoreBase
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
