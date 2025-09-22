<template>
	<list-box :name="name" :word="word" :params="params">
		<scroll-view class="list-scroll noScorll" scroll-x>
			<view class="list-scroll-view" v-for="(item,index) in courseData" :key="index">
				<!-- 纵向排列 -->
				<course-item class="list-scroll-item" :isColumn="true" :item="item"></course-item>
			</view>
		</scroll-view>
	</list-box>
</template>

<script>
	import listBox from './list-box.vue'
	import courseItem from '../../../components/common/course-item.vue'
	import courseData from '../../../mock/courseData'
	export default {
		components: {
			listBox,
			courseItem
		},
		props: {
			params: Object, // 点击`全部`跳转传递的参数 +++++
			name: {
				type: String,
				default: "热门推荐"
			},
			word: {
				type: String,
				default: null
			},
			courseData: {
				type: Array,
				default: () => courseData
			}
		}
	}
</script>

<style lang="scss">
	.list-scroll {
		// 内容一行显示不换行
		white-space: nowrap;
		height: 380rpx;

		.list-scroll-view {
			display: inline-block;
			width: 310rpx;
			background-color: #fff;
			padding: 0 10rpx;
			margin-right: 20rpx;
			border-radius: 20rpx;
			box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
		}
	}
</style>