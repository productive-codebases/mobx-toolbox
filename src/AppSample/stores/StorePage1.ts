import StoreObservableMap from '@/libs/StoreObservableMap'
import StoreBase from '@/stores/StoreBase'
import { indexEntitiesToMap } from '@productive-codebases/toolbox'
import { IUser, users } from '../entities/users'
import AppStoreRoot from './StoreRoot'

export interface IStorePageOptions {
  storePage1Options: {}
}

export default class StorePage1 extends StoreBase<
  AppStoreRoot,
  IStorePageOptions
> {
  public users = new StoreObservableMap<string, IUser>()

  fetchUsers(): Promise<void> {
    this.storeRoot.logger('debug')('Load users')

    return this.storeRoot.environment.fetchClient
      .get()
      .then(() => {
        const usersAsMap = indexEntitiesToMap<IUser, string>(users, 'id')
        this.users.setValues(usersAsMap)
      })
      .catch(() => {
        this.storeRoot.logger('error')('Cant fetch users')
      })
  }
}
