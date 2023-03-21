import { IStores } from '@/stores/types'
import StorePage1 from './StorePage1'
import StorePage2 from './StorePage2'
import AppStoreRoot from './StoreRoot'

export interface IAppStores extends IStores<AppStoreRoot> {
  storeRoot: AppStoreRoot
  storePage1: StorePage1
  storePage2: StorePage2
}
