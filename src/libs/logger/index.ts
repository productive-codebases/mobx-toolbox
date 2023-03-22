import { setupLogger } from '@productive-codebases/toolbox'

const defaultLoggerMapping = {
  MobXToolBox: {
    'stores/storeRoot': 'stores/storeRoot'
  }
}

export const defaultLoggerSetup = setupLogger(defaultLoggerMapping)
