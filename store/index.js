import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	// 声明状态变量
	state: {
		userInfo: {}, // 用户信息
		accessToken: "" //访问令牌"
	},

	// store的计算属性
	getters: {
		hasLogin(state) {
			return !!state.accessToken
		}
	},
	mutations: {
		setState(state, data) {
			for (let key in data) {
				// 每个对象的key作为状态名, value作为状态值
				state[key] = data[key]
			}
		},
		// 更新用户登录状态
		setToken(state, data) {
			// 解构属性，
			const {
				userInfo,
				access_token
			} = data
			// 状态赋值保存
			if (userInfo) {
				state.userInfo = userInfo
				uni.setStorageSync('userInfo', userInfo)
			}
			if (access_token) {
				state.accessToken = access_token
				uni.setStorageSync('mxgEducationToken', access_token)
			}
		},
		// 退出登录
		logout(state) {
			// 状态清空
			state.userInfo = {}
			state.accessToken = ''
			// 移除本地数据
			uni.removeStorageSync('userInfo')
			uni.removeStorageSync('mxgEducationToken')
		}
	}
})

export default store