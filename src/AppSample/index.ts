import { appEnvironment } from './environment'
import { StoreRootApp } from './stores/StoreRoot'

const storeRootApp = new StoreRootApp(appEnvironment)

// @ts-ignore
window.__storeRootApp = storeRootApp

function startApp() {
  const app = `
  <button id="increment-button" type="button">Increment</button>
  <button id="decrement-button" type="button">Decrement</button>
  <button id="set-error" type="button">Set error</button>
  <div id="counter-value">?</div>
`

  const rootElement = document.getElementById('root')

  if (!rootElement) {
    return
  }

  rootElement.innerHTML = app

  const counterValueElement = document.getElementById('counter-value')

  if (!counterValueElement) {
    return
  }

  const { storeA } = storeRootApp.stores

  storeA.counterEither.observeRight(() => {
    counterValueElement.innerHTML = storeA.counter.toString()
  })

  storeA.counterEither.observeLeft(() => {
    counterValueElement.innerHTML = storeA.error
  })

  document.querySelector('#increment-button')?.addEventListener('click', () => {
    storeRootApp.stores.storeA.increment()
  })

  document.querySelector('#decrement-button')?.addEventListener('click', () => {
    storeRootApp.stores.storeA.decrement()
  })

  document.querySelector('#set-error')?.addEventListener('click', () => {
    storeRootApp.stores.storeA.setError(`Error at ${new Date().toISOString()}`)
  })
}

startApp()
