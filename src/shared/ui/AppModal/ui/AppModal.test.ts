import createComponent from 'shared/helpers/tests/createComponent'
import type { VueWrapper } from '@vue/test-utils'
import { nextTick } from 'vue'
import AppModal from './AppModal.vue'

describe('test AppModal', () => {
  let wrapper: VueWrapper

  afterEach(() => {
    wrapper.unmount()
  })

  it('render closed', () => {
    wrapper = createComponent(AppModal)

    expect(wrapper.classes()).not.toContain('opened')
  })

  it('modal open when isOpen prop is true', () => {
    wrapper = createComponent(AppModal, {
      props: {
        isOpen: true,
      },
    })

    expect(wrapper.classes()).toContain('opened')
  })

  it('modal close when persist prop is false', async () => {
    wrapper = createComponent(AppModal, {
      props: {
        isOpen: true,
        persist: false,
      },
    })

    await wrapper.find('.overlay').trigger('click')

    expect(wrapper.classes()).not.toContain('opened')
  })

  it('modal dont close when persist prop is true', async () => {
    wrapper = createComponent(AppModal, {
      props: {
        isOpen: true,
        persist: true,
      },
    })

    await wrapper.find('.overlay').trigger('click')

    expect(wrapper.classes()).toContain('opened')
  })
})
