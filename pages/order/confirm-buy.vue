<template>
	<view class="confirm-order">
		<view class="goods">
			<text>商品信息</text>
			<view v-if="course && course.list">
				<!-- v-if不要与v-for同时使用，v-for优先级更高 -->
				<course-item v-for="(item, index) in course.list" :key="index" :item="item" />
			</view>
			<course-item v-else :item="course" />
		</view>
		<view class="card option-pay">
			<view class="title">支付方式</view>
			<!-- APP端的IOS设备展示 -->
			<view class="ios" v-if="isIOS">
				<text>余额：</text>
				<text>{{balance}} 币{{isPay?'': '(不足支付)'}}</text>
			</view>
			<!-- 非APP端的IOS设备展示 -->
			<radio-group v-else @change="payChange">
				<!-- #ifndef MP-WEIXIN -->
				<label class="pay-item center space-between">
					<view class="left center">
						<image src="/static/pay/alipay.png"></image>
						<text>支付宝</text>
					</view>
					<radio value="alipay" :checked="provider==='alipay'" style="transform:scale(0.8)" />
				</label>
				<!-- #endif -->
				<!-- #ifndef MP-ALIPAY -->
				<label class="pay-item center space-between">
					<view class="left center">
						<image src="/static/pay/wxpay.png"></image>
						<text>微信支付</text>
					</view>
					<radio value="wxpay" :checked="provider==='wxpay'" style="transform:scale(0.8)" />
				</label>
				<!-- #endif -->
			</radio-group>
		</view>
		<view class="card price">
			<view class="space-between">
				<text>商品金额</text>
				<text>￥{{course.priceOriginal || course.totalPrice}}</text>
			</view>
			<view class="space-between" v-if="course.priceDiscount || course.groupPrice">
				<text>优惠价</text>
				<text>￥{{course.priceDiscount || course.groupPrice}}</text>
			</view>
		</view>
		<!-- 占底部按钮位置 -->
		<view style="height: 130rpx;"></view>
		<view class="pay space-between">
			<view>
				<text class="grey">实付金额:</text>
				<text>￥{{course.priceDiscount || course.groupPrice || course.priceOriginal || course.totalPrice}}</text>
			</view>
			<view>
				<button v-if="isIOS" class="btn" @click="iosPayHandler" :loading="loading"
					:disabled="loading">{{isPay ? '立即': '充值并'}}支付</button>
				<!-- #ifdef MP-WEIXIN -->
				<button v-else class="btn" :loading="loading" :disabled="loading" @click="wxPayHandler">立即支付</button>
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<button v-else class="btn" :loading="loading" :disabled="loading" @click="payHandler">立即支付</button>
				<!-- #endif -->

			</view>
		</view>
	</view>
</template>
<script>
	import api from '@/api/order.js'
	import courseItem from '@/components/common/course-item.vue'
	export default {
		components: {
			courseItem
		},
		data() {
			return {
				balance: 0, // 余额 
				course: {}, // 商品信息
				isIOS: false, // 是否为APP端的IOS设备
				provider: 'alipay', // 选择支付方式
				loading: false, // 是否提交中
			}
		},
		computed: {
			//余额是否足够，true 足够可支付，false充值支付
			isPay() {
				const payPrice = this.course.priceDiscount || this.course.groupPrice ||
					this.course.priceOriginal || this.course.totalPrice
				console.log('支付金额', payPrice)
				return this.balance >= payPrice
			}
		},
		onLoad(option) {
			// 请求参数,
			// #ifndef MP-WEIXIN
			// 需要转义 % 字符，不然会报 URI malformed error ，
			if (option.course) {
				this.course = JSON.parse(decodeURIComponent(option.course.replace(/%/g, '%25')))
			}
			if (option.groupCourse) {
				this.course = JSON.parse(decodeURIComponent(option.groupCourse.replace(/%/g, '%25')))
			}
			// #endif
			// #ifdef MP-WEIXIN
			// 微信小程序不需要转
			if (option.course) {
				this.course = JSON.parse(decodeURIComponent(option.course))
			}
			if (option.groupCourse) {
				this.course = JSON.parse(decodeURIComponent(option.groupCourse))
			}
			// #endif
			// #ifdef MP-WEIXIN
			// 微信小程序选中微信支付
			this.provider = 'wxpay'
			// #endif
			// #ifdef APP-PLUS
			// APP端中获取当前平台ios、android（H5端不获取）
			this.isIOS = uni.getSystemInfoSync().platform === 'ios'
			if (this.isIOS) {
				// app端的ios设备才显示我的余额
				this.balance = this.getBalance()
			}
			// #endif
			// 获取支付渠道
		},
		methods: {
			// 查询我的余额
			async getBalance() {
				const {
					data
				} = await api.getUserBalance()
				this.balance = data
			},
			// 选择支付方式
			payChange(e) {
				this.provider = e.detail.value
			},
			// ios充值支付
			async iosPayHandler() {
				// 支付金额
				const price = this.course.priceDiscount || this.course.groupPrice || this.course.priceOriginal || this.course
					.totalPrice
				// 课程id
				let courseIds = []
				if (this.course.list) {
					// 套餐获取每个课程ids
					this.course.list.forEach(item => {
						courseIds.push(item.id)
					})
				} else {
					// 单个课程
					courseIds.push(this.course.id)
				}
				const data = {
					price,
					courseIds
				}
				if (!this.isPay) {
					// 余额不足，跳转我的余额页面
					this.navTo(`/pages/order/my-balance?params=${JSON.stringify(data)}`)
					return
				}
				// 调用服务接口支付
				this.loading = true
				uni.showLoading({
					title: '支付中',
					mask: true
				})
				const res = await api.orderPay(data)
				uni.hideLoading()
				if (res.code === 20000) {
					// 重新查询我的余额
					this.getBalance()
					uni.showModal({
						content: '支付完成，立即学习',
						showCancel: false,
						success: () => {
							//跳转订单页
							this.navTo(`/pages/order/order`)
						}
					})
				} else {
					uni.showModal({
						content: "支付失败, 原因：" + res.message,
						showCancel: false
					})
				}
				this.loading = false
			},
			// 微信、支付宝等支付
			async payHandler() {
				// #ifdef APP-PLUS
				// 1. 获取订单信息
				let orderIngo = await this.getOrderInfo()
				// 2. 发送支付请求
				uni.requestPayment({
					provider: this.provider,
					orderInfo: orderIngo,
					success: () => {
						this.navTo(`/pages/order/order`)
					},
					fail: () => {

					}
				})
				// #endif

				// #ifdef H5

				// #endif
			},
			getOrderInfo(openid) {
				return new Promise(async (resolve, reject) => {
					if (openid) {
						// 微信小程序获取订单信息,发送请求 
						// let orderInfo = await api.getOrderInfoWxpayMP(openid) 如果有真实接口替换即可
						let orderInfo = {
							"timeStamp": "1414561699",
							"nonceStr": "5K8264ILTKCH16CQ2502SI8ZNMTM67VS",
							"package": "prepay_id=wx201410272009395522657a690389285100", //预支付交易会话标识（ prepay_id） 
							"signType": "RSA",
							"paySign": "oR9d8PuhnIc+YZ8cBHFCwfgpaK9gd7vaRvkYD7rthRAZ",
						}
						resolve(orderInfo)
						return
					}
					let res = null
					let data = {} // 服务接口请求参数
					if (this.provider === 'alipay') {
						res = await api.getOrderInfoAlipay(data)
					} else if (this.provider === 'wxpay') {
						res = await api.getOrderInfoWxpay(data)
					}
					if (res && res.code === 20000) {
						resolve(res.data)
					} else {
						reject(new Error('获取支付信息失败' + res.message))
					}
				})
			},
			// 登录微信小程序
			loginWeixinMp() {
				// 微信小程序登录参考： https: //developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html
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
						this.navTo("/pages/order/order")
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
			}
		}
	}
</script>

<style lang="scss">
	.confirm-order {
		font-size: 29rpx;
		color: #333;
	}

	.goods {
		background-color: #FFF;
		padding: 20rpx 30rpx 0 30rpx;
	}

	.card {
		padding: 0 30rpx;
		background-color: #FFF;
		margin-top: 30rpx;
		border-radius: 20rpx;
		box-shadow: 1px 0 5px 0 rgba(0, 0, 0, 0.08);
	}

	.option-pay {
		.title {
			line-height: 90rpx;
			border-bottom: $wyk-underline;
		}

		.ios {
			line-height: 90rpx;

			text:last-child {
				color: $mxg-text-color-red;
			}
		}

		.pay-item {
			line-height: 90rpx;

			.left {
				image {
					width: 60rpx;
					height: 60rpx;
				}

				text {
					font-size: 33rpx;
					padding-left: 20rpx;
				}
			}
		}
	}

	.price {
		>view {
			line-height: 90rpx;
			border-bottom: 1px solid #F8F9FB;
		}
	}

	.pay {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		align-items: center;
		height: 100rpx;
		padding: 0 30rpx;
		background-color: #fff;
		border-top: $wyk-underline;

		view:first-child>text:last-child {
			color: $mxg-text-color-red;
			font-size: 35rpx;
		}

		.btn {
			background-color: $mxg-color-primary;
			color: #fff;
			border-radius: 50rpx;
			line-height: 80rpx;
			font-size: 30rpx;

			&::after {
				// 加载中时，隐藏边框
				border: none;
			}
		}
	}
</style>