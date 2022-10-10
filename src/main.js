import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/main.css'

const app = createApp(App)

app.use(router, BootstrapVue,IconsPlugin)
app.mount('#app')
