import request from '@/common/js/request.js'
export default {
	// 新增反馈信息
	addFeedback(data) {
		return request({
			url: `/system/api/feedback`,
			method: 'POST',
			data
		})
	},
	// 发送短信验证码
	sendSmsCode(data) {
		return request({
			url: '/system/sms/code',
			method: 'POST',
			data
		})
	},
	// 手机号登录
	login(data) {
		return request({
			url: '/auth/login',
			method: 'POST',
			data
		})
	},
	// 第三方授权登录应用接口
	loginByProvider(data) {
		return request({
			url: '/auth/login/provider',
			method: 'POST',
			data
		})
	},
	// 更新绑定用户手机号
	updateUserMobile(data) {
		return request({
			url: '/auth/user/mobile',
			method: 'PUT',
			data
		})
	},
}