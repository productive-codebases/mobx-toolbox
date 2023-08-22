import { defaultLoggerSetup } from '@/libs/logger'
import EnvironmentBase from '@/stores/EnvironmentBase'

export function createEnvironmentStub() {
  return new EnvironmentBase({
    loggerSetup: defaultLoggerSetup,
    localStorage
  })
}
