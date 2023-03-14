import AbstractStoreBase from 'src/stores/StoreBase'
import { IUser } from '../entities/users'
import StoreRoot from './StoreRoot'

export interface IStorePageOptions {
  storePage1Options: {}
}

export default class StorePage1 extends AbstractStoreBase<
  StoreRoot,
  IStorePageOptions
> {
  fetchUsers(): Promise<IUser[]> {
    return this.storeRoot.environment.fetchClient.fetchUsers()
  }
}
