import { setupLogger } from '@productive-codebases/toolbox'

const loggerMapping = {
  'mobx-toolbox': {
    stores: 'stores'
  }
}

const { newLogger } = setupLogger(loggerMapping)

export { newLogger }
