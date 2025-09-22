<template>
	<view>
		<view class="card option-pay">
			<view class="title">支付方式</view>
			<radio-group @change="payChange">
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
		<view class="card price space-between">
			<text>实付金额</text>
			<text>￥{{data.price}}</text>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<button class="btn" :loading="loading" :disabled="loading" @click="wxPayHandler">立即支付</button>
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN -->
		<button class="btn" :loading="loading" :disabled="loading" @click="payHandler">立即支付</button>
		<!-- #endif -->

	</view>
</template>
<script>
	import payMixin from './mixins/pay.js'
	export default {
		mixins: [payMixin],
		data() {
			return {
				// provider: 'alipay', // 支付方式,即提供商
				// data: {}
			}
		},
		onLoad(option) {
			//获取支付数据
			if (option.params) {
				this.data = JSON.parse(option.params)
			}
		},
		methods: {
			// payChange() {}
		}
	}
</script>
<style lang="scss">
	.card {
		margin: 0 30rpx;
		padding: 0 20rpx;
		background-color: #FFF;
		margin-top: 30rpx;
		border-radius: 20rpx;
		box-shadow: 1px 0 5px 0 rgba(0, 0, 0, 0.08);
	}

	.option-pay {
		.title {
			font-size: 35rpx;
			line-height: 90rpx;
			border-bottom: $wyk-underline;
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
		font-size: 30rpx;
		line-height: 90rpx;
		border-bottom: 1px solid #F8F9FB;

		text:last-child {
			color: $mxg-text-color-red;
		}
	}

	.btn {
		margin: 60rpx 30rpx;
		background-color: $mxg-color-primary;
		color: #fff;
		line-height: 80rpx;
		font-size: 30rpx;

		&::after {
			// 加载中时，隐藏边框
			border: none;
		}
	}
</style>