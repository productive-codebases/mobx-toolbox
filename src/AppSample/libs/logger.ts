import { defaultLoggerSetup } from '@/libs/logger'
import { deepMerge, setupLogger } from '@productive-codebases/toolbox'

const appLoggerMapping = deepMerge([
  defaultLoggerSetup.loggerMapping,
  {
    SampleApp: {
      components: 'components',
      stores: 'stores'
    }
  }
])

export const appSetupLogger = setupLogger(appLoggerMapping)
