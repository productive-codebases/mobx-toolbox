import Environment from '@/libs/Environment'
import { IStore, IStores } from '@/types'
import StoreRoot from '../StoreRoot'

/**
 * Base store for all stores.
 */
export default abstract class Store<
  TStoreRoot extends StoreRoot<Environment<any>, IStores<any>>,
  TStoreOptions extends object = {}
> implements IStore<TStoreRoot>
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
