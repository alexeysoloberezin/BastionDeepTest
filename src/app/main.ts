import { createApp } from 'vue'
import '@app/styles/style.css'
import '@app/styles/fonts.scss'

import App from '@app/App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { queryClient } from '@shared/api/utils/vueQueryInstance'
import router from '@app/router/index'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const app = createApp(App)

app
    .use(router)
    .use(VueQueryPlugin, { queryClient })
    .use(autoAnimatePlugin)
    .use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    .mount('#app')

