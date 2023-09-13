import { StoreBase } from '..'
import { EnvironmentBase } from '@/libs/EnvironmentBase'
import { IStoreRecord } from '@/types'
import { StoreRootBase } from '@/libs/stores/StoreRootBase'

describe('StoreBase', () => {
  /**
   * Environment implementation
   */

  type EnvironmentApp = typeof appEnvironment

  const appEnvironmentConfiguration = {
    logger: (message: string) => `Logger: ${message}`
  }

  const appEnvironment = new EnvironmentBase(appEnvironmentConfiguration)

  /**
   * Stores record declaration
   */

  interface IStoreRecordApp extends IStoreRecord<StoreRootApp> {
    storeRoot: StoreRootApp
    storeA: StoreA
    storeB: StoreB
  }

  interface IStoreBOptions {
    featureFlags: {
      enableThing: boolean
    }
  }

  /**
   * Stores implementation
   */

  // implement stores extending Store
  class StoreA extends StoreBase<StoreRootApp> {}

  class StoreB extends StoreBase<StoreRootApp, IStoreBOptions> {}

  /**
   * StoreRoot implementation
   */

  let storeRoot: StoreRootApp

  // implement StoreRoot extending StoreRoot
  class StoreRootApp extends StoreRootBase<EnvironmentApp, IStoreRecordApp> {
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

  beforeEach(() => {
    // instanciate the storeRoot (that instanciates all stores)
    storeRoot = new StoreRootApp(appEnvironment)
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
