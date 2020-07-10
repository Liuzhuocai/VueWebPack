import Vue from 'vue';

import mian from './mian';
import router from "./router.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './assets/less/web.less'
Vue.use(ElementUI);
const vue = new Vue({
    el: '#app',
    router,
    render: (h) => h(mian),
});