import { IStoreBase, IStores } from '@/types'
import { IEnvironment } from '../EnvironmentBase/types'

export default abstract class StoreRootBase<
  TEnvironment extends IEnvironment<any>,
  TStores extends IStores<any>
> implements IStoreBase<any>
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
