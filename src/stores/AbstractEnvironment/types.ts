import { defaultLoggerSetup } from '@/libs/logger'
import { LoggerSetup } from '@productive-codebases/toolbox'

export interface IEnvironmentConfiguration<
  TLoggerSetup extends LoggerSetup<
    (typeof defaultLoggerSetup)['loggerMapping']
  > = typeof defaultLoggerSetup
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
