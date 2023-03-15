import { newLogger } from 'src/libs/newLogger'
import LocalStorageStub from 'src/stubs/LocalStorageStub'
import { IStoreEnvironment } from '../types'

export default abstract class AbstractEnvironment implements IStoreEnvironment {
  logger = newLogger('mobx-toolbox')('stores')
  localStorage = new LocalStorageStub()
}