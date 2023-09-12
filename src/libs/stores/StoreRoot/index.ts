import Environment from '@/libs/Environment'
import { IStore, IStores } from '@/types'

/**
 * StoreRoot base class, declared as abstract.
 * It needs to be extended and implemented by a parent class to know how to instanciate stores.
 */
export default abstract class StoreRoot<
  TEnvironment extends Environment<any>,
  TStores extends IStores<any>
> implements IStore<any>
{
  public storeRoot = this

  public environment: TEnvironment

  public stores: TStores

  constructor(environment: TEnvironment) {
    this.environment = environment
    this.stores = this._instanciateStores()
  }

  abstract _instanciateStores(): TStores
}
