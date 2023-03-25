import AppEnvironment from '@/AppSample/stores/Environment'
import { appEnvironmentConfiguration } from '@/AppSample/stores/Environment/configuration'
import AppStoreRoot from '@/AppSample/stores/StoreRoot'
import { configureMobxToolbox } from '@/libs/configureMobxToolbox'
import { IMobxToolboxProviderConfiguration } from '@/types'

const appEnvironment = new AppEnvironment(appEnvironmentConfiguration)
const appStoreRoot = new AppStoreRoot(appEnvironment)

export const appMobxToolboxProviderConfiguration: IMobxToolboxProviderConfiguration<AppStoreRoot> =
  {
    storeRoot: appStoreRoot
  }

export const { components: MobxToolboxComponents, hooks: mobxToolboxHooks } =
  configureMobxToolbox<typeof appMobxToolboxProviderConfiguration>()
