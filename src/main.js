import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './router'
import store from './store'

const app = createApp(App);

app.use(ElementPlus);
app.use(store);
app.use(router);
console.log("env")
app.mount('#app')
