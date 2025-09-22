import request from '@/common/js/request.js'
export default {
	// 更新绑定用户手机号
	updateUserMobile(data) {
		return request({
			url: '/auth/user/mobile',
			method: 'PUT',
			data
		})
	},
	// 退出系统
	logout(accessToken) {
		return request({
			url: '/auth/logout',
			method: 'GET',
			data: {
				accessToken
			}
		})
	},
}