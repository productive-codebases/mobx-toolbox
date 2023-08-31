import Store from '..'
import Environment from '@/libs/Environment'
import { IStores } from '@/types'
import StoreRoot from '../../StoreRoot'

describe('Store', () => {
  /**
   * Typings
   */

  interface IStoreBOptions {
    featureFlags: {
      enableThing: boolean
    }
  }

  interface IAppStores extends IStores<AppStoreRoot> {
    storeRoot: AppStoreRoot
    storeA: StoreA
    storeB: StoreB<IStoreBOptions>
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
        storeB: new StoreB(this, {
          featureFlags: {
            enableThing: true
          }
        })
      }
    }
  }

  // implement stores extending Store
  class StoreA extends Store<AppStoreRoot> {}
  class StoreB<TStoreOption extends object> extends Store<
    AppStoreRoot,
    TStoreOption
  > {}

  beforeEach(() => {
    // instanciate the storeRoot (that instanciates all stores)
    storeRoot = new AppStoreRoot(appEnvironment)
  })

  it('should expose the root store', () => {
    expect(storeRoot.stores.storeB.storeRoot).toBe(storeRoot)
  })
  1
  it('should expose options', () => {
    expect(storeRoot.stores.storeB.options.featureFlags.enableThing).toBe(true)
  })

  it('should allow to set options', () => {
    storeRoot.stores.storeB.setOptions({
      featureFlags: {
        enableThing: false
      }
    })

    expect(storeRoot.stores.storeB.options.featureFlags.enableThing).toBe(false)
  })
})
