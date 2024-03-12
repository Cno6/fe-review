import { shallowMount } from '@vue/test-utils'
import type { ComponentMountingOptions, VueWrapper } from '@vue/test-utils'

export default function createComponent<T>(component: T, options: ComponentMountingOptions<T> = {}): VueWrapper {
  return shallowMount(component, options)
}
