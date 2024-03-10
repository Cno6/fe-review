import createComponent from 'shared/helpers/tests/createComponent'
import AppButton from './AppButton.vue'

describe('test AppButton', () => {
  it('renders with default theme', () => {
    const wrapper = createComponent(AppButton)

    expect(wrapper.classes()).toContain('primary')
  })

  it('renders with specified theme', () => {
    const wrapper = createComponent(AppButton, {
      props: {
        theme: 'secondary',
      },
    })

    expect(wrapper.classes()).toContain('secondary')
  })

  it('renders slot content', () => {
    const wrapper = createComponent(AppButton, {
      slots: {
        default: 'Click me',
      },
    })
    expect(wrapper.text()).toBe('Click me')
  })
})
