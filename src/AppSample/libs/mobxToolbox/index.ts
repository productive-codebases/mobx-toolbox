import AppEnvironment from '@/AppSample/stores/Environment'
import { appEnvironmentConfiguration } from '@/AppSample/stores/Environment/configuration'
import AppStoreRoot from '@/AppSample/stores/StoreRoot'
import { configure } from '@/libs/configure'
import { IProviderConfiguration } from '@/types'

const appEnvironment = new AppEnvironment(appEnvironmentConfiguration)
const appStoreRoot = new AppStoreRoot(appEnvironment)

export const appProviderConfiguration: IProviderConfiguration<AppStoreRoot> = {
  storeRoot: appStoreRoot
}

export const { components: MobxToolboxComponents, hooks: mobxToolboxHooks } =
  configure<typeof appProviderConfiguration>('appContext')
