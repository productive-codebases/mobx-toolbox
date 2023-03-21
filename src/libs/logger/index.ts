import { setupLogger } from '@productive-codebases/toolbox'

export const defaultLoggerMapping = {
  MobXToolBox: {
    'stores/storeRoot': 'stores/storeRoot'
  }
}

export const defaultSetupLogger = setupLogger(defaultLoggerMapping)
