import { type ComponentMountingOptions, shallowMount } from '@vue/test-utils'

export default function createComponent<T>(component: T, options: ComponentMountingOptions<T> = {}) {
  return shallowMount(component, options)
}
