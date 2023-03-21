import MobxToolboxProvider from '@/components/MobxToolboxProvider'
import Page1 from './components/Page1'
import AppEnvironment from './stores/Environment'
import { appEnvironmentConfiguration } from './stores/Environment/configuration'
import AppStoreRoot from './stores/StoreRoot'

const environment = new AppEnvironment(appEnvironmentConfiguration)
const storeRoot = new AppStoreRoot(environment)

export default function AppSample() {
  return (
    <MobxToolboxProvider configuration={{ storeRoot }}>
      <Page1 />
    </MobxToolboxProvider>
  )
}
