<template>
	<view class="content">
		<view class="input-group">
			<view class="center">
				<text class="title">手机号：</text>
				<view class="row">
					<input v-model="mobile" class="mxg-input" type="number" focus maxlength="11" placeholder="请输入手机号码"></input>
				</view>
			</view>
			<view class="center">
				<text class="title">验证码：</text>
				<view class="row">
					<input v-model="code" class="mxg-input" type="number" maxlength="6" placeholder="请输入验证码"></input>
					<wyk-code :mobile="mobile" templateCode="SMS_198888"></wyk-code>
				</view>
			</view>
		</view>
		<button type="primary" class="primary" @click="submitHandler">提交</button>
	</view>
</template>
<script>
	import api from '@/api/auth.js'
	export default {
		data() {
			return {
				mobile: null, // 手机号
				code: null, // 验证码
				data: null, // 其他页面传递数据
			}
		},
		onLoad(option) {
			this.data = option.data && JSON.parse(option.data)
		},
		methods: {
			// 提交修改
			async submitHandler() {
				const {
					mobile,
					code
				} = this
				// 校验手机号
				if (!this.$util.checkStr(mobile, 'mobile')) {
					this.$util.msg('手机号码格式不正确')
					return
				}
				// 校验手验证码
				if (!this.$util.checkStr(code, 'code')) {
					this.$util.msg('验证码错误')
					return
				}
				try {
					uni.showLoading({
						mask: true
					})
					// 提交请求
					const data = {
						mobile,
						code,
						...this.data
					}
					const res = await api.updateUserMobile(data)
					uni.hideLoading()
					console.log('提交', res)
					this.$util.msg(res.message)
					if (res.code !== 20000) return
					// 成功, 更新状态值
					this.successCallBack(res.data)
				} catch (e) {
					uni.hideLoading()
					this.$util.msg('操作失败')
					console.log('操作失败', e)
				}
			},
			successCallBack(data) {
				this.$util.msg('提交成功')
				this.$store.commit('setToken', data)
				setTimeout(() => {
					// 进入我的页面
					this.navBack(2)
					/* uni.switchTab({url: '/pages/my/my'}) */
				}, 300)
			},
		}
	}
</script>
<style lang="scss">
	page {
		background-color: $mxg-color-grey;
	}

	.content {
		margin: 80rpx 20rpx;
	}

	.input-group {
		padding: 0 25rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;

		.title {
			width: 190rpx;
			font-size: 35rpx;
			height: 100rpx;
			line-height: 100rpx;
		}

		.row {
			width: 100%;
		}

		.mxg-input {
			flex: 1;
			height: 60rpx;
			line-height: 60rpx;
			font-size: 35rpx;
		}
	}

	button[type=primary] {
		margin-top: 80rpx;
		background-color: #345dc2 !important;
	}
</style>