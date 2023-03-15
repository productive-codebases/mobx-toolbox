import AbstractStoreRoot from '@/stores/AbstractStoreRoot'
import Environment from './Environment'
import StorePage1 from './StorePage1'
import StorePage2 from './StorePage2'
import { AppStores } from './types'

export default class StoreRoot extends AbstractStoreRoot<
  Environment,
  AppStores
> {
  _instanciateStores(): AppStores {
    return {
      storeRoot: this,
      storePage1: new StorePage1(this, {
        storePage1Options: {}
      }),

      storePage2: new StorePage2(this, {})
    }
  }

  /**
   * Just a method to confirm that typings are working fine when infering storeRoot.
   */
  fetchThings() {
    return Promise.resolve([])
  }
}
