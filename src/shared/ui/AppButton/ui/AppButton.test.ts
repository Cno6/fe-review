import { mount } from '@vue/test-utils'
import AppButton from './AppButton.vue'

describe('test AppButton', () => {
  it('renders with default theme', () => {
    const wrapper = mount(AppButton)

    expect(wrapper.classes()).toContain('primary')
  })

  it('renders with specified theme', () => {
    const wrapper = mount(AppButton, {
      props: {
        theme: 'secondary',
      },
    })
    expect(wrapper.classes()).toContain('secondary')
  })

  it('renders slot content', () => {
    const wrapper = mount(AppButton, {
      slots: {
        default: 'Click me',
      },
    })
    expect(wrapper.text()).toBe('Click me')
  })
})
