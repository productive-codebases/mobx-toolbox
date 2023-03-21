import AbstractEnvironment from '@/stores/AbstractEnvironment'
import { AppEnvironmentConfiguration } from './configuration'

export default class AppEnvironment extends AbstractEnvironment<AppEnvironmentConfiguration> {
  fetchClient = {
    get: () => {
      return Promise.resolve()
    }
  }
}
