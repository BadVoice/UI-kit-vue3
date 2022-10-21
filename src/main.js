import { createApp, useAttrs } from 'vue'
import '@/styles/global.scss'
import App from './App.vue'


import router from './router'

createApp(App).use(router).mount('#app')
