import { setupLogger } from '@productive-codebases/toolbox'

export const defaultLoggerMapping = {
  MobXToolBox: {
    'stores/StoreRoot': 'stores/StoreRoot'
  }
}

export const defaultSetupLogger = setupLogger(defaultLoggerMapping)
