import type { User } from '../../types/user'
import { user } from './state'

export function setUser(payload: User) {
  user.value = payload
}
