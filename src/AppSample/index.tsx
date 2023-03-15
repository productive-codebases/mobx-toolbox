import { ContextStores } from '@/context/ContextStores'
import Page1 from './components/Page1'
import Environment from './stores/Environment'
import StoreRoot from './stores/StoreRoot'

export interface IAppSampleProps {}

const environment = new Environment()
const storeRoot = new StoreRoot(environment)

export default function AppSample(props: IAppSampleProps) {
  return (
    <ContextStores.Provider value={{ storeRoot }}>
      <Page1 />
    </ContextStores.Provider>
  )
}
