# MobX Toolbox

A set of MobX helpers for productive codebases.

## Installation

```
npm i @productive-codebases/mobx-toolbox --save
```

## Summary

When working with MobX, it's advantageous to have multiple stores that manage specific parts of your application's state. Through store composition, you can structure your stores for each domain within your application, ensuring a clear separation of responsibilities.

By assembling these stores, you construct the complete state of the application and enhance the reusability of your stores.

MobX Toolbox offers essential base classes, type definitions, and utility functions to assist you in organizing this store composition in accordance with official MobX guidelines.

## Getting started

### The plan

- Begin by establishing an Environment object, which enables the isolation of our stores from external dependencies.
- Declare the record of stores
- Create two stores as examples, each corresponding to different pages of our application.
- Proceed to create the root store, which will encompass the *Environment* and handle the instantiation of the store record.


### Implementation

1. Create the environment

```ts
// Implement the different clients, configuration, storage that you are using into your application.
const appEnvironmentConfiguration = {
  configuration: /* ... */,
  fetchClient: /* ... */,
  openApiClients: /* ... */
  localStorage: /* ... */
}

// Instanciate the environment
const environment = new EnvironmentBase(appEnvironmentConfiguration)

// Expose a type for the root store
type Environment = typeof environment
```

2. Declare the record of stores

```ts
// Expose all your stores, including the storeRoot in a single Record
interface IStoreRecord extends IStoreRecord<StoreRoot> {
  storeRoot: StoreRoot
  storeA: StoreA
  storeB: StoreB
}
```

3. Implement some stores

```ts
// Each store extends StoreBase<TStoreRoot>
class StoreA extends StoreBase<StoreRoot> {
  fetchThings() {
    // Your store can access the the environment via the storeRoot
    return this.storeRoot.environment.configuration.fetchClient/* .get({ ... }) */
  }
}

// Optional options for some of your store, here for the "StoreB"
interface IStoreBOptions {
  featureFlags: {
    enableThing: boolean
  }
}

// Pass the option as the second parameter of the StoreBase type
class StoreB extends StoreBase<
  StoreRoot,
  IStoreBOptions
> {
  fetchOtherThings() {
    // You store can access to the internal options saved in the StoreBase`s constructor
    if (!this.options.featureFlags.enableThing) {
      return Promise.resolve(null)
    }

    return this.storeRoot.environment.configuration.fetchClient/* .get({ ... }) */
  }
}
```

4. Create the root store.

```ts
// Implement the root store by extending StoreRootBase<TEnvironment, TStoreRecord>
class StoreRoot extends StoreRootBase<Environment, IStoreRecord> {
  _instanciateStores() {
    return {
      storeRoot: this,
      storeA: new StoreA(this, {}),
      storeB: new StoreB(this, {
        featureFlags: {
          enableThing: true
        }
      })
    }
  }
}
```

### Usage

The root store is now your main entry point. From there, you can go anywhere:

```ts
// Access to the environment
storeRoot.environment.configuration.fetchClient/* .get({ ... }) */

// Access to any stores
storeRoot.stores.storeA.fetchThings()
storeRoot.stores.storeB.fetchOtherThings()

// You can even go around circles if you like!
// (It just demonstrate how objects are linked together)
storeRoot.stores.storeA.storeRoot.stores.storeB.storeRoot.environment.configuration.localStorage
```

### Integration

MobX Toolbox preserves and doesn't alter MobX's reactivity system. The internal observation behavior remains pure MobX, so you can refer to MobX's documentation when constructing your store.

When it comes to making external parts of your application observable, such as components, you can consider different approaches depending on the UI framework you're using:

- **React**: You can store the root store in a context, making it accessible throughout your app using a single hook. Additionally, consider utilizing the mobx-react-lite library to observe changes within your components.

- **Angular**: Consider creating a service that manages the root store, allowing it to be injected into Angular's dependency injection system.

- **Vue**: A hybrid approach is provided by https://github.com/mobxjs/mobx-vue.
