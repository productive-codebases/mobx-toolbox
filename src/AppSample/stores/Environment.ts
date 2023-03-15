import AbstractEnvironment from 'src/stores/AbstractEnvironment'
import { users } from '../entities/users'

export default class Environment extends AbstractEnvironment {
  fetchClient = {
    fetchUsers: () => Promise.resolve(users)
  }
}
