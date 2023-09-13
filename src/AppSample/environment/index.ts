import { EnvironmentBase } from '@index'

// create an environment configuration
const appEnvironmentConfiguration = {
  logger: (message: string) => `Logger: ${message}`
}

// create the environment
const appEnvironment = new EnvironmentBase(appEnvironmentConfiguration)

export { appEnvironment }
