import configureMobxToolboxProvider from '@/components/MobxToolboxProvider'
import { configureUseMobxToolboxContext } from '@/hooks/useMobxToolboxContext'
import { configureUseStores } from '@/hooks/useStores'
import { IMobxToolboxProviderConfiguration } from '@/types'

/**
 * Configure React Toolbox with a defined TMobxToolboxProviderConfiguration configuration.
 */
export function configureMobxToolbox<
  TMobxToolboxProviderConfiguration extends IMobxToolboxProviderConfiguration<any>
>(contextName: string) {
  return {
    contextName,
    components: {
      MobxToolboxProvider:
        configureMobxToolboxProvider<TMobxToolboxProviderConfiguration>(
          contextName
        )
    },
    hooks: {
      useMobxToolboxContext:
        configureUseMobxToolboxContext<TMobxToolboxProviderConfiguration>(
          contextName
        ),
      useStores:
        configureUseStores<TMobxToolboxProviderConfiguration>(contextName)
    }
  }
}
