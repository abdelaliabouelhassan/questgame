import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/routes.js'
import { createI18n } from 'vue-i18n'

import enLocale from './lang/en.json'
import frLocale from './lang/fr.json'
const i18n = createI18n({
    locale: 'en',
    legacy: false,
    messages: {
      en: enLocale,
      fr:frLocale
      // Add more languages as needed
    },
});

createApp(App)
.use(router)
.use(i18n)
.mount('#app')
