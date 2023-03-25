import StoreBase from '@/stores/StoreBase'
import AppStoreRoot from './StoreRoot'

export interface IStorePageOptions {}

export default class StorePage2 extends StoreBase<
  AppStoreRoot,
  IStorePageOptions
> {
  fetchThings(): Promise<null> {
    return Promise.resolve(null)
  }
}
