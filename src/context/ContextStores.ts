import { Maybe } from '@productive-codebases/toolbox'
import { createContext } from 'react'
import { IStoreEnvironment, IStoreRoot } from 'src/stores/types'

export interface IContextStores {
  storeRoot: Maybe<IStoreRoot<IStoreEnvironment, any>>
}

export const ContextStores = createContext<IContextStores>({ storeRoot: null })
