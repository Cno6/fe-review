import { computed } from 'vue'
import { count } from './state'

export const doubleCount = computed(() => count.value * 2)
