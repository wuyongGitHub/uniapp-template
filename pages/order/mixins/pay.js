import api from '@/api/order.js'
export default {
	data() {
		return {
			provider: 'alipay', // 支付方式,即提供商
			loading: false, // 是否提交中
			data: {}, //订单信息服务接口请求参数
		}
	},
	onLoad(option) {
		// #ifdef MP-WEIXIN
		// 微信小程序选中微信支付
		this.provider = 'wxpay'
		// #endif
	},
	methods: {
		// 选择支付方式
		payChange(e) {
			this.provider = e.detail.value
		},
		// 微信支付、支付宝操作
		async payHandler() {
			// 支付中
			this.loading = true
			// #ifdef APP-PLUS
			// 1. 发送请求到服务端，服务端生成订单信息，响应预支付订单号
			let orderInfo = await this.getOrderInfo();
			if (!orderInfo) {
				uni.showModal({
					content: '获取支付信息失败',
					showCancel: false
				})
				return
			}
			// 2. 请求支付
			uni.requestPayment({
				provider: this.provider, // 支付渠道
				orderInfo: orderInfo,
				success: (e) => {
					console.log("success", e);
					uni.showToast({
						title: "支付成功!"
					})
					// 回到订单页面
					this.navTo('/pages/order/order')
				},
				fail: (e) => {
					console.log("fail", e);
					uni.showModal({
						content: "支付失败，请重试。",
						showCancel: false
					})
				},
				complete: () => {
					this.loading = false;
				}
			})
			// #endif
		},
		// 获取订单信息 (微信小程序支付需要openid)
		getOrderInfo(openid) {
			// 不要少了async
			return new Promise(async (resolve, reject) => {
				if (openid) {
					// 微信小程序支付， 发送请求到服务器获取订单信息，参考：https: //pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_8_2.shtml
						let orderInfo = {
							"timeStamp": "1414561699",
							"nonceStr": "5K8264ILTKCH16CQ2502SI8ZNMTM67VS",
							"package": "prepay_id=wx201410272009395522657a690389285100", //预支付交易会话标识（ prepay_id） "signType": "RSA",
							"paySign": "oR9d8PuhnIc+YZ8cBHFCwfgpaK9gd7vaRvkYD7rthRAZ\/X+QBhcCYL21N7cHCTUxbQ+EAt6Uy+lwSN22f5YZvI45MLko8Pfso0jm46v5hqcVwrk6uddkGuT + Cdvu4WBqDzaDjnNa5UK3GfE1Wfl2gHxIIY5lLdUgWFts17D4WuolLLkiFZV + JSHMvH7eaLdT9N5GBovBwu5yYKUR7skR8Fu + LozcSqQixnlEZUfyE55feLOQTUYzLmR9pNtPbPsu6WVhbNHMS3Ss2 + AehHvz + n64GDmXxbX++IOBvm2olHu3PsOUGRwhudhVf7UcGcunXt8cqNjKNqZLhLw4jq\ / xDg == ",
						}
					resolve(orderInfo)
					return
				}
				let res = null
				console.log('订单信息请求参数：', this.data)
				if (this.provider === 'alipay') {
					res = await api.getOrderInfoAlipay(this.data)
				} else if (this.provider === 'wxpay') {
					res = await api.getOrderInfoWxpay(this.data)
				}
				if (res && res.code === 20000) {
					resolve(res.data)
				} else {
					reject(new Error('获取支付信息失败' + res.message))
				}
			})
		},
		// 微信小程序支付
		async wxPayHandler() {
			this.loading = true
			// 1. 先获取用户code, 再获取openid
			let openid = uni.getStorageSync('openid')
			if (!openid) {
				try {
					openid = await this.loginWeixinMp()
				} catch (e) {
					console.error(e)
				}
				if (!openid) {
					uni.showModal({
						content: '获取openid失败',
						showCancel: false
					})
					this.loading = false
					return
				}
			}
			// 2. 通过 openid 再获取订单信息，
			let orderInfo = await this.getOrderInfo(openid)
			// 3. 通过订单预支付信息，去调用支付接口
			uni.requestPayment({
				...orderInfo,
				success: (res) => {
					uni.showToast({
						title: "支付成功!"
					})
				},
				fail: (res) => {
					uni.showModal({
						content: "支付失败,原因为: " + res.errMsg,
						showCancel: false
					})
				},
				complete: () => {
					this.loading = false;
				}
			})
		},
		// 登录微信小程序
		loginWeixinMp() {
			// 微信小程序登录参考：
			https: //developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html
				return new Promise((resolve, reject) => {
					// 1. 先使用微信登录小程序响应 code，
					uni.login({
						provider: 'weixin',
						success: (res) => {
							console.log('登录', res)
							const code = res.code
							// 2. 请求服务端通过code获取openid
							let openid = 'xx'
							uni.setStorageSync('openid', openid)
							resolve(openid)
						},
						fail(err) {
							reject(err)
						}
					})
				})
		},
	}
}