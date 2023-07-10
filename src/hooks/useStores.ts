import { IMobxToolboxProviderConfiguration } from '@/types'
import { useMobxToolboxContext } from './useMobxToolboxContext'

/**
 * Retrieve MobX stores from the toolbox context.
 */
export function useStores<
  TMobxToolboxProviderConfiguration extends IMobxToolboxProviderConfiguration<any>
>(contextName: string) {
  return (): TMobxToolboxProviderConfiguration['storeRoot']['stores'] => {
    const context =
      useMobxToolboxContext<TMobxToolboxProviderConfiguration>(contextName)

    if (!context.storeRoot) {
      throw new Error('Root store has not been found')
    }

    return context.storeRoot.stores
  }
}
