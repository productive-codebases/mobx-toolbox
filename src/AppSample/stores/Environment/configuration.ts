import { appSetupLogger } from '@/AppSample/libs/logger'
import { IEnvironmentConfiguration } from '@/stores/EnvironmentBase/types'

export const appEnvironmentConfiguration: IEnvironmentConfiguration<
  typeof appSetupLogger
> = {
  loggerSetup: appSetupLogger,
  localStorage: window.localStorage
}

export type AppEnvironmentConfiguration = typeof appEnvironmentConfiguration
