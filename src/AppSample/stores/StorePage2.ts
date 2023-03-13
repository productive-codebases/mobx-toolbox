import { StoreBase } from 'src'
import StoreRoot from './StoreRoot'

export interface IStorePageOptions {}

export default class StorePage2 extends StoreBase<
  StoreRoot,
  IStorePageOptions
> {
  fetchThings(): Promise<null> {
    return Promise.resolve(null)
  }
}
