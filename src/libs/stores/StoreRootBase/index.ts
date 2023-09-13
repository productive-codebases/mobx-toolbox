import { EnvironmentBase } from '@/libs/EnvironmentBase'
import { IStoreBase, IStoreRecord } from '@/types'

/**
 * StoreRoot base class, declared as abstract.
 * It needs to be extended and implemented by a parent class to know how to instanciate stores.
 */
export abstract class StoreRootBase<
  TEnvironmentBase extends EnvironmentBase<any>,
  TStoreRecord extends IStoreRecord<any>
> implements IStoreBase<any>
{
  public storeRoot = this

  public environment: TEnvironmentBase

  public stores: TStoreRecord

  constructor(environment: TEnvironmentBase) {
    this.environment = environment
    this.stores = this._instanciateStores()
  }

  abstract _instanciateStores(): TStoreRecord
}
