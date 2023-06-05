import { observer } from 'mobx-react-lite'
import { mobxToolboxHooks } from '../libs/mobxToolbox'
import { handlePage1OnLoad2 } from './handlers'

export interface IPage1Props {}

function Page1(props: IPage1Props) {
  const { storePage1 } = mobxToolboxHooks.useStores()

  return (
    <div>
      <button onClick={evt => handlePage1OnLoad2(storePage1)(evt)}>
        Reload users
      </button>

      <div>List of users:</div>

      <ul>
        {storePage1.users.values.map(user => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </div>
  )
}

export default observer(Page1)
