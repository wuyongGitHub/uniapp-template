<template>
	<view>
		<!-- #ifndef MP -->
		<!-- 头部空出的距离 -->
		<view class="status_bar"></view>
		<!-- #endif -->
		<!-- 状况用户信息 -->
		<view class="my-header">
			<view class="header-content space-between center" @click="hasLogin? navTo('/pages/my/user', {login: true}): navTo('/pages/auth/login')">
				<view class="left row center">
					<image :src="userInfo.imageUrl||'../../static/logo.png'" class="header-image" mode=""></image>
					<view class="header-info column" v-if="hasLogin">
						<text class="nickname">{{userInfo.nickName}}</text>
						<text class="username">用户名：{{userInfo.username}}</text>
					</view>
					<view class="header-info" v-else>
						<text class="nickname">请登录</text>
					</view>
				</view>
				<text class="iconfont icon-right"></text>
			</view>
		</view>
		<!-- 功能列表 -->
		<wyk-list :list="list"></wyk-list>
	</view>
</template>

<script>
	
	import {
		mapState,
		mapGetters
	} from 'vuex'
	import list from '@/config/my-list-bar.js'
	export default {
		computed: {
			// 结构状态作为计算属性
			...mapState(['userInfo']),
			...mapGetters(['hasLogin'])
		},
		data() {
			return {
				list: list() // 功能列表数据
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.status_bar {
		height: calc(var(--status-bar-height) + 48px);
		width: 100%;
		background-color: $mxg-color-primary;
	}

	.my-header {
		background-color: $mxg-color-primary;

		.header-content {
			padding: 50rpx 39rpx;
			background-color: #FFFFFF;
			border-radius: 30rpx 30rpx 0 0;
		}

		.left {
			.header-image {
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
			}

			.header-info {
				margin-left: 30rpx;

				.nickname {
					font-size: 39rpx;
					font-weight: bold;
				}

				.username {
					font-size: 33rpx;
					color: gray;
				}
			}
		}

		.icon-right {
			font-size: 35rpx;
			color: gray;
		}
	}
</style>