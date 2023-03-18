import { ContextStores, IContextStores } from '@/context/ContextStores'

export interface IMobxToolboxProviderProps {
  configuration: IContextStores
  children: React.ReactNode
}

export default function MobxToolboxProvider(props: IMobxToolboxProviderProps) {
  return (
    <ContextStores.Provider
      value={{ storeRoot: props.configuration.storeRoot }}
    >
      {props.children}
    </ContextStores.Provider>
  )
}
