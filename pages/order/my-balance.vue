<template>
	<view>
		<view class="money column center">
			<text>余额：</text>
			<text>{{parseFloat(balance).toFixed(2)}}币</text>
		</view>
		<view class="recharge">
			<view>充值</view>
			<view class="list">
				<view v-for="(item, index) in 6" :key="index" :class="{active: activeIndex===index}"
					@click="clickItem(index, item)">
					<view>{{index+1}}00币</view>
					<view>￥{{index+1}}00</view>
				</view>
			</view>
		</view>
		<view class="desc">
			<view>充值说明：</view>
			<view>
				1.在IOS设备的APP要进行充值后，使用虚拟币消费  。<br>
				2.充值后不能在非IOS设备使用，与安卓版和网站余额不通用。<br>
				3.充值后没有使用期限，但不可提现、退换、转让和申请发票。<br>
				4.如遇无法充值、充值失败等问题，可关注[梦学谷]公众号。<br>
			</view>
		</view>
		<view class="bottom center">
			<button class="btn" :loading="loading" :disabled="disabled" @click="iosPayHandler">立即充值</button>
		</view>
	</view>
</template>
<script>
	import api from '@/api/order.js'
	let iapChannel = null // 苹果内部支付渠道
	export default {
		data() {
			return {
				activeIndex: 0,
				loading: false, // 是否充值中
				disabled: true, //要先检查支付环境是否iap，不支付则点击立即支付无效
				balance: 0, // 余额
				moneyList: [], // 充值列表展示金额
				price: 0, // 支付金额
				courseIds: [], // 支付的课程ids
				orderId:null,
				applePrice: 30, // ios充值金额
			}
		},
		onLoad: function(option) {
			// 获取支付金额
			if (option.params) {
				const params = JSON.parse(option.params)
				this.price = params.price
				this.courseIds = params.courseIds
				this.orderId = params.orderId
			}
			// 查询余额
			this.loadData()
			// 获取apple支付渠道实例
			plus.payment.getChannels((channels) => {
				console.log("获取到channel" + JSON.stringify(channels))
				for (var i in channels) {
					var channel = channels[i];
					if (channel.id === 'appleiap') {
						iapChannel = channel;
						this.requestOrder();
					}
				}
				if (!iapChannel) {
					this.errorMsg()
				}
			}, (error) => {
				this.errorMsg()
			});
		},
		methods: {
			requestOrder() {
				uni.showLoading({
					title: '检测支付环境...'
				})
				//必须调用此方法向Appstore请求有效的商品详情,才能进行 iap 支付， 
				iapChannel.requestOrder(this.moneyList, (orderList) => {
					this.disabled = false;
					console.log('requestOrder success666: ' + JSON.stringify(orderList));
					uni.hideLoading();
				}, (e) => {
					console.log('requestOrder failed: ' + JSON.stringify(e));
					uni.hideLoading();
					this.errorMsg()
				});
			},
			iosPayHandler() {
				this.loading = true;
				uni.requestPayment({
					provider: 'appleiap',
					orderInfo: {
						productid: this.applePrice // 商品id 看他面向儒雅随和
					},
					success: (e) => {
						console.log("success", e);
						uni.showToast({
							title: "支付成功!"
						})
						// 再进行app内部扣款 
					},
					fail: (e) => {
						console.log("fail", e);
						uni.showModal({
							content: "支付失败,原因为: " + e.errMsg,
							showCancel: false
						})
					},
					complete: () => {
						this.loading = false;
					}
				})
			},
			errorMsg() {
				uni.showModal({
					content: "暂不支持苹果 iap 支付",
					showCancel: false
				})
			},
			clickItem(index, item) {
				this.activeIndex = index
				this.applePrice = item
			},
			async loadData() {
				// 查询余额
				const {
					data
				} = await api.getUserBalance()
				this.balance = data
				// 要进行支付，则计算还差多少金额, 则充值多少,
				if (this.price) {
					// ios充值多少 = 余额-付款金额 < 0 : 余额不够：充足 const applePrice=this.balance - this.price // console.log('applePrice', applePrice)
					// 取正数，向上取整 this.applePrice=Math.ceil(Math.abs(applePrice)) } // 充值列表展示金额 for(let i=0; i<6; i++) { // 6个元素，每个加30元
					this.moneyList.push(this.applePrice + i * 30)
				}
			},

		}
	}
</script>

<style lang="scss">
	.money {
		height: 288rpx;
		background-color: $mxg-color-primary;
		color: #FFFFFF;
		font-size: 88rpx;

		text:first-child {
			color: #e7e4e9;
			font-size: 30rpx;
		}
	}

	.recharge {
		margin: 20rpx 0 0 20rpx;
		color: #999;
		font-size: 30rpx;

		.list {
			margin-top: 20rpx;
			text-align: center;

			>view {
				float: left;
				width: 225rpx;
				margin-right: 10rpx;
				margin-bottom: 15rpx;
				background-color: #fff;
				border-radius: 10rpx;
				padding: 20rpx 0;
				border: 1px solid $mxg-color-grey;
				flex-wrap: wrap;

				view:first-child {
					color: $mxg-text-color-red;
					font-size: 36rpx;
				}
			}
		}
	}

	.active {
		box-shadow: 0 0 0 .5px $mxg-text-color-red;
	}

	.desc {
		// 清除浮动
		clear: both;
		margin: 0 20rpx;
		font-size: 30rpx;
		line-height: 45rpx;
		color: #6e6d70;

		view:first-child {
			padding-top: 50rpx;
			padding-bottom: 30rpx;
			font-weight: bold;
		}

		view:last-child {
			padding-bottom: 120rpx;
		}
	}

	/* 底部 */
	.bottom {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100rpx;
		background-color: #FFFFFF;
		border-top: 1px solid #F1F1F1;
	}

	.btn {
		width: 700rpx;
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
</style>