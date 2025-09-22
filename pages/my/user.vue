<template>
	<view>
		<wyk-list :list="list" @chooseImg="chooseImg" @editUsername="editUsername" @editMobile="editMobile"
			@editName="editName" @chooseSex="chooseSex" />
		<button class="logout-btn" @click="logout">退出登录</button>
		<!-- 修改昵称时显示 -->
		<view v-if="isUpdate" class="bottom row" catchtouchmove="true" @touchmove.stop.prevent="()=>{}">
			<input v-model="content" class="mxg-input" :maxlength="20" focus type="text">
			<text class="update-btn" @click="submitUpdate">修改</text>
		</view>
	</view>
</template>
<script>
	import list from '@/config/user-list-bar.js'
	import authApi from '@/api/auth.js'
	export default {
		data() {
			return {
				list: list(), // 列表数据，不要少括号
				isUpdate: false, // 显示隐藏修改窗口
				content: '', // 修改内容
			}
		},
		methods: {
			// 上传头像
			chooseImg(obj) {},
			// 选择性别
			chooseSex(obj) {},
			// 修改昵称
			editName(obj) {},
			// 更新输入框修改按钮
			submitUpdate() {},
			// 修改用户名
			editUsername() {},
			// 修改手机号
			editMobile() {},
			// 退出登录
			async logout() {
				uni.showModal({
					title: '确定退出登录?',
					content: '退出后不会删除任何历史数据',
					success: async (res) => {
						if (res.confirm) {
							const {
								code,
								message
							} = await authApi.logout(this.$store.state.accessToken)
							if (code === 20000) {
								this.$util.msg('成功退出登录')
								this.$store.commit('logout')
								setTimeout(() => {
									this.navBack()
								}, 300)
							} else {
								this.$util.msg(message)
							}
						}
					}
				})
			},
		}
	}
</script>
<style lang="scss">
	page {
		background-color: $mxg-color-grey;
	}

	.logout-btn {
		margin-top: 25rpx;
		color: $mxg-text-color-black;
		background-color: #FFFFFF !important;
		border-radius: 0;

		&:after {
			border: 0;
		}
	}

	.button-hover {
		background-color: $mxg-color-grey !important;
	}

	.bottom {
		z-index: 90;
		position: fixed;
		top: var(--window-top);
		/*h5端要空出导航高*/
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #FFFFFF;
	}

	.mxg-input {
		z-index: 100;
		width: 650rpx;
		height: 90rpx;
		font-size: 35rpx;
		padding: 0 20rpx;
		background-color: #FFFFFF;
		border: $wyk-underline;
		margin: 0 10rpx;
	}

	.update-btn {
		z-index: 100;
		width: 100rpx;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		color: $mxg-text-color-blue;
	}
</style>