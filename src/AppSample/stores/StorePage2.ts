import AbstractStoreBase from '@/stores/AbstractStoreBase'
import StoreRoot from './StoreRoot'

export interface IStorePageOptions {}

export default class StorePage2 extends AbstractStoreBase<
  StoreRoot,
  IStorePageOptions
> {
  fetchThings(): Promise<null> {
    return Promise.resolve(null)
  }
}
