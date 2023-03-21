import { defaultLoggerMapping, defaultSetupLogger } from '@/libs/logger'
import { LoggerSetup } from '@productive-codebases/toolbox'

export interface IEnvironmentConfiguration<
  TLoggerSetup extends LoggerSetup<
    typeof defaultLoggerMapping
  > = typeof defaultSetupLogger
> {
  loggerSetup: TLoggerSetup
  localStorage: Storage
}

/**
 * Base interface for stores environments.
 */
export interface IEnvironment<
  TEnvironmentConfiguration extends IEnvironmentConfiguration
> {
  loggerSetup: TEnvironmentConfiguration['loggerSetup']
  localStorage: TEnvironmentConfiguration['localStorage']
}
