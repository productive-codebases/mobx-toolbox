import { Store } from '@index'
import { action, IObservableValue, observable, runInAction } from 'mobx'
import AppStoreRoot from './StoreRoot'

// implement stores extending Store
export default class StoreA extends Store<AppStoreRoot> {
  private $counter = observable.box(0)

  @action
  increment() {
    this.$counter.set(this.$counter.get() + 1)
  }

  @action
  decrement() {
    runInAction(() => {
      this.$counter.set(this.$counter.get() - 1)
    })
  }

  get counter(): IObservableValue<number> {
    return this.$counter
  }
}
