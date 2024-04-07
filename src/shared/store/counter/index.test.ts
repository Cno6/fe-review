import { createPinia, setActivePinia } from 'pinia'

import { useCounterStore } from './index'

describe('counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increments', () => {
    const counter = useCounterStore()
    expect(counter.count).toBe(0)
    counter.increment()
    expect(counter.count).toBe(1)
  })

  it('increments by a value', () => {
    const counter = useCounterStore()
    counter.increment(5)
    expect(counter.count).toBe(5)
  })
})
