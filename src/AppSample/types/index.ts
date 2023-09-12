import { IStores } from '@index'
import { appEnvironment } from '../environment'
import StoreA from '../stores/StoreA'
import StoreB from '../stores/StoreB'
import AppStoreRoot from '../stores/StoreRoot'

export interface IAppStores extends IStores<AppStoreRoot> {
  storeRoot: AppStoreRoot
  storeA: StoreA
  storeB: StoreB
}

export type AppEnvironment = typeof appEnvironment
