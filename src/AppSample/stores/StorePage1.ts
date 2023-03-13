import { StoreBase } from 'src'
import { IUser } from '../entities/users'
import StoreRoot from './StoreRoot'

export interface IStorePageOptions {
  storePage1Options: {}
}

export default class StorePage1 extends StoreBase<
  StoreRoot,
  IStorePageOptions
> {
  fetchUsers(): Promise<IUser[]> {
    return this.storeRoot.environment.fetchClient.fetchUsers()
  }
}
