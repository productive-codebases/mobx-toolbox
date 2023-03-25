import { ProviderContext } from '@/components/MobxToolboxProvider/context'
import { useContext } from 'react'
import {
  IMobxToolboxProvider,
  IMobxToolboxProviderConfiguration
} from '@/types'

export function useMobxToolboxContext<
  TMobxToolboxProviderConfiguration extends IMobxToolboxProviderConfiguration<any>
>() {
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
