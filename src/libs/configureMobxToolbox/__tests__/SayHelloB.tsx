import { toolboxBHooks } from './toolboxB'

export interface ISayHelloProps {}

export default function SayHelloB(props: ISayHelloProps) {
  const { storeRoot } = toolboxBHooks.useStores()

  return <div data-testid="SayHelloB">StoreRootB: {storeRoot.sayHelloB()}</div>
}
