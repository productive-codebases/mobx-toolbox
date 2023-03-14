import AbstractEnvironment from 'src/stores/Environment'
import { users } from '../entities/users'

export default class Environment extends AbstractEnvironment {
  fetchClient = {
    fetchUsers: () => Promise.resolve(users)
  }
}
