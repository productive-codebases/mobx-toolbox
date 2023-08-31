import StoreRoot from '..'
import Environment from '@/libs/Environment'
import { IStores } from '@/types'
import Store from '../../Store'

describe('StoreRoot', () => {
  /**
   * Typings
   */

  interface IAppStores extends IStores<AppStoreRoot> {
    storeRoot: AppStoreRoot
    storeA: StoreA
    storeB: StoreB
  }

  type AppEnvironment = typeof appEnvironment

  /**
   * Environment and stores implementation
   */

  let storeRoot: AppStoreRoot

  // create an environment configuration
  const appEnvironmentConfiguration = {
    logger: (message: string) => `Logger: ${message}`
  }

  // create the environment
  const appEnvironment = new Environment(appEnvironmentConfiguration)

  // implement StoreRoot extending StoreRoot
  class AppStoreRoot extends StoreRoot<AppEnvironment, IAppStores> {
    _instanciateStores() {
      return {
        storeRoot: this,
        storeA: new StoreA(this, {}),
        storeB: new StoreB(this, {})
      }
    }
  }

  // implement stores extending Store
  class StoreA extends Store<AppStoreRoot> {}
  class StoreB extends Store<AppStoreRoot> {}

  beforeEach(() => {
    // instanciate the storeRoot (that instanciates all stores)
    storeRoot = new AppStoreRoot(appEnvironment)
  })

  it('should expose the root store itself', () => {
    expect(storeRoot.storeRoot).toBe(storeRoot)
  })

  it('should expose the environment', () => {
    expect(storeRoot.environment.configuration.logger('Testing')).toBe(
      'Logger: Testing'
    )
  })

  it('should instanciate and expose all stores', () => {
    expect(storeRoot.stores.storeA).toBeInstanceOf(StoreA)
    expect(storeRoot.stores.storeB).toBeInstanceOf(StoreB)
  })
})
