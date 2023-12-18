import { createApp, VueElement } from 'vue'
import './style.css'
import App from './App.vue'
import $bus from './utills/Events'
import router from './router'

const app = createApp(App);
 
app.use(router);

app.config.globalProperties.$bus = $bus;

app.mount('#app');
