import MobxToolboxProvider from '@/components/MobxToolboxProvider'
import Page1 from './components/Page1'
import Environment from './stores/Environment'
import StoreRoot from './stores/StoreRoot'

const environment = new Environment()
const storeRoot = new StoreRoot(environment)

export default function AppSample() {
  return (
    <MobxToolboxProvider configuration={{ storeRoot }}>
      <Page1 />
    </MobxToolboxProvider>
  )
}
