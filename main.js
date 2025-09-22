import App from './App'
import MescrollBody from "@/uni_modules/mescroll-uni/components/mescroll-body/mescroll-body.vue"
import globalMixin from "@/common/mixin/mixin.js"
// #ifndef VUE3
import Vue from 'vue'
import * as util from './common/js/util.js'
import './uni.promisify.adaptor'
import * as env from './config/env.js'
// 状态管理文件
import store from './store'
// 挂载Vue实例上，this.$store 获取
Vue.prototype.$store = store
// 挂载到vue原型上,访问 this.$env.HOST_H5
Vue.prototype.$env = env
// 全局注册 mixin
Vue.mixin(globalMixin);
Vue.prototype.$util = util
Vue.config.productionTip = false
Vue.component('mescroll-body', MescrollBody)
App.mpType = 'app'
const app = new Vue({
		store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app,
		store
	}
}
// #endif