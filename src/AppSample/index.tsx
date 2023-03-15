import { ContextStores } from '@/context/ContextStores'
import Page1 from './components/Page1'
import Environment from './stores/Environment'
import StoreRoot from './stores/StoreRoot'

export interface IAppProps {}

const environment = new Environment()
const storeRoot = new StoreRoot(environment)

export default function App(props: IAppProps) {
  return (
    <ContextStores.Provider value={{ storeRoot }}>
      <Page1 />
    </ContextStores.Provider>
  )
}
