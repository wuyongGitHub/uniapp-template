import request from '@/common/js/request.js'
export default {
	// 查询用户的余额
	getUserBalance() {
		return request({
			url: `/pay/user/balance`,
			method: 'GET'
		})
	},
	// 服务端订单支付-IOS
	orderPay(data) {
		return request({
			url: '/pay/order/pay',
			method: 'POST',
			data
		})
	},
	// 获取生成的订单信息-微信支付
	getOrderInfoWxpay(data) {
		return request({
			url: '/pay/orderInfo/wxpay',
			method: 'POST',
			data
		})
	},
	// 获取生成的订单信息-支付宝
	getOrderInfoAlipay(data) {
		return request({
			url: '/pay/orderInfo/alipay',
			method: 'POST',
			data
		})
	},
	// 查询用户订单列表
	getUserOrderList() {
		return request({
			url: '/pay/order/user/list',
			method: 'GET'
		})
	},
	// 删除订单
	deleteOrder(orderId) {
		return request({
			url: `/pay/order/${orderId}`,
			method: 'DELETE'
		})
	},
	// 取消订单
	cancelOrder(orderId) {
		return request({
			url: `/pay/order/cancel/${orderId}`,
			method: 'PUT'
		})
	},
}