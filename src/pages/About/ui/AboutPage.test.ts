import { shallowMount } from '@vue/test-utils'
import ru from 'app/i18n/locales/ru.json'
import AboutPage from './AboutPage.vue'

// TODO: Разобраться как правильно мокать переводы
const i18nMock = {
  $t: (key: keyof typeof ru): string => {
    // Возвращаем ожидаемые переводы для тестов
    return ru[key] // Используем английские переводы для теста
  },
}

describe('test AboutPage', () => {
  it('renders the title text', () => {
    const wrapper = shallowMount(AboutPage, {
      global: {
        mocks: {
          $t: i18nMock.$t,
        },
      },
    })
    expect(wrapper.find('h1').text()).toBe('О нас')
  })
})
