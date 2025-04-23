import { createApp } from 'vue'
import '@app/styles/style.css'
import '@app/styles/fonts.scss'

import App from '@app/App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { queryClient } from '@shared/api/utils/vueQueryInstance'
import router from '@app/router/index'


const app = createApp(App)

app
    .use(router)
    .use(VueQueryPlugin, { queryClient })
    .mount('#app')

