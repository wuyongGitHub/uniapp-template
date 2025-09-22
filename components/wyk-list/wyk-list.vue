<template>
	<view class="list-box">
		<!-- 一大类列表 -->
		<view class="list" v-for="(item, index) in list" :key="index">
			<!-- 每一行 -->
			<view v-for="(nav, i) in item" :key="i" @click="clickHandler(nav)"
				:hover-class="nav.checked || nav.checked===false ? '': 'active'" :hover-stay-time="50"
				class="list-item space-between center">
				<view class="left center">
					<text v-if="nav.icon" :class="nav.icon"></text>
					<view class="title">{{ nav.title }}</view>
				</view>
				<view class="right center">
					<!-- 右侧文字 -->
					<text v-if="nav.text">{{nav.text}}</text>
					<!-- 右侧开关 @click.stop 阻止祖节点发现点击事件 -->
					<switch v-if="nav.checked || nav.checked === false" :checked="nav.checked" @click.stop="()=>{}"
						@change="clickHandler(nav)" color="#345dc2" />
					<image v-if="nav.src" :src="nav.src" lazy-load></image>
					<!-- 右侧图标 -->
					<text v-if="nav.rightIcon" :class="nav.rightIcon"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: Array,
		},
		methods: {
			// 点击列表项触发
			clickHandler(obj) { 
				if (obj.path) {
					//跳转目标页面，判断是否要求先登录
					this.navTo(obj.path, {
						login: obj.login
					})
					return
				}
				if (obj.event) {
					// 触发绑定的事件
					this.$emit(obj.event, obj)
				}
			},
		}
	}
</script>

<style lang="scss">
	image {
		width: 80rpx;
		height: 80rpx;
	}

	.list-box {
		background-color: $mxg-color-grey;
		padding-top: 20rpx;

		.list {
			background-color: #FFF;
			margin-bottom: 20rpx;

			.list-item {
				padding: 26rpx 39rpx;
				border-bottom: $wyk-underline;
			}

			.left {
				font-size: 33rpx;

				text:first-child {
					margin-right: 20rpx;
				}
			}

			.right {
				text {
					font-size: 35rpx;
					color: $mxg-text-color-grey;
					margin-left: 15rpx;
				}

				image {
					width: 120rpx;
					height: 120rpx;
					border-radius: 50%;
				}

				switch {
					margin-right: -10rpx;
				}
			}

			.active {
				background-color: #fafafa;
			}
		}
	}
</style>