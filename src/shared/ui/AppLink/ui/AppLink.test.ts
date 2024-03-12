import createComponent from 'shared/helpers/tests/createComponent'
import { type VueWrapper, config } from '@vue/test-utils'
import AppLink from './AppLink.vue'

describe('test AppLink', () => {
  let wrapper: VueWrapper

  beforeAll(() => {
    config.global.renderStubDefaultSlot = true
  })

  afterEach(() => {
    wrapper.unmount()
  })

  afterAll(() => {
    config.global.renderStubDefaultSlot = false
  })

  it('renders with default theme when initialized without props', () => {
    wrapper = createComponent(AppLink, {
      global: {
        stubs: {
          RouterLink: true,
        },
      },
    })

    expect(wrapper.classes()).toContain('primary')
  })

  it('renders with specified theme', () => {
    wrapper = createComponent(AppLink, {
      props: {
        theme: 'secondary',
        to: '#',
      },
      global: {
        stubs: {
          RouterLink: true,
        },
      },
    })

    expect(wrapper.classes()).toContain('secondary')
  })

  it('renders default slot content', () => {
    wrapper = createComponent(AppLink, {
      slots: {
        default: 'Click me',
      },
    })

    expect(wrapper.text()).toBe('Click me')
  })
})
