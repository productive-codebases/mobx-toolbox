import { action } from 'mobx'
import StorePage1 from '../stores/StorePage1'
import { createHandler } from '@/libs/createHandler'

export const handlePage1OnLoad = (storePage1: StorePage1) => {
  return action(() => {
    storePage1.fetchUsers()
  })
}

export const handlePage1OnLoad2 = (storePage1: StorePage1) =>
  createHandler(evt => {
    return storePage1.fetchUsers()
  })

// export const handlePage1OnLoad = (storePage1: StorePage1) => () =>
//   storePage1.fetchUsers()
