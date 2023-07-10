import { IMobxToolboxProviderConfiguration } from '@/types'
import { useMemo } from 'react'
import { createContext } from './context'

export interface IMobxToolboxProviderProps<
  TMobxToolboxProviderConfiguration extends IMobxToolboxProviderConfiguration<any>
> {
  configuration: TMobxToolboxProviderConfiguration
  children: React.ReactNode
}

/**
 * Return the MobxToolboxProvider of `contextName`.
 */
export default function configureMobxToolboxProvider<
  TMobxToolboxProviderConfiguration extends IMobxToolboxProviderConfiguration<any>
>(contextName: string) {
  return function MobxToolboxProvider(
    props: IMobxToolboxProviderProps<TMobxToolboxProviderConfiguration>
  ) {
    const ProviderContext = useMemo(() => {
      return createContext(contextName)
    }, [])

    return (
      <ProviderContext.Provider
        value={{ storeRoot: props.configuration.storeRoot }}
      >
        {props.children}
      </ProviderContext.Provider>
    )
  }
}
