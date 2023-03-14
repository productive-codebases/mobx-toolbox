import AbstractStoreBase from 'src/stores/StoreBase'
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
