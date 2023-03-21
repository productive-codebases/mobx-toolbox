import { IEnvironmentConfiguration } from '@/stores/AbstractEnvironment/types'
import { Maybe } from '@productive-codebases/toolbox'
import React from 'react'
import { IProviderConfiguration, IProviderContext } from './types'

const ProviderContext =
  React.createContext<
    Maybe<
      IProviderContext<
        IEnvironmentConfiguration,
        IProviderConfiguration<IEnvironmentConfiguration>
      >
    >
  >(null)

export { ProviderContext }
