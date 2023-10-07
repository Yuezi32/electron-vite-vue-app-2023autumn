import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@renderer/views/login/login.vue'
import Home from '@renderer/views/home/home.vue'

const routes = [
    // 精确匹配 #/login，指向Login页面
    { path: '/login', component: Login, exact: true },
    // 精确匹配 #/home，指向Home页面
    { path: '/home', component: Home, exact: true },
    // 空hash，则跳转至Login页面
    { path: '', redirect: 'login' },
    // 未匹配，则跳转至Login页面
    { path: '/:pathMatch(.*)', redirect: 'login' }, 
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router