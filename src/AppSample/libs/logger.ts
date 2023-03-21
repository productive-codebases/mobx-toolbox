import { defaultLoggerMapping } from '@/libs/logger'
import { deepMerge, setupLogger } from '@productive-codebases/toolbox'

const appLoggerMapping = deepMerge([
  defaultLoggerMapping,
  {
    SampleApp: {
      components: 'components',
      stores: 'stores'
    }
  }
])

export const appSetupLogger = setupLogger(appLoggerMapping)
