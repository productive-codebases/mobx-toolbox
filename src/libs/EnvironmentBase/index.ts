/**
 * Environment base class, allowing passing a configuration value.
 */
export class EnvironmentBase<TConfiguration> {
  private _configuration: TConfiguration

  constructor(configuration: TConfiguration) {
    this._configuration = configuration
  }

  /**
   * Return the configuration.
   */
  get configuration(): TConfiguration {
    return this._configuration
  }
}
