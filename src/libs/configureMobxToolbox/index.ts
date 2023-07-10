import getMobxToolboxProvider from '@/components/MobxToolboxProvider'
import { useMobxToolboxContext } from '@/hooks/useMobxToolboxContext'
import { useStores } from '@/hooks/useStores'
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
        getMobxToolboxProvider<TMobxToolboxProviderConfiguration>(contextName)
    },
    hooks: {
      useMobxToolboxContext:
        useMobxToolboxContext<TMobxToolboxProviderConfiguration>,
      useStores: useStores<TMobxToolboxProviderConfiguration>(contextName)
    }
  }
}
