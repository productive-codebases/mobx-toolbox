import { action, computed, makeObservable, observable } from 'mobx'
import { StoreBase } from '@/libs/stores/StoreBase'
import { StoreRootBase } from '@/libs/stores/StoreRootBase'
import { IFlags } from './types'

export enum LoadingFlags {
  isReady = 0,
  isLoading = 1 << 0,
  isError = 1 << 1,
  isForbidden = 1 << 2
}

export class StoreFlags<
  TStoreRoot extends StoreRootBase<any, any>
> extends StoreBase<TStoreRoot> {
  @observable
  private $flags = LoadingFlags.isReady

  constructor(storeRoot: TStoreRoot, options = {}) {
    super(storeRoot, options)
    makeObservable(this)
  }

  /**
   * Reset flags.
   */
  @action
  reset(): this {
    this.$flags &= ~LoadingFlags.isLoading
    this.$flags &= ~LoadingFlags.isError
    this.$flags &= ~LoadingFlags.isForbidden

    return this
  }

  /**
   * Set flags just before an async process.
   */
  @action
  loading(): this {
    this.$flags |= LoadingFlags.isLoading

    this.$flags &= ~LoadingFlags.isError
    this.$flags &= ~LoadingFlags.isForbidden

    return this
  }

  /**
   * Unset the loading flag but keep other flags as it.
   */
  @action
  stopLoading(): this {
    this.$flags &= ~LoadingFlags.isLoading

    return this
  }

  /**
   * Set flags after a successful async process.
   */
  @action
  success(): this {
    this.$flags &= ~LoadingFlags.isLoading

    this.$flags &= ~LoadingFlags.isError
    this.$flags &= ~LoadingFlags.isForbidden

    return this
  }

  /**
   * Set flags after a failed async process.
   */
  @action
  fail(): this {
    this.$flags &= ~LoadingFlags.isLoading
    this.$flags &= ~LoadingFlags.isForbidden

    this.$flags |= LoadingFlags.isError

    return this
  }

  /**
   * Set flags after a forbidden access.
   */
  @action
  forbidden(): this {
    this.$flags &= ~LoadingFlags.isLoading
    this.$flags &= ~LoadingFlags.isError

    this.$flags |= LoadingFlags.isForbidden

    return this
  }

  @computed
  get isLoading(): boolean {
    return Boolean(this.$flags & LoadingFlags.isLoading)
  }

  @computed
  get isError(): boolean {
    return Boolean(this.$flags & LoadingFlags.isError)
  }

  @computed
  get isForbidden(): boolean {
    return Boolean(this.$flags & LoadingFlags.isForbidden)
  }

  /**
   * Return flags by accessing to properties allowing to track the results in
   * observer components.
   */
  @computed
  get flags(): IFlags {
    return {
      flags: true,
      isLoading: this.isLoading,
      isError: this.isError,
      isForbidden: this.isForbidden
    }
  }
}
