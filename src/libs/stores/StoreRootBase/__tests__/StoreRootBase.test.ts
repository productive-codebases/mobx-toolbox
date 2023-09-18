import { StoreRootBase } from '..'
import { EnvironmentBase } from '@/libs/EnvironmentBase'
import { IStoreRecord } from '@/types'
import { StoreBase } from '@/libs/stores/StoreBase'

describe('StoreRootBase', () => {
  /**
   * Typings
   */

  interface IStoreRecordApp extends IStoreRecord<StoreRootApp> {
    storeRoot: StoreRootApp
    storeA: StoreA
    storeB: StoreB
  }

  type EnvironmentApp = typeof appEnvironment

  /**
   * Environment and stores implementation
   */

  let storeRoot: StoreRootApp

  // create an environment configuration
  const appEnvironmentConfiguration = {
    logger: (message: string) => `Logger: ${message}`
  }

  // create the environment
  const appEnvironment = new EnvironmentBase(appEnvironmentConfiguration)

  // implement StoreRoot extending StoreRoot
  class StoreRootApp extends StoreRootBase<EnvironmentApp, IStoreRecordApp> {
    _instanciateStores() {
      return {
        storeRoot: this,
        storeA: new StoreA(this, {}),
        storeB: new StoreB(this, {})
      }
    }
  }

  // implement stores extending Store
  class StoreA extends StoreBase<StoreRootApp> {}
  class StoreB extends StoreBase<StoreRootApp> {}

  beforeEach(() => {
    // instanciate the storeRoot (that instanciates all stores)
    storeRoot = new StoreRootApp(appEnvironment)
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
