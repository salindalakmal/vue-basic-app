import { createApp, VueElement } from 'vue'
import './style.css'
import App from './App.vue'
import $bus from './utills/Events'

const app = createApp(App);

app.config.globalProperties.$bus = $bus;

app.mount('#app');
