import { count } from './state'

export function increment(value: number = 1) {
  count.value += value
}
