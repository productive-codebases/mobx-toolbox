import { newLogger } from '@/libs/newLogger'
import { IStoreEnvironment } from '../types'

export default abstract class AbstractEnvironment implements IStoreEnvironment {
  logger = newLogger('mobx-toolbox')('stores')
  localStorage = window.localStorage
}
