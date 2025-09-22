<template>
	<view class="keyword">
		<view class="title">热门搜索</view>
		<view class="tag-list">
			<view v-for="(item,index) in hotList" :key="index" @click="clickTagHandler(item)">{{item}}</view>
		</view>

		<view class="title space-between">
			<text>历史搜索</text>
			<text @click="clearHistory">清空</text>
		</view>
		<view class="tag-list">
			<view v-for="(item,index) in historyList" :key="index" @click="clickTagHandler(item)">{{item}}</view>
		</view>
	</view>
</template>

<script>
	// 历史本地保存的key
	const key = 'history_list'
	export default {
		data() {
			return {
				hotList: ['Java', 'python', 'vue', 'react', 'JavaScript'],
				historyList: uni.getStorageSync(key),
			}
		},
		methods: {
			clearHistory() {
				this.historyList = []
				uni.removeStorageSync(key)
			},
			clickTagHandler(content) {
				// 传递给搜索框
				// #ifdef APP-PLUS
				// 获取页面实例
				const currentWebview = this.$parent.$scope.$getAppWebview()
				currentWebview.setTitleNViewSearchInputText(content)
				// #endif
				
				// #ifdef H5
				// 将提示内容清空
				const placeholder = document.querySelector('.uni-page-head-search-placeholder');
				placeholder.innerHTML = '';
				// 将点击标签内容传给输入框
				const uniInputSearch = document.querySelector(".uni-input-input[type=search]");
				uniInputSearch.value = content;
				// #endif
				// 触发父组件搜索事件
				this.$emit("doSearch",{value:content})
			}
		}
	}
</script>

<style lang="scss">
	.keyword {
		padding: 25rpx;

		.title {
			font-size: 30rpx;
			color: #222222;

			text:last-child {
				color: #999;
			}
		}

		.tag-list {
			display: flex;
			flex-wrap: wrap;
			margin-top: 20rpx;
			margin-bottom: 60rpx;

			view {
				font-size: 25rpx;
				color: #999;
				border: 1rpx solid #999;
				border-radius: 8rpx;
				padding: 6rpx 15rpx;
				margin: 10rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}
</style>