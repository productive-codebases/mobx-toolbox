import { IMobxToolboxProviderConfiguration } from '@/types'
import { useMobxToolboxContext } from './useMobxToolboxContext'

/**
 * Retrieve MobX stores from the context.
 */
export function useStores<
  TMobxToolboxProviderConfiguration extends IMobxToolboxProviderConfiguration<any>
>(): TMobxToolboxProviderConfiguration['storeRoot']['stores'] {
  const context = useMobxToolboxContext<TMobxToolboxProviderConfiguration>()

  if (!context.storeRoot) {
    throw new Error('Root store has not been found')
  }

  return context.storeRoot.stores
}
