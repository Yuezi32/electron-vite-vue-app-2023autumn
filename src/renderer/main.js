import { createApp } from 'vue'
// 全局样式
import '@renderer/common/styles/frame.styl'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// M
import App from '@renderer/App.vue'
// +
import router from './router'

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn
})
// +
app.use(router)
app.mount('#app')
