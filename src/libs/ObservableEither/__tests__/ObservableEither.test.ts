// eslint-disable-next-line max-classes-per-file
import type { Maybe } from '@productive-codebases/toolbox'
import { action, autorun, computed, observable, observe, toJS } from 'mobx'
import { ObservableEither } from '..'

class IError {
  constructor(public message?: string) {}
}

interface IUser {
  id: number
  name: string
}

describe('ObservableEither', () => {
  it('should set left and right values', () => {
    expect.assertions(4)

    const spy = jest.fn()

    const either = ObservableEither.create(
      // not observable
      new IError(),
      // not observable
      null as Maybe<IUser>
    ).setDebugLogger(spy)

    // if success, success is defined and error is null

    either.setRight({
      id: 1,
      name: 'Bob'
    })

    expect(either.right).toEqual({
      id: 1,
      name: 'Bob'
    })

    expect(either.left).toEqual(null)

    // if error, error is defined and success is null

    either.setLeft({
      message: 'Something happens'
    })

    expect(either.left).toEqual({
      message: 'Something happens'
    })

    expect(either.right).toBeNull()
  })

  it('should update right value', () => {
    expect.assertions(4)

    const either = ObservableEither.create(
      observable.box<IError>(new IError()),
      observable.box<IUser>()
    )

    const dispose = observe(either.either.right!, change => {
      expect(change.type).toEqual('update')
      expect(change.newValue).toEqual({
        id: 1,
        name: 'Bob'
      })
    })

    either.updateRight(box =>
      box.set({
        id: 1,
        name: 'Bob'
      })
    )

    expect(toJS(either.right)).toEqual({
      id: 1,
      name: 'Bob'
    })

    expect(either.left).toBeNull()

    dispose()
  })

  it('should update left value', () => {
    expect.assertions(4)

    const either = ObservableEither.create(
      observable.box<IError>(),
      observable.box<IUser>()
    )

    const dispose = observe(either.either.left!, change => {
      expect(change.type).toEqual('update')
      expect(change.newValue).toEqual({
        message: 'Something happens'
      })
    })

    either.updateLeft(box =>
      box.set({
        message: 'Something happens'
      })
    )

    expect(toJS(either.left)).toEqual({
      message: 'Something happens'
    })

    expect(either.right).toBeNull()

    dispose()
  })

  it('should memo values', () => {
    const spy = jest.fn()

    const either = ObservableEither.create(
      observable.box(new IError()),
      observable.box<IUser>()
    ).setDebugLogger(spy)

    either.updateRight(box =>
      box.set({
        id: 1,
        name: 'Bob'
      })
    )

    either.updateRight(box =>
      box.set({
        id: 1,
        name: 'Bob'
      })
    )

    either.updateRight(box =>
      box.set({
        id: 1,
        name: 'Bob'
      })
    )

    either.updateRight(box =>
      box.set({
        id: 2,
        name: 'Alice'
      })
    )

    either.updateLeft(box => box.set(new IError('Boom')))

    autorun(() => {
      // Three right accesses will trigger only one right computation
      either.right
      either.right
      either.right
    })()

    autorun(() => {
      // An another right access in an another observe block will trigger an another right computation
      either.right

      // Will trigger a left computation
      either.left
    })()

    expect(spy.mock.calls).toEqual([
      // 4 first updateRight
      ['updateRight'],
      ['updateRight'],
      ['updateRight'],
      ['updateRight'],
      // next, one updateLeft
      ['updateLeft'],
      // 2 right computation for each observe blocks
      ['computeRight'],
      ['computeRight'],
      // 1 left computation for the latest observe block
      ['computeLeft']
    ])
  })

  it('should toggle position', () => {
    const either = ObservableEither.create(
      observable.box<IError>(),
      observable.box<IUser>()
    )

    either.updateLeft(box =>
      box.set({
        message: 'Something happens'
      })
    )

    either.updateRight(box =>
      box.set({
        id: 1,
        name: 'Bob'
      })
    )

    // right has been updated last, so the current value is right

    const [left1, right1] = either.unwrapedEither

    expect(left1).toBeNull()
    expect(toJS(right1)).toEqual({
      id: 1,
      name: 'Bob'
    })

    // set "left" to get the error (without having update left value)

    either.setPosition('left')

    const [left2, right2] = either.unwrapedEither

    expect(toJS(left2)).toEqual({
      message: 'Something happens'
    })
    expect(toJS(right2)).toBeNull()
  })

  it('should observe values', () => {
    expect.assertions(2)

    const either = ObservableEither.create(
      observable.box<IError>(),
      observable.box<IUser>()
    )

    either.observeLeft(change => {
      if (change.type === 'update') {
        expect(change.newValue.message).toBe(change.newValue.message)
      }
    })

    either.observeRight(change => {
      if (change.type === 'update') {
        expect(change.newValue).toEqual({
          id: 1,
          name: 'Bob'
        })
      }
    })

    either.updateLeft(box =>
      box.set({
        message: 'Something happens'
      })
    )

    either.updateRight(box =>
      box.set({
        id: 1,
        name: 'Bob'
      })
    )
  })

  it('should reset values', () => {
    expect.assertions(3)

    const either = ObservableEither.create(
      observable.box<IError>(),
      observable.box<IUser>()
    ).onReset(self => {
      self.updateLeft(box => box.set(undefined))
      self.updateRight(box => box.set(undefined))
    })

    either.updateLeft(box =>
      box.set({
        message: 'Something happens'
      })
    )

    either.updateRight(box =>
      box.set({
        id: 1,
        name: 'Bob'
      })
    )

    either.reset()

    const [left, right] = either.unwrapedEither

    expect(left?.get()).toBeUndefined()
    expect(right?.get()).toBeUndefined()

    // should keep the reactivity
    const dispose = observe(either.either.right!, change => {
      expect(change.newValue).toEqual({
        id: 1,
        name: 'Bob'
      })
    })

    either.updateRight(box =>
      box.set({
        id: 1,
        name: 'Bob'
      })
    )

    dispose()
  })

  describe('Through an another store', () => {
    const spy = jest.fn()

    class StoreTodo {
      public readonly todosEither = ObservableEither.create(
        null,
        observable.array<string>([])
      ).setDebugLogger(spy)

      addTodo = action((todo: string): void => {
        this.todosEither.updateRight(arr => arr.push(todo))
      })

      @computed
      get _todoCountComputed() {
        return this.todosEither.right?.length ?? 0
      }

      @computed
      get todoCount(): number {
        return this._todoCountComputed
      }
    }

    class StoreApp {
      storeTodo = new StoreTodo()

      @computed
      get _countTodos() {
        return this.storeTodo.todoCount
      }

      @computed
      get countTodos() {
        return this._countTodos
      }
    }

    let storeApp: StoreApp

    beforeEach(() => {
      spy.mockClear()
      storeApp = new StoreApp()
    })

    it('should trigger computations', () => {
      storeApp.storeTodo.addTodo('Make a test')
      storeApp.storeTodo.addTodo('Take a break')

      autorun(() => {
        // should trigger one computation
        storeApp.countTodos
        storeApp.countTodos
        storeApp.countTodos
      })

      expect(spy.mock.calls).toEqual([
        ['updateRight'],
        ['updateRight'],
        ['computeRight']
      ])

      expect(storeApp.countTodos).toBe(2)
    })
  })
})
