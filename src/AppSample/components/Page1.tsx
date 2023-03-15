import { useEffect, useState } from 'react'
import { IUser } from '../entities/users'
import { useAppStores } from '../hooks/useAppStores'

export interface IPage1Props {}

export default function Page1(props: IPage1Props) {
  const [users, setUsers] = useState<IUser[]>([])
  const { storePage1 } = useAppStores()

  useEffect(() => {
    storePage1.fetchUsers().then(users => {
      setUsers(users)
    })
  }, [])

  return (
    <div>
      <div>List of users:</div>

      <ul>
        {users.map(user => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </div>
  )
}
