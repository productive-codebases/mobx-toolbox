import { configureMobxToolbox } from '..'
import EnvironmentBase from '@/stores/EnvironmentBase'
import StoreRootBase from '@/stores/StoreRootBase'
import { IMobxToolboxProviderConfiguration } from '@/types'
import { createEnvironmentStub } from './createEnvironmentStub'

class StoreRootA extends StoreRootBase<
  EnvironmentBase<any>,
  { storeRoot: StoreRootA }
> {
  public logger =
    this.storeRoot.environment.loggerSetup.newLogger('MobXToolBox')(
      'stores/storeRoot'
    )

  _instanciateStores(): { storeRoot: StoreRootA } {
    return {
      storeRoot: this
    }
  }

  sayHelloA() {
    return 'storeRootA'
  }
}

const env = createEnvironmentStub()
const storeRoot = new StoreRootA(env)

export const toolboxAConfiguration: IMobxToolboxProviderConfiguration<StoreRootA> =
  {
    storeRoot
  }

export const { components: ToolboxAComponents, hooks: toolboxAHooks } =
  configureMobxToolbox<typeof toolboxAConfiguration>('contextA')
