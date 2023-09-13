import { IStoreRecord } from '@index'
import { appEnvironment } from '../environment'
import { StoreA } from '../stores/StoreA'
import { StoreB } from '../stores/StoreB'
import { StoreRootApp } from '../stores/StoreRoot'

export interface IStoreRecordApp extends IStoreRecord<StoreRootApp> {
  storeRoot: StoreRootApp
  storeA: StoreA
  storeB: StoreB
}

export type EnvironmentApp = typeof appEnvironment
