import createComponent from 'shared/helpers/tests/createComponent'
import type { VueWrapper } from '@vue/test-utils'
import AppModal from './AppModal.vue'

describe('test AppModal', () => {
  let wrapper: VueWrapper

  afterEach(() => {
    wrapper.unmount()
  })

  it('initialized closed', () => {
    wrapper = createComponent(AppModal)

    expect(wrapper.classes()).not.toContain('opened')
  })
})
