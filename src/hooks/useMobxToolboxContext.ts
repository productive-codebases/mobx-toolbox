import { createContext } from '@/components/MobxToolboxProvider/context'
import {
  IMobxToolboxProvider,
  IMobxToolboxProviderConfiguration
} from '@/types'
import { useContext } from 'react'

/**
 * Return the toolbox context.
 */
export function useMobxToolboxContext<
  TMobxToolboxProviderConfiguration extends IMobxToolboxProviderConfiguration<any>
>(contextName: string) {
  const ProviderContext = createContext(contextName)

  const context = useContext(
    ProviderContext
  ) as IMobxToolboxProvider<TMobxToolboxProviderConfiguration>

  if (!context) {
    throw new Error(
      'Missing MobxToolbox context. Wrap your top component by <MobxToolboxProvider />.'
    )
  }

  return context
}
