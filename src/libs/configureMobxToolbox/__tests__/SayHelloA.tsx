import { toolboxAHooks } from './toolboxA'

export interface ISayHelloProps {}

export default function SayHelloA(props: ISayHelloProps) {
  const { storeRoot } = toolboxAHooks.useStores()

  return <div data-testid="SayHelloA">StoreRootA: {storeRoot.sayHelloA()}</div>
}
