import Page1 from './components/Page1'
import {
  appMobxToolboxProviderConfiguration,
  MobxToolboxComponents
} from './libs/mobxToolbox'

export default function AppSample() {
  return (
    <MobxToolboxComponents.MobxToolboxProvider
      configuration={appMobxToolboxProviderConfiguration}
    >
      <Page1 />
    </MobxToolboxComponents.MobxToolboxProvider>
  )
}
