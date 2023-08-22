import Page1 from './components/Page1'
import {
  appProviderConfiguration,
  MobxToolboxComponents
} from './libs/mobxToolbox'

export default function AppSample() {
  return (
    <MobxToolboxComponents.Provider configuration={appProviderConfiguration}>
      <Page1 />
    </MobxToolboxComponents.Provider>
  )
}
