<template>
	<view>
		<view class="column center">
			<!-- widthFix 高度自动变化 -->
			<image class="logo" src="/static/images/logo-black.png" lazy-load mode="widthFix"></image>
			<text class="version">Version 1.0.0</text>
		</view>
		<view class="center-content">
			<p>梦学谷是专注于在线教育平台，聚合了优秀教师的海量精品课程。在这里，您可以在线观看视频
				教程；您可以随时随地向名师请教；您可以与大量志同道合的同学进行交流。</p>
			<p>打破地域的限制，让每个立志学习，有梦想的人，都能接受优秀教师的指导和教学；同时希望给
				优秀的教师一个展示的平台。</p>
			<p>梦学谷——陪你学习，伴你梦想！</p>
		</view>
		<view class="bottom">Copyright &copy; {{new Date().getFullYear()}} mengxuegu.com
			All rights reserved</text></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page {
		background-color: $mxg-color-grey;
	}

	.logo {
		margin-top: 60rpx;
		margin-bottom: 20rpx;
		width: 280rpx;
	}

	.version {
		font-size: 30rpx;
		color: $mxg-color-primary;
		font-weight: 500;
	}

	.center-content {
		margin-top: 50rpx;
		padding: 0 30rpx;
		font-size: 30rpx;
		color: $mxg-text-color-black;

		p {
			/* 缩进2格 */
			text-indent: 2em;
			margin-bottom: 20rpx;
		}
	}

	.bottom {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 20rpx;
		text-align: center;
		color: $mxg-text-color-grey;
		font-size: 20rpx;
	}
</style>