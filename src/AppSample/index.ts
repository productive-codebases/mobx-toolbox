import { observe } from 'mobx'
import { appEnvironment } from './environment'
import AppStoreRoot from './stores/StoreRoot'

const appStoreRoot = new AppStoreRoot(appEnvironment)

// @ts-ignore
window.__appStoreRoot = appStoreRoot

function startApp() {
  const app = `
  <button id="increment-button" type="button">Increment</button>
  <button id="decrement-button" type="button">Decrement</button>
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

  const { storeA } = appStoreRoot.stores

  observe(storeA.counter, () => {
    counterValueElement.innerHTML = storeA.counter.get().toString()
  })

  document.querySelector('#increment-button')?.addEventListener('click', () => {
    appStoreRoot.stores.storeA.increment()
  })

  document.querySelector('#decrement-button')?.addEventListener('click', () => {
    appStoreRoot.stores.storeA.decrement()
  })
}

startApp()
