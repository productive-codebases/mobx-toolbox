import { assertUnreachableCase } from '@productive-codebases/toolbox'
import escapeRegExp from 'lodash.escaperegexp'
import { action, computed, makeObservable, observable } from 'mobx'
import AbstractStoreBase from '../AbstractStoreBase'
import { IStoreRoot } from '../types'

export type InputSearchTransformMethod = 'default' | 'greedy'

interface IStoreInputSearchOptions {
  transformMethod?: InputSearchTransformMethod
}

export default class StoreInputSearch<
  TStoreRoot extends IStoreRoot<any, any>
> extends AbstractStoreBase<TStoreRoot, IStoreInputSearchOptions> {
  private $value = observable.box<string>('')

  private $focus = observable.box<boolean>(false)

  private $isDirty = observable.box<boolean>(false)

  constructor(storeRoot: TStoreRoot, options_: IStoreInputSearchOptions = {}) {
    const options: IStoreInputSearchOptions = {
      transformMethod: 'greedy',
      ...options_
    }

    super(storeRoot, options)

    makeObservable(this)
  }

  /**
   * Transform the value according to the transformMethod.
   */
  private _transformSearchValue(searchValue: string): string {
    const transformMethod = this.options.transformMethod ?? 'greedy'

    switch (transformMethod) {
      case 'default':
        return searchValue

      // if greedy, insert '.*' between each char to match non consecutive chars
      case 'greedy':
        return searchValue
          .split('')
          .reduce<string[]>(
            (acc, char) => acc.concat([escapeRegExp(char), '.*']),
            []
          )
          .join('')

      default:
        assertUnreachableCase(transformMethod)
    }
  }

  /**
   * Actions
   */

  @action
  reset(): this {
    this.$value.set('')
    this.setIsDirty(false)
    return this
  }

  @action
  setValue(value: string): this {
    this.$value.set(value)
    this.setIsDirty(true)
    return this
  }

  @action
  setFocus(value: boolean): this {
    this.$focus.set(value)
    return this
  }

  @action
  setIsDirty(value: boolean): this {
    this.$isDirty.set(value)
    return this
  }

  @action
  submit(): this {
    this.setIsDirty(false)
    return this
  }

  /* Computed */

  /**
   * Return true if a value has been filled.
   */
  @computed
  get hasValue(): boolean {
    return this.$value.get() !== ''
  }

  /**
   * Return the value.
   */
  @computed
  get value(): string {
    return this.$value.get()
  }

  /**
   * Return the transformed values as a string.
   */
  @computed
  get transformedValue(): string {
    return this._transformSearchValue(this.$value.get())
  }

  /**
   * Return the transformed values as a regexp.
   */
  @computed
  get transformedValueAsRegexp(): RegExp {
    return new RegExp(this.transformedValue, 'i')
  }

  /**
   * Return the focus value.
   */
  @computed
  get focus(): boolean {
    return this.$focus.get()
  }

  /**
   * Return the isDirty value.
   */
  @computed
  get isDirty(): boolean {
    return this.$isDirty.get()
  }
}
