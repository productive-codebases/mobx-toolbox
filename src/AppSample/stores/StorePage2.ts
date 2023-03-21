import AbstractStoreBase from '@/stores/AbstractStoreBase'
import AppStoreRoot from './StoreRoot'

export interface IStorePageOptions {}

export default class StorePage2 extends AbstractStoreBase<
  AppStoreRoot,
  IStorePageOptions
> {
  fetchThings(): Promise<null> {
    return Promise.resolve(null)
  }
}
