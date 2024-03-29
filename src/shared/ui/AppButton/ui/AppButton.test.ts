import createComponent from 'shared/helpers/tests/createComponent'
import type { VueWrapper } from '@vue/test-utils'
import AppButton from './AppButton.vue'

describe('test AppButton', () => {
  let wrapper: VueWrapper

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders with default theme when initialized without props', () => {
    wrapper = createComponent(AppButton)

    expect(wrapper.classes()).toContain('primary')
  })

  it('renders with specified theme', () => {
    wrapper = createComponent(AppButton, {
      props: {
        theme: 'secondary',
      },
    })

    expect(wrapper.classes()).toContain('secondary')
  })

  it('renders default slot content', () => {
    wrapper = createComponent(AppButton, {
      slots: {
        default: 'Click me',
      },
    })
    expect(wrapper.text()).toBe('Click me')
  })
})
