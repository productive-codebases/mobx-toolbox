import { useContext } from 'react'
import { ContextStores } from '..'

export function useMobxToolboxContext() {
  const context = useContext(ContextStores)

  if (!context) {
    throw new Error(
      'Missing MobxToolbox context. Wrap your top component by <MobxToolboxProvider />.'
    )
  }

  return context
}
