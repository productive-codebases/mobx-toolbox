import { StoreRootBase } from '@index'
import { EnvironmentApp, IStoreRecordApp } from '../types'
import { StoreA } from './StoreA'
import { StoreB } from './StoreB'

// implement a StoreRoot extending StoreRoot
export class StoreRootApp extends StoreRootBase<
  EnvironmentApp,
  IStoreRecordApp
> {
  _instanciateStores(): IStoreRecordApp {
    return {
      storeRoot: this,
      storeA: new StoreA(this, {}),
      storeB: new StoreB(this, {})
    }
  }
}
