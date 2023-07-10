import { IMobxToolboxProviderConfiguration } from '@/types'
import { configureUseMobxToolboxContext } from './useMobxToolboxContext'

/**
 * Retrieve MobX stores from the toolbox context.
 */
export function configureUseStores<
  TMobxToolboxProviderConfiguration extends IMobxToolboxProviderConfiguration<any>
>(contextName: string) {
  return function useStores(): TMobxToolboxProviderConfiguration['storeRoot']['stores'] {
    const context = configureUseMobxToolboxContext(contextName)()

    if (!context.storeRoot) {
      throw new Error('Root store has not been found')
    }

    return context.storeRoot.stores
  }
}
