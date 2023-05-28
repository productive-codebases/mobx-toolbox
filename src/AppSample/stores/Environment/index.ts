import EnvironmentBase from '@/stores/EnvironmentBase'
import { AppEnvironmentConfiguration } from './configuration'

export default class AppEnvironment extends EnvironmentBase<AppEnvironmentConfiguration> {
  fetchClient = {
    /**
     * Fake get function.
     */
    get: () => {
      return Promise.resolve()
    }
  }
}
