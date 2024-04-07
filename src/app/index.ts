import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import i18n from './i18n'

import App from './App.vue'

const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(pinia)

app.mount('#app')
