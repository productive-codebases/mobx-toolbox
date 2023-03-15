import { ContextStores } from '@/context/ContextStores'
import { IStoreRoot } from '@/stores/types'

export interface IMobxToolboxProviderProps {
  storeRoot: IStoreRoot<any, any>
  children: React.ReactNode
}

export default function MobxToolboxProvider(props: IMobxToolboxProviderProps) {
  return (
    <ContextStores.Provider value={{ storeRoot: props.storeRoot }}>
      {props.children}
    </ContextStores.Provider>
  )
}
