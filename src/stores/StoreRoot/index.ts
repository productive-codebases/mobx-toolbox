import { IStoreEnvironment, IStoreRoot, IStores } from '../types'

export default abstract class AStoreRoot<
  TEnvironment extends IStoreEnvironment,
  TStores extends IStores
> implements IStoreRoot<TEnvironment, TStores>
{
  public environment: TEnvironment
  public stores: TStores

  constructor(environment: TEnvironment) {
    this.environment = environment
    this.stores = this._instanciateStores()
  }

  abstract _instanciateStores(): TStores
}
