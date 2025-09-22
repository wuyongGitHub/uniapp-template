<template>
	<view class="list-box">
		<view class="title space-between center">
			<view class="center">
				<text class="name">{{name}}</text>
				<text class="word" v-if="word">{{word}}</text>
			</view>
			<text class="all">
				<text @click="toSearchPage">全部</text>
				<text class="iconfont icon-right"></text>
			</text>
		</view>
		<!-- 插槽 列表部分 -->
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			params: Object, // 点击`全部`跳转传递的参数
			name: { // 名称
				type: String,
				default: '热门推荐'
			},
			word: { // 高亮单词，如： 'HOT'
				type: String,
				default: null
			}
		},
		methods: {
			toSearchPage() {
				console.log('this.params', this.params)
				this.navTo(`/pages/search/search?params=${ JSON.stringify(this.params) }`)
			}
		}
	}
</script>

<style lang="scss">
	.list-box {
		margin-top: 60rpx;

		.title {
			.name {
				font-size: 38rpx;
				font-weight: 500;
				color: #303133;
				margin-right: 10rpx;
			}

			.word {
				background-image: linear-gradient(to right, $mxg-color-orange, $mxg-text-color-red);
				font-size: 20rpx;
				color: #fff;
				padding: 0 10rpx;
				border-radius: 30rpx 30rpx 30rpx 0;
			}

			.all {
				font-weight: normal;
				color: $mxg-text-color-grey;
				font-size: 28rpx;

				.iconfont {
					font-size: 25rpx;
				}
			}

		}
	}
</style>