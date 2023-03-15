import { useStores } from '@/hooks/useStores'
import { useEffect, useState } from 'react'
import { IUser } from '../entities/users'
import { Stores } from '../stores/types'

export interface IPage1Props {}

export default function Page1(props: IPage1Props) {
  const [users, setUsers] = useState<IUser[]>([])
  const { storePage1 } = useStores<Stores>()

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
