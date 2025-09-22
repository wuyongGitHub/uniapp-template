<template>
	<view class="app">
		<!-- mixin.js 中的 navBack()，不能少了括号，不然会传递event对象 -->
		<text class="back-btn iconfont icon-close" @click="navBack()"></text>
		<view class="left-top-sign">LOGIN</view>
		<view class="welcome">欢迎回来！</view>
		<!-- 手机号登录 -->
		<view class="input-content">
			<view class="input-item">
				<text class="tit">手机号码</text>
				<view class="row">
					<input v-model="mobile" type="number" maxlength="11" placeholder="请输入手机号码"
						placeholder-style="color: #909399" />
				</view>
			</view>
			<view class="input-item">
				<text class="tit">验证码</text>
				<view class="row">
					<input v-model="code" type="number" maxlength="6" placeholder="请输入手机验证码" placeholder-style="color: #909399" />
					<wyk-code :mobile="mobile" templateCode="SMS_19999999"></wyk-code>
				</view>
			</view>
			<button type="primary" :loading="loading" @click="login">登录</button>
		</view>
		<!-- #ifndef H5 -->
		<view class="other-wrapper">
			<view class="line center"><text class="tit">社交账号登录</text>
			</view>
			<view class="row">
				<image @click="toProviderLogin('weixin')" class="icon" src="/static/share/weixin.png"></image>
				<!-- #ifdef APP-PLUS -->
				<image @click="toProviderLogin('qq')" class="icon" src="/static/share/qq.png"></image>
				<!-- #endif -->
			</view>
		</view>
		<!-- #endif -->

		<!-- #ifdef APP-PLUS || MP-WEIXIN -->
		<!-- #endif -->
		<!-- 协议 -->
		<view class="agreement center">
			<text class="iconfont icon-roundcheckfill" :class="{active: agreement}" @click="checkAgreement"></text>
			<text @click="checkAgreement">请认真阅读并同意</text>
			<text class="tit" @click="navTo('/pages/public/xieyi')">《用户服务协议》</text>
			<text class="tit" @click="navTo('/pages/public/yinsi')">《隐私权政策》</text>
		</view>
	</view>
</template>
<script>
	import api from '@/api/system.js'
	export default {
		data() {
			return {
				mobile: '', // 用户名
				code: '', // 验证码
				agreement: false, // 是否同意协议
				loading: false, // 登录中
			}
		},
		methods: {
			//同意协议
			checkAgreement() {
				this.agreement = !this.agreement
			},
			// 手机号登录
			async login() {
				// 协议
				if (!this.agreement) {
					this.$util.msg("请阅读并统一服务及隐私协议");
					return
				}
				// 手机号验证码判断
				const {
					mobile,
					code
				} = this
				if (this.$util.checkStr(mobile, 'mobile')) {
					this.$util.msg("请输入有效手机号码")
				}
				if (this.$util.checkStr(code, 'mobileCode')) {
					this.$util.msg("请输入有效验证码")
				}
				// 调用登录接口
				this.loading = true
				uni.showLoading({
					title: '登陆中',
					mask: true
				})
				const res = await api.login({
					mobile,
					code
				})
				this.loading = false
				uni.hideLoading()
				if (res.code === 20000) {
					this.loginSuccessCallBack(res.data)
				} else {
					this.$util.msg(res.message)
				}

			},
			// 登录成功的回调
			loginSuccessCallBack(data) {
				this.$util.msg("登录成功")
				// 状态管理保存用户信息
				this.$store.commit('setToken', data)
				setTimeout(() => {
					this.navBack()
				}, 500)
			},
			// 微信、QQ提供商登录
			toProviderLogin(provider) {
				// 协议
				if (!this.agreement) {
					this.$util.msg("请阅读并统一服务及隐私协议");
					return
				}
				uni.showLoading({
						mask: true
					}),
					uni.login({
						provider,
						// #ifdef MP-ALIPAY
						scopes: 'auth_user', // 支付宝小程序要设置主动授权
						// #endif
						success: (res) => {
							console.log("授权成功", res)
							// #ifdef APP-PLUS
							const data = {
								userInfo: res.authResult
							}
							// #endif
							// #ifdef MP-WEIXIN
							const data = {
								code: res.code
							}
							// #endif
							// 2. 授权成功后，请求自己的后台认证接口，来完成自己平台的认证
							this.getServiceUserInfo(data)
							uni.hideLoading()
						},
						fail: (err) => {
							this.$util.msg("授权登陆失败")
							uni.hideLoading()
						}
					})
			},
			// 获取应用内的认证授权信息
			async getServiceUserInfo(reqData) {
				// 1. 调用后台服务接口应用内登录，获取用户信息和token
				const {
					code,
					message,
					data
				} = await api.loginByProvider(reqData)
				uni.hideLoading()
				if (code !== 20000) {
					this.$util.msg(message)
					return
				}
				// 2. 判断是否绑定了手机号
				if (data.userInfo.mobile && data.access_token) {
					// 2.1 已绑定：更新 store 中的登录状态为已登录
					this.loginSuccessCallBack(data)
				} else {
					this.$util.msg('授权成功，请绑定手机号')
					// 2.2 未绑定：则跳转手机号绑定页 /pages/auth/bindMobile
					this.navTo('/pages/auth/bind-mobile?data=' + JSON.stringify(data))
				}
			}
		}
	}
</script>
<style lang="scss">
	.app {
		padding-top: 200rpx;
	}

	/* 关闭按钮 */
	.back-btn {
		position: absolute;
		left: 20rpx;
		top: calc(var(--status-bar-height) + 20rpx);
		z-index: 90;
		padding: 20rpx;
		font-size: 39rpx;
		color: #606266;
	}

	.left-top-sign {
		font-size: 120rpx;
		color: #f8f8f8;
	}

	.welcome {
		position: relative;
		top: -90rpx;
		padding-left: 60rpx;
		font-size: 46rpx;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0, 0, 0, .3);
	}

	.input-content {
		padding: 0 60rpx;
	}

	.input-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding-left: 30rpx;
		background: #f8f6fc;
		height: 120rpx;
		border-radius: 4px;
		margin-bottom: 50rpx;

		&:last-child {
			margin-bottom: 0;
		}

		.row {
			width: 100%;
		}

		.tit {
			height: 50rpx;
			line-height: 56rpx;
			font-size: 26rpx;
			color: #606266;
		}

		input {
			flex: 1;
			height: 60rpx;
			font-size: 30rpx;
			color: #303133;
			width: 100%;
		}
	}

	button[type=primary] {
		background-color: $mxg-color-primary !important;
	}

	/* 其他登录方式 */
	.other-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 20rpx;
		margin-top: 80rpx;

		.weixin {
			border: 0;
		}

		.line {
			margin-bottom: 40rpx;

			.tit {
				margin: 0 32rpx;
				font-size: 24rpx;
				color: #606266;
			}

			&:before,
			&:after {
				content: '';
				width: 160rpx;
				height: 0;
				border-top: 1px solid #e0e0e0;
			}
		}

		.icon {
			width: 80rpx;
			height: 80rpx;
			margin: 0 50rpx;
		}
	}

	.agreement {
		position: absolute;
		left: 0;
		bottom: 10rpx;
		width: 750rpx;
		height: 90rpx;
		font-size: 24rpx;
		color: #999;

		.iconfont {
			font-size: 36rpx;
			color: #ccc;
			margin-right: 8rpx;

			&.active {
				color: $mxg-color-primary;
			}
		}

		.tit {
			color: #40a2ff;
		}
	}
</style>