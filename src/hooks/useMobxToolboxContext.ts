import { ProviderContext } from '@/components/MobxToolboxProvider/context'
import { useContext } from 'react'

export function useMobxToolboxContext() {
  const context = useContext(ProviderContext)

  if (!context) {
    throw new Error(
      'Missing MobxToolbox context. Wrap your top component by <MobxToolboxProvider />.'
    )
  }

  return context
}
