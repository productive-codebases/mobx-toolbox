import { action, computed, makeObservable, observable } from 'mobx'

export default class StoreObservableMap<TKey, TValue> {
  private _map = observable.map<TKey, TValue>()

  constructor() {
    makeObservable(this)
  }

  observable() {
    return this._map
  }

  @action
  setValues(values: Map<TKey, TValue>) {
    this._map.replace(values)
  }

  @computed
  get values(): TValue[] {
    return Array.from(this._map.values())
  }
}
