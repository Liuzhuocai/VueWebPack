import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import splashPage from "./pages/splashPage";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        name:"splashPage",
        path:"/splashPage",
        component: splashPage
    },
    {
        path: '/',
        redirect: '/splashPage'
    }
]

var router =  new VueRouter({
    routes
})
export default router;