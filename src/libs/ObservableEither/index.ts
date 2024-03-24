import { isDefined, type Maybe } from '@productive-codebases/toolbox'
import {
  IObjectDidChange,
  Lambda,
  action,
  computed,
  isObservable,
  makeObservable,
  observe
} from 'mobx'

interface IEither<TLeft, TRight> {
  left: TLeft
  right: TRight
}

type EitherPosition = 'left' | 'right'

export class ObservableEither<TLeft, TRight> {
  private _either: IEither<TLeft, TRight>

  private _position: EitherPosition = 'right'

  private _onResetFn: Maybe<(self: this) => void> = null

  private _debugLogger?: (...messages: any[]) => void

  private constructor(left: TLeft, right: TRight) {
    this._either = { left, right }

    makeObservable(this)
  }

  /**
   * Allow to debug the observable either assignations.
   */
  setDebugLogger(logger?: (message: string) => void): this {
    this._debugLogger = logger

    return this
  }

  /**
   * Register a function triggered when resetting.
   */
  onReset(resetFn: (self: this) => void): this {
    this._onResetFn = resetFn
    return this
  }

  /**
   * Observe the left value and trigger `fn` on change.
   */
  observeLeft(fn: (change: IObjectDidChange<TLeft>) => void): Maybe<Lambda> {
    if (!isObservable(this._either.left)) {
      this._log('Right value is not observable')
      return null
    }

    return observe(this._either.left as Object, fn)
  }

  /**
   * Observe the right value and trigger `fn` on change.
   */
  observeRight(fn: (change: IObjectDidChange<TRight>) => void): Maybe<Lambda> {
    if (!isObservable(this._either.right)) {
      this._log('Right value is not observable')
      return null
    }

    return observe(this._either.right as Object, fn)
  }

  /**
   * Actions
   */

  /**
   * Set right value.
   */
  @action
  setRight(right: TRight) {
    this._either.right = right
    this._position = 'right'

    this._log('setRight', right)

    return this
  }

  /**
   * Update right value for mutable observables.
   */
  @action
  updateRight(fn: (right: TRight) => void) {
    if (!isDefined(this._either.right)) {
      return this
    }

    this._position = 'right'
    fn(this._either.right)

    this._log('updateRight')

    return this
  }

  /**
   * Set left value.
   */
  @action
  setLeft(left: TLeft) {
    this._either.left = left
    this._position = 'left'

    this._log('setLeft', left)

    return this
  }

  /**
   * Update left value for mutable observables.
   */
  @action
  updateLeft(fn: (left: TLeft) => void) {
    if (!isDefined(this._either.left)) {
      return this
    }

    this._position = 'left'
    fn(this._either.left)

    this._log('updateLeft')

    return this
  }

  /**
   * For some reasons, you may be interesting to toggle to left or right,
   * as values are not overridden when during updates.
   */
  @action
  setPosition(position: EitherPosition) {
    this._position = position
    return this
  }

  /**
   * Reinitialize left and right values from the creator function.
   */
  @action
  reset() {
    if (!this._onResetFn) {
      return
    }

    this._log('reset')

    this._onResetFn(this)
  }

  /**
   * Computed
   */

  /**
   * Return the either object
   */
  @computed
  get either(): IEither<TLeft, TRight> {
    return this._either
  }

  /**
   * Return right value.
   * If position is "left", return null.
   */
  @computed
  get right() {
    this._log('computeRight')

    if (this._position === 'left') {
      return null
    }

    return this._either.right
  }

  /**
   * Return left value.
   * If position is "right", return null.
   */
  @computed
  get left() {
    this._log('computeLeft')

    if (this._position === 'right') {
      return null
    }

    return this._either.left
  }

  /**
   * Return booleans according to the position.
   */
  @computed
  get isLeft(): boolean {
    return this._position === 'left'
  }

  @computed
  get isRight(): boolean {
    return this._position === 'right'
  }

  /**
   * Return left, right values tuple.
   */
  @computed
  get unwrapedEither() {
    return [this.left, this.right] as [Maybe<TLeft>, Maybe<TRight>]
  }

  /**
   * Private
   */

  _log(...messages: any[]): void {
    if (!this._debugLogger) {
      return
    }

    this._debugLogger(...messages)
  }

  /**
   * Create a new new observable either.
   */
  static create<TLeft, TRight>(
    left: TLeft,
    right: TRight
  ): ObservableEither<TLeft, TRight> {
    return new ObservableEither(left, right)
  }
}
