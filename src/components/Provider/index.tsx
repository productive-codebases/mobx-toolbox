import { IProviderConfiguration } from '@/types'
import { useMemo } from 'react'
import { createContext } from './context'

export interface IProviderProps<
  TProviderConfiguration extends IProviderConfiguration<any>
> {
  configuration: TProviderConfiguration
  children: React.ReactNode
}

/**
 * Create a new React context identified by `contextName` and return the associated
 * React Provider component.
 */
export default function configureProvider<
  TProviderConfiguration extends IProviderConfiguration<any>
>(contextName: string) {
  return function Provider(props: IProviderProps<TProviderConfiguration>) {
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
