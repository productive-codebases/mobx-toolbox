import AbstractStoreBase from '@/stores/AbstractStoreBase'
import { IUser, users } from '../entities/users'
import AppStoreRoot from './StoreRoot'

export interface IStorePageOptions {
  storePage1Options: {}
}

export default class StorePage1 extends AbstractStoreBase<
  AppStoreRoot,
  IStorePageOptions
> {
  fetchUsers(): Promise<IUser[]> {
    this.storeRoot.logger('debug')('Load users')
    return this.storeRoot.environment.fetchClient.get().then(() => users)
  }
}
