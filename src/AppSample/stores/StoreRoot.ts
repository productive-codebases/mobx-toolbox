import { StoreRoot } from '@index'
import { AppEnvironment, IAppStores } from '../types'
import StoreA from './StoreA'
import StoreB from './StoreB'

// implement a StoreRoot extending StoreRoot
export default class AppStoreRoot extends StoreRoot<
  AppEnvironment,
  IAppStores
> {
  _instanciateStores(): IAppStores {
    return {
      storeRoot: this,
      storeA: new StoreA(this, {}),
      storeB: new StoreB(this, {})
    }
  }
}
