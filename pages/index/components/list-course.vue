<template>
	<list-box :name="name" :word="word" :params="params">
		<course-item v-for="(item,index) in courseData" :key="index" :item="item"></course-item>
	</list-box>
</template>
<script>
	import listBox from "./list-box.vue"
	import courseItem from "../../../components/common/course-item.vue"
	import courseData from "../../../mock/courseData"
	export default {
		components: {
			listBox,
			courseItem
		},
		props: {
			params: Object, // 点击`全部`跳转传递的参数 +++++
			name: { // 名称
				type: String,
				default:'热门推荐'
			},
			word: { // 高亮单词，如： 'HOT'
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

<style>
</style>