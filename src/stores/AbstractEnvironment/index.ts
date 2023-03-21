import { IEnvironment, IEnvironmentConfiguration } from './types'

export default abstract class AbstractEnvironment<
  TEnvironmentConfiguration extends IEnvironmentConfiguration
> implements IEnvironment<TEnvironmentConfiguration>
{
  loggerSetup: TEnvironmentConfiguration['loggerSetup']

  localStorage: TEnvironmentConfiguration['localStorage']

  constructor(environmentConfiguration: TEnvironmentConfiguration) {
    this.loggerSetup = environmentConfiguration.loggerSetup
    this.localStorage = environmentConfiguration.localStorage
  }
}
