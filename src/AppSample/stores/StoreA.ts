import { ObservableEither, StoreBase } from '@index'
import { action, observable } from 'mobx'
import { StoreRootApp } from './StoreRoot'

// implement stores extending Store
export class StoreA extends StoreBase<StoreRootApp> {
  readonly counterEither = ObservableEither.create(
    observable.box(''),
    observable.box(0)
  )

  readonly counterEither2 = ObservableEither.create(null, observable.box(0))

  @action
  increment() {
    this.counterEither.updateRight(box => box.set(this.counter + 1))
  }

  @action
  decrement() {
    this.counterEither.updateRight(box => box.set(this.counter - 1))
  }

  @action
  setError(errorMessage: string) {
    this.counterEither.updateLeft(box => box.set(errorMessage))
  }

  get counter(): number {
    return this.counterEither.right?.get() ?? 0
  }

  get error(): string {
    return this.counterEither.left?.get() ?? ''
  }
}
