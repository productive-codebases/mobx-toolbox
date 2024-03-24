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
  public readonly __storeBase = true

  public storeRoot: TStoreRootBase

  // store options, internal to the store - Prefer exposing explicit computed methods if you need to access to options.
  protected options: TStoreOptions

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
