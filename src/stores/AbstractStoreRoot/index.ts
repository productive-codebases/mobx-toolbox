import { IEnvironment } from '../AbstractEnvironment/types'
import { IStores, IStoreRoot } from '../types'

export default abstract class AbstractStoreRoot<
  TEnvironment extends IEnvironment<any>,
  TStores extends IStores<any>
> implements IStoreRoot<TEnvironment, TStores>
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
