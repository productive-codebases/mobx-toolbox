import { configureMobxToolbox } from '..'
import EnvironmentBase from '@/stores/EnvironmentBase'
import StoreRootBase from '@/stores/StoreRootBase'
import { IMobxToolboxProviderConfiguration } from '@/types'
import { createEnvironmentStub } from './createEnvironmentStub'

class StoreRootC extends StoreRootBase<
  EnvironmentBase<any>,
  { storeRoot: StoreRootC }
> {
  public logger =
    this.storeRoot.environment.loggerSetup.newLogger('MobXToolBox')(
      'stores/storeRoot'
    )

  _instanciateStores(): { storeRoot: StoreRootC } {
    return {
      storeRoot: this
    }
  }

  sayHelloC() {
    return 'storeRootC'
  }
}

const env = createEnvironmentStub()
const storeRoot = new StoreRootC(env)

export const toolboxCConfiguration: IMobxToolboxProviderConfiguration<StoreRootC> =
  {
    storeRoot
  }

export const { components: ToolboxCComponents, hooks: toolboxCHooks } =
  configureMobxToolbox<typeof toolboxCConfiguration>('contextC')
