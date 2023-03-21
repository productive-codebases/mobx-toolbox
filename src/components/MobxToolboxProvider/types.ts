import {
  IEnvironment,
  IEnvironmentConfiguration
} from '@/stores/AbstractEnvironment/types'
import { IStoreRoot } from '@/stores/types'
import { Maybe } from '@productive-codebases/toolbox'

export interface IProviderConfiguration<
  TEnvironmentConfiguration extends IEnvironmentConfiguration
> {
  storeRoot: Maybe<IStoreRoot<IEnvironment<TEnvironmentConfiguration>, any>>
}

export interface IProviderContext<
  TEnvironmentConfiguration extends IEnvironmentConfiguration,
  TProviderConfiguration extends IProviderConfiguration<TEnvironmentConfiguration>
> {
  storeRoot: TProviderConfiguration['storeRoot']
}

export interface IMobxToolboxProviderProps<
  TEnvironmentConfiguration extends IEnvironmentConfiguration,
  TProviderConfiguration extends IProviderConfiguration<TEnvironmentConfiguration>
> {
  configuration: TProviderConfiguration
  children: React.ReactNode
}
