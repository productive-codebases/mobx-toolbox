import AbstractStoreRoot from '@/stores/AbstractStoreRoot'
import Environment from './Environment'
import StorePage1 from './StorePage1'
import StorePage2 from './StorePage2'
import { Stores } from './types'

export default class StoreRoot extends AbstractStoreRoot<Environment, Stores> {
  _instanciateStores(): Stores {
    return {
      storePage1: new StorePage1(this, {
        storePage1Options: {}
      }),

      storePage2: new StorePage2(this, {})
    }
  }
}
