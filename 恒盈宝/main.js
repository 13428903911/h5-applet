import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import request from 'common/request.js'
import http from './store/api.js'
import store from './store/index.js'
Vue.prototype.$store = store
Vue.prototype.$request = request
Vue.prototype.$http = http

Vue.use(ElementUI);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
