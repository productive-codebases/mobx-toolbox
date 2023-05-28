import { createHandler } from '@/libs/createHandler'
import StorePage1 from '../stores/StorePage1'

// export const handlePage1OnLoad = (storePage1: StorePage1) => {
//   return createHandler(() => {
//     storePage1.fetchUsers()
//   })
// }

export const handlePage1OnLoad = (storePage1: StorePage1) => () =>
  storePage1.fetchUsers()
