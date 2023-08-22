import { createContext } from '@/components/Provider/context'
import { IProvider, IProviderConfiguration } from '@/types'
import { useContext } from 'react'

/**
 * Return the toolbox context.
 */
export function configureContext<
  TProviderConfiguration extends IProviderConfiguration<any>
>(contextName: string) {
  return function useMobxToolboxContext(): IProvider<TProviderConfiguration> {
    const ProviderContext = createContext(contextName)

    const context = useContext(
      ProviderContext
    ) as IProvider<TProviderConfiguration>

    if (!context) {
      throw new Error(
        "Missing MobxToolbox context. Wrap your top component by the MobxToolbox's Provider."
      )
    }

    return context
  }
}
