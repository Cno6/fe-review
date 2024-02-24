import { createI18n } from 'vue-i18n'

import { AVAILABLE_LOCALES, DEFAULT_LOCALE, FALLBACK_LOCALE } from 'shared/constants/i18n'

const messages = Object.fromEntries(AVAILABLE_LOCALES.map(locale => [locale, require(`./locales/${locale}.json`)]))

const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: FALLBACK_LOCALE,
  messages
})

export default i18n
