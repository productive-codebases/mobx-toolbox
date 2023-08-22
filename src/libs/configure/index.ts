import configureProvider from '@/components/Provider'
import { configureContext } from '@/hooks/useContext'
import { configureUseStores } from '@/hooks/useStores'
import { IProviderConfiguration } from '@/types'

/**
 * Configure React Toolbox with a defined TProviderConfiguration configuration.
 */
export function configure<
  TProviderConfiguration extends IProviderConfiguration<any>
>(contextName: string) {
  return {
    contextName,
    components: {
      Provider: configureProvider<TProviderConfiguration>(contextName)
    },
    hooks: {
      useMobxToolboxContext:
        configureContext<TProviderConfiguration>(contextName),
      useStores: configureUseStores<TProviderConfiguration>(contextName)
    }
  }
}
