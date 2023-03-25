import { IMobxToolboxProvider } from '@/types'
import { Maybe } from '@productive-codebases/toolbox'
import React from 'react'

const ProviderContext =
  React.createContext<Maybe<IMobxToolboxProvider<any>>>(null)

export { ProviderContext }
