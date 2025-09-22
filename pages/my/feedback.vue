<template>
	<view class="feedback-box column center">
		<radio-group class="radio-group" @change="radioChange">
			<!-- 加上label，当点击文字时也会被触发-->
			<label class="label">
				<radio :value="1" checked color="#007aff" style="transform:scale(0.7)" />
				内容意见
				<radio :value="2" color="#007aff" style="transform:scale(0.7)" />产品建议
				<radio :value="3" color="#007aff" style="transform:scale(0.7)" />其他
			</label>
		</radio-group>
		<textarea v-model="formData.content" maxlength="500" placeholder="请填写具体内容帮助我们了解您的意见和建议" />
		<input v-model="formData.qq" type="number" maxlength="15" placeholder="填写您的QQ">
		<input v-model="formData.weixin" type="text" maxlength="25" placeholder="填写您的微信">
		<!-- #ifdef APP-PLUS -->
		<view class="location">
			<view>您的当前位置：</view>
			<text>{{ location || '获取信息中'}}</text>
		</view>
		<!-- #endif -->
		<button :disabled="loading" :loading="loading" type="primary" @click="submitHandler">提交</button>
	</view>
</template>

<script>
	import api from '@/api/system.js'
	export default {
		data() {
			return {
				formData: {},
				location: '', // 当前位置
				loading: false
			}
		},
		onLoad() {
			// APP 获取位置
			// #ifdef APP-PLUS
			uni.getLocation({
				geocode: true, //解析地址信息
				success: (res) => { // 注意箭头函数
					// console.log('当前位置的经度：' + res.longitude);
					// console.log('当前位置的纬度：' + res.latitude);
					// #ifdef APP-PLUS
					this.location = res.address.province + res.address.city
					// #endif
				}
			})
			// #endif
		},
		methods: {
			radioChange(event) {
				//console.log('选中的value值', event.detail.value)
				this.formData.type = event.detail.value
			},
			// 提交
			async submitHandler() {
				if (!this.formData.content ||
					this.formData.content.trim().length < 10) {
					this.$util.msg('内容至少输入10个字')
					return
				}
				if (!this.formData.qq && !this.formData.weixin) {
					this.$util.msg('QQ和微信至少填写一个')
					return
				}
				// 如果qq不为空，则校验是否合法
				if (this.formData.qq && !this.$util.checkStr(this.formData.qq, 'QQ')) {
					this.$util.msg('QQ填写有误')
					return
				}
				// 如果微信不为空，则校验是否合法
				if (this.formData.weixin &&
					!/^[a-zA-Z][a-zA-Z\d_-]{5,19}$/.test(this.formData.weixin)) {
					this.$util.msg('微信填写有误')
					return
				}
				/* console.log('反馈数据', this.formData) */
				this.loading = true
				uni.showLoading({
					title: '提交中',
					mask: true
				})
				const res = await api.addFeedback(this.formData)
				this.loading = false
				uni.hideLoading()
				if (!res.code === 20000) {
					this.$util.msg(res.message)
					return
				}
				uni.showModal({
					content: '您的意见反馈成功!',
					showCancel: false,
					success: () => {
						// 返回上一页
						this.navBack()
					}
				})
			}
		},
	}
</script>

<style lang="scss">
	page {
		background-color: $mxg-color-grey;
	}

	.feedback-box {
		padding: 0 30rpx;
	}

	.radio-group {
		margin: 30rpx 0;

		.label {
			margin-right: 30rpx;
			font-size: 30rpx;
			color: $mxg-text-color-black;
		}
	}

	textarea {
		width: 100%;
		border: 1px solid #E9E9E9;
		padding: 10rpx;
		line-height: 60rpx;
	}

	input {
		width: 100%;
		margin-top: 30rpx;
		border: 1px solid #E9E9E9;
		height: 70rpx;
		padding: 10rpx;
	}

	.location {
		margin: 50rpx 0;
		align-self: flex-start;
		/* 左对齐 */
		font-size: 30rpx;
		color: $mxg-text-color-grey;
		line-height: 50rpx;

		text {
			color: $mxg-text-color-black;
		}
	}

	button[type=primary] {
		width: 100%;
		margin-top: 50rpx;
		background-color: $mxg-text-color-blue;
	}

	.button-hover[type=primary] {
		width: 100%;
		margin-top: 50rpx;
		background-color: $mxg-color-primary;
	}
</style>