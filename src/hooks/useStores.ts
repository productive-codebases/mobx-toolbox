import { IStoreEnvironment, IStoreRoot, IStores } from '..'
import { ContextStores } from '@/context/ContextStores'
import { useContext } from 'react'

/**
 * Retrieve MobX stores from the context.
 */
export function useStores<TStores extends IStores>(): TStores & {
  storeRoot: IStoreRoot<IStoreEnvironment, TStores>
} {
  const value = useContext(ContextStores)

  if (!value.storeRoot) {
    throw new Error('Root store has not been found')
  }

  const allStores = {
    ...value.storeRoot.stores,
    storeRoot: value.storeRoot
  }

  return allStores
}
