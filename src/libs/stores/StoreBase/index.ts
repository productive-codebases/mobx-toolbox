import { EnvironmentBase } from '@/libs/EnvironmentBase'
import { IStoreBase, IStoreRecord } from '@/types'
import { StoreRootBase } from '@/libs/stores/StoreRootBase'

/**
 * Base store for all stores.
 */
export class StoreBase<
  TStoreRootBase extends StoreRootBase<EnvironmentBase<any>, IStoreRecord<any>>,
  TStoreOptions extends object = {}
> implements IStoreBase<TStoreRootBase>
{
  public storeRoot: TStoreRootBase
  public options: TStoreOptions

  constructor(storeRoot: TStoreRootBase, options: TStoreOptions) {
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
