<template>
	<view>
		<view v-if="isShow" class="mask" catchtouchmove="true" @touchmove.stop.prevent="()=>{}"></view>
		<view v-if="isShow" class="bottom-ios">
			<view class="title" center>
				<text>确定支付</text>
				<text style="float: right;" @click="showHidePay">取消</text>
			</view>
			<view class="price space-between">
				<text>支付金额</text>
				<text>{{order.priceDiscount || order.pricePayable}}</text>
			</view>
			<view class="price space-between">
				<text>当前余额</text>
				<text>{{balance}}</text>
			</view>
			<button class="btn" @click="iosPay" type="default" :loading="loading" :disabled="loading">{{isPay?"立即支付":"余额不足，立即充值"}}</button>
		</view>
		<view class="order-item" v-for="(item, index) in orderList" :key="index">
			<view class="base-info">
				<text>{{$util.format(item.updateDate)}}</text>
				<text>订单号：{{item.orderId}}</text>
			</view>
			<course-item v-for="(course, index2) in item.courseList" :key="index2" :item="course">
			</course-item>
			<view class="shifu">
				<text>实付：</text>
				<text>￥{{ item.priceDiscount ||item.pricePayable }}</text>
			</view>
			<view class="option space-between center">
				<!-- 1待支付，2交易成功，3交易关闭-->
				<text v-if="item.status===1" class="red">待支付</text>
				<text v-if="item.status===3" class="grey">交易关闭</text>
				<text v-if="item.status===2" class="grey">交易成功</text>
				<view>
					<!--
						待支付：显示 取消订单、立即支付 按钮
						交易关闭：显示 删除订单 按钮
						交易成功：不显示按钮
					-->
					<button v-if="item.status === 1" type="default" size="mini" @click="orderCancel(item.orderId)">取消订单
					</button>
					<button v-if="item.status === 1" type="warn" size="mini" @click="orderPay(item)">立即支付
					</button>
					<button v-if="item.status === 3" type="default" size="mini" @click="orderDelete(item.orderId)">删除订单
					</button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import courseItem from '@/components/common/course-item.vue'
	import api from '@/api/order.js'
	export default {
		components: {
			courseItem
		},
		data() {
			return {
				isShow: false,
				orderList: [], // 订单列表数据
				isIOS: false, // 是否为APP端的IOS设备
				loading: false, // 是否点击了ios弹窗中的按钮
				balance: 0, // 余额
				order: {}, // 立即支付订单
			}
		},
		onLoad() {
			this.loadData()
			// #ifdef APP-PLUS
			// APP端中获取当前平台ios、android（H5端不获取）
			this.isIOS = !uni.getSystemInfoSync().platform === 'ios'
			// #endif
		},
		computed: {
			isPay() { //app端ios平台余额是否足够支付
				return this.balance >= (this.order.priceDiscount || this.order.pricePayable)
			}
		},
		methods: {
			async loadData() {
				// 查询用户订单列表
				const {
					data
				} = await api.getUserOrderList()
				this.orderList = data
			},
			// 取消订单
			orderCancel(orderId) {
				uni.showModal({
					content: '确定取消该订单记录？',
					success: async (res) => {
						if (res.confirm) {
							//console.log('用户点击确定');
							const res = await api.cancelOrder(orderId)
							if (res.code === 20000) {
								this.$util.msg('取消成功')
								// 重新查询订单信息
								this.loadData()
							} else {
								this.$util.msg('取消失败，请重试')
							}
						}
					}
				})
			},
			// 删除订单
			orderDelete(orderId) {
				uni.showModal({
					content: '确定删除该订单记录？',
					success: async (res) => {
						if (res.confirm) {
							const res = await api.deleteOrder(orderId)
							if (res.code === 20000) {
								this.$util.msg('删除成功')
								// 重新查询订单信息
								this.loadData()
							} else {
								this.$util.msg('删除失败，请重试')
							}
						}
					}
				})
			},
			// 立即支付
			async orderPay(order) {
				this.order = order
				if (this.isIOS) {
					// 是app端口ios平台，则弹出窗口
					this.showHidePay()
					// 查询余额
					this.loading = true
					const {
						data
					} = await api.getUserBalance()
					this.balance = data
					this.loading = false
				} else {
					// 非app端ios平台跳转 微信、支付宝选择页面
					const price = this.order.priceDiscount || this.order.pricePayable
					const data = {
						price,
						orderId: this.order.orderId
					}
					this.navTo(`/pages/order/order-pay?params=${ JSON.stringify(data) }`)
				}
			},
			async iosPay(){
				const price = this.order.priceDiscount || this.order.pricePayable
				const data = {price,orderId:this.order.orderId}
				// 判断余额是否充足
				if(this.isPay){
					// 余额充足，直接支付
					this.loading = true
					uni.showLoading({
						title:'支付中，请勿离开此页面',
						mask:true
					})
					// 支付
					const res = await api.orderPay(data)
					uni.hideLoading()
					if(res.code === 20000){
						// 支付成功，关闭弹窗
						this.$util.msg("支付成功",{icon:'success'})
						this.showHidePay()
						// 刷新订单列表
						this.loadData()
					}else{
						this.$util.msg("支付失败",{icon:'error'})
						this.showHidePay()
					}
				}else{ 
					// 余额不充足，跳转到我的余额，进行充值
					this.navTo(`/pages/order/my-balance?params=${JSON.stringify(data)}`)
				}
			},
			showHidePay() {
				this.isShow = !this.isShow
			}
		}
	}
</script>
<style lang="scss">
	.order-item {
		background-color: #FFFFFF;
		padding: 20rpx 30rpx;
		margin-bottom: 20rpx;
		font-size: 25rpx;
		border-bottom: $wyk-underline;

		.base-info {
			color: $mxg-text-color-black;

			text:first-child {
				margin-right: 20rpx;
			}
		}

		.shifu {
			text-align: right;
			line-height: 70rpx;

			text:last-child {
				font-size: 35rpx;
				color: $mxg-text-color-red;
			}
		}

		.option {
			button {
				font-size: 20rpx;
				margin-left: 10rpx;
			}

			.red {
				color: $mxg-text-color-red;
			}

			.grey {
				color: $mxg-text-color-grey;
			}
		}
	}

	.bottom-ios {
		z-index: 100;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #FFFFFF;
		padding: 30rpx 40rpx;
		border-top: $wyk-underline;

		.title {
			font-size: 38rpx;
			text-align: center;
			margin-bottom: 20rpx;

			text:first-child {
				flex: 1;
				// 左侧占用取消按钮的宽度，居中
				margin-left: 70rpx;
			}

			text:last-child {
				color: $mxg-text-color-grey;
				font-size: 35rpx;
			}
		}

		.price {
			font-size: 30rpx;
			line-height: 90rpx;

			text:last-child {
				color: $mxg-text-color-red;
			}
		}

		.btn {
			background-color: $mxg-color-primary;
			color: #fff;
			border-radius: 50rpx;
			line-height: 80rpx;
			font-size: 30rpx;
			margin-top: 30rpx;

			&::after {
				// 加载中时，隐藏边框
				border: none;
			}
		}
	}

	/*遮罩蒙层*/
	.mask {
		z-index: 99;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.7);
	}
</style>