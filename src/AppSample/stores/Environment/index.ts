import EnvironmentBase from '@/stores/EnvironmentBase'
import { AppEnvironmentConfiguration } from './configuration'

export default class AppEnvironment extends EnvironmentBase<AppEnvironmentConfiguration> {
  fetchClient = {
    get: () => {
      return Promise.resolve()
    }
  }
}
