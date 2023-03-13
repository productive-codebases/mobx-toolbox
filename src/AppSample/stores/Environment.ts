import AEnvironment from 'src/stores/Environment'
import { users } from '../entities/users'

export default class Environment extends AEnvironment {
  fetchClient = {
    fetchUsers: () => Promise.resolve(users)
  }
}
