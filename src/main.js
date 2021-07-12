import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import * as echarts from "echarts";

console.log(process.env)

const app = createApp(App);
app.config.globalProperties.$echarts = echarts
app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount('#app')
