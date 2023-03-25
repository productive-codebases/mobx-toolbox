import { IMobxToolboxProviderConfiguration } from '@/types'
import { ProviderContext } from './context'

export interface IMobxToolboxProviderProps<
  TMobxToolboxProviderConfiguration extends IMobxToolboxProviderConfiguration<any>
> {
  configuration: TMobxToolboxProviderConfiguration
  children: React.ReactNode
}

export default function MobxToolboxProvider<
  TMobxToolboxProviderConfiguration extends IMobxToolboxProviderConfiguration<any>
>(props: IMobxToolboxProviderProps<TMobxToolboxProviderConfiguration>) {
  return (
    <ProviderContext.Provider
      value={{ storeRoot: props.configuration.storeRoot }}
    >
      {props.children}
    </ProviderContext.Provider>
  )
}
