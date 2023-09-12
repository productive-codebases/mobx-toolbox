import { Environment } from '@index'

// create an environment configuration
const appEnvironmentConfiguration = {
  logger: (message: string) => `Logger: ${message}`
}

// create the environment
const appEnvironment = new Environment(appEnvironmentConfiguration)

export { appEnvironment }
