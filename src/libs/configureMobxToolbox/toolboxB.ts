import { configureMobxToolbox } from '.'
import EnvironmentBase from '@/stores/EnvironmentBase'
import StoreRootBase from '@/stores/StoreRootBase'
import { IMobxToolboxProviderConfiguration } from '@/types'
import { createEnvironmentStub } from './createEnvironmentStub'

class StoreRootB extends StoreRootBase<
  EnvironmentBase<any>,
  { storeRoot: StoreRootB }
> {
  public logger =
    this.storeRoot.environment.loggerSetup.newLogger('MobXToolBox')(
      'stores/storeRoot'
    )

  _instanciateStores(): { storeRoot: StoreRootB } {
    return {
      storeRoot: this
    }
  }

  sayHelloB() {
    return 'storeRootB'
  }
}

const env = createEnvironmentStub()
const storeRoot = new StoreRootB(env)

export const toolboxBConfiguration: IMobxToolboxProviderConfiguration<StoreRootB> =
  {
    storeRoot
  }

export const { components: ToolboxBComponents, hooks: toolboxBHooks } =
  configureMobxToolbox<typeof toolboxBConfiguration>()
