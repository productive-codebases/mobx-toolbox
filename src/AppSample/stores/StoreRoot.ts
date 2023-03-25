import StoreRootBase from '@/stores/StoreRootBase'
import AppEnvironment from './Environment'
import StorePage1 from './StorePage1'
import StorePage2 from './StorePage2'
import { IAppStores } from './types'

export default class AppStoreRoot extends StoreRootBase<
  AppEnvironment,
  IAppStores
> {
  public logger =
    this.storeRoot.environment.loggerSetup.newLogger('SampleApp')('stores')

  _instanciateStores(): IAppStores {
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
