import { setupLogger } from '@productive-codebases/toolbox'
import { IStoreRoot } from '../types'

const loggerMapping = {
  stores: {
    storeRoot: 'storeRoot'
  }
}

const { newLogger } = setupLogger(loggerMapping)

export default class StoreRoot implements IStoreRoot {
  public logger = newLogger('stores')('storeRoot')
}
