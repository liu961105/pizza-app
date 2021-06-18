import Vue from 'vue'
import App from './App.vue'
//路由模块
import VueRouter from 'vue-router'
import Routes from './router/router'
Vue.use(VueRouter)
    //实例 路由
const router = new VueRouter({
    routes: Routes,
    mode: "history"
})
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})