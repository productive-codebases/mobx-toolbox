import { IEnvironmentConfiguration } from '@/stores/AbstractEnvironment/types'
import { ProviderContext } from './context'
import { IMobxToolboxProviderProps, IProviderConfiguration } from './types'

export default function MobxToolboxProvider<
  TEnvironmentConfiguration extends IEnvironmentConfiguration,
  TProviderConfiguration extends IProviderConfiguration<TEnvironmentConfiguration>
>(
  props: IMobxToolboxProviderProps<
    TEnvironmentConfiguration,
    TProviderConfiguration
  >
) {
  return (
    <ProviderContext.Provider
      value={{ storeRoot: props.configuration.storeRoot }}
    >
      {props.children}
    </ProviderContext.Provider>
  )
}
