/**
 * Environment base class, allowing passing a configuration value.
 */
export default class Environment<TEnvironmentConfiguration> {
  private _configuration: TEnvironmentConfiguration

  constructor(environmentConfiguration: TEnvironmentConfiguration) {
    this._configuration = environmentConfiguration
  }

  /**
   * Return the configuration.
   */
  get configuration(): TEnvironmentConfiguration {
    return this._configuration
  }
}
