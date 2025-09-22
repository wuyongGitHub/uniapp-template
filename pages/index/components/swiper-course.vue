<template>
	<listBox :name="name" :word="word" :params="params">
		<swiper class="list-swiper" next-margin="30rpx" :style="{height:`${200*rows}rpx`}">
			<swiper-item class="swiper-item" v-for="(item,index) in column" :key="index">
				<course-item v-for="(item1,index1) in courseData.slice(index*rows,(index+1)*rows)" :key="item1.id"
					:item="item1"></course-item>
			</swiper-item>
		</swiper>
	</listBox>
</template>

<script>
	import courseItem from '@/components/common/course-item.vue'
	import courseData from '../../../mock/courseData'
	import listBox from './list-box.vue'
	export default {
		components: {
			courseItem,
			listBox
		},
		props: {
			params: Object, // 点击`全部`跳转传递的参数 +++++
			name: { // 名称
				type: String,
				default: '热门推荐'
			},
			word: { // 高亮单词，如： 'HOT'
				type: String,
				default: null
			},
			column: { // 默认2列
				type: Number,
				default: 2
			},
			rows: { // 默认4行
				type: Number,
				default: 4
			},
			courseData: {
				type: Array,
				default: () => courseData
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.list-swiper {
		height: 800rpx;

		.swiper-item {
			padding-right: 20rpx;
		}
	}
</style>