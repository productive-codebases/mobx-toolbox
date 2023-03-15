import { IStoreEnvironment, IStoreRoot } from '..'
import { Maybe } from '@productive-codebases/toolbox'
import { createContext } from 'react'

export interface IContextStores {
  storeRoot: Maybe<IStoreRoot<IStoreEnvironment, any>>
}

export const ContextStores = createContext<IContextStores>({ storeRoot: null })
