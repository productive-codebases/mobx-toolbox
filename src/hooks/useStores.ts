import { IStoreEnvironment, IStoreRoot, IStores } from '..'
import { useMobxToolboxContext } from './useMobxToolboxContext'

/**
 * Retrieve MobX stores from the context.
 */
export function useStores<TStores extends IStores>(): TStores & {
  storeRoot: IStoreRoot<IStoreEnvironment, TStores>
} {
  const context = useMobxToolboxContext()

  if (!context.storeRoot) {
    throw new Error('Root store has not been found')
  }

  const allStores = {
    ...context.storeRoot.stores,
    storeRoot: context.storeRoot
  }

  return allStores
}
