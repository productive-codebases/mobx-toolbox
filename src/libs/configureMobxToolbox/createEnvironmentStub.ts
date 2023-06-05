import EnvironmentBase from '@/stores/EnvironmentBase'
import { defaultLoggerSetup } from '../logger'

export function createEnvironmentStub() {
  return new EnvironmentBase({
    loggerSetup: defaultLoggerSetup,
    localStorage
  })
}
