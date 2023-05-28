import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { mobxToolboxHooks } from '../libs/mobxToolbox'
import { handlePage1OnLoad } from './handlers'

export interface IPage1Props {}

function Page1(props: IPage1Props) {
  const { storePage1 } = mobxToolboxHooks.useStores()

  useEffect(() => {
    handlePage1OnLoad(storePage1)()
  }, [])

  return (
    <div>
      <button onClick={handlePage1OnLoad(storePage1)}>Reload users</button>

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
