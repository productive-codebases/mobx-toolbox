import MobxToolboxProvider from '@/components/MobxToolboxProvider'
import { useMobxToolboxContext } from '@/hooks/useMobxToolboxContext'
import { useStores } from '@/hooks/useStores'
import { IMobxToolboxProviderConfiguration } from '@/types'

/**
 * Configure React Toolbox with a defined IProviderConfiguration configuration.
 */
export function configureMobxToolbox<
  TMobxToolboxProviderConfiguration extends IMobxToolboxProviderConfiguration<any>
>() {
  return {
    components: {
      MobxToolboxProvider:
        MobxToolboxProvider<TMobxToolboxProviderConfiguration>
    },
    hooks: {
      useMobxToolboxContext:
        useMobxToolboxContext<TMobxToolboxProviderConfiguration>,
      useStores: useStores<TMobxToolboxProviderConfiguration>
    }
  }
}
