import { toolboxCHooks } from './toolboxC'

export interface ISayHelloProps {}

export default function SayHelloC(props: ISayHelloProps) {
  const { storeRoot } = toolboxCHooks.useStores()

  return <div data-testid="SayHelloC">StoreRootC: {storeRoot.sayHelloC()}</div>
}
