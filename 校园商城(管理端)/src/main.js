import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import VueI18n from '@/locale'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 导入dayjs方法
import dayjs from 'dayjs'


const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router).use(createPinia()).use(VueI18n).use(ElementPlus, { locale: zhCn }).use(Antd).mount('#app')
app.config.globalProperties.$dayjs = dayjs