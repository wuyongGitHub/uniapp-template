import {
	msg
} from './util.js'
/* 
		导入成功后，后台会相应访问令牌accessToken,如果当前有访问令牌，则在请求头上面带上令牌
 */
import store from '@/store'
// 基础URL
// #ifndef H5
// 非h5端，
let BASE_URL = ''
// #endif

// #ifdef H5
// h5, 进行代理转发
let BASE_URL = '/api' // 'http://39.108.187.100:6001'
// #endif

const request = (options = {}) => {
	// 判断请求头带上访问令牌
	const accessToken = store.state.accessToken
	if(accessToken){
		options.header = {'Authorization':`Bearer${accessToken}`}
	}
	// resolve 正常响应，reject异常响应
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			timeout: 8000, // 8秒超时时间，单位ms
			// 添加请求头
			header:options.header,
			success: (res) => {
				// console.log('res', res.data)
				resolve(res.data)
			},
			fail: (err) => {
				// console.log('err', err)
				msg('请求接口失败')
				reject(err)
			}
		})
	})
}

// 导出
export default request