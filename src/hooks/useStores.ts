import { IProviderConfiguration } from '@/types'
import { configureContext } from './useContext'

/**
 * Retrieve MobX stores from the toolbox context.
 */
export function configureUseStores<
  TProviderConfiguration extends IProviderConfiguration<any>
>(contextName: string) {
  return function useStores(): TProviderConfiguration['storeRoot']['stores'] {
    const context = configureContext(contextName)()

    if (!context.storeRoot) {
      throw new Error('Root store has not been found')
    }

    return context.storeRoot.stores
  }
}
