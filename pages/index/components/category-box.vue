<template>
	<view class="category-box">
		<view v-for="(item,index) in categoryList.slice(0,7)"
			@click="toPageSearch(categoryList[index].id, categoryList[index].name,index)" :key="index">
			{{item.name}}
		</view>
		<view @click="toPageSearch(null, '全部分类' , -1)">
			全部分类
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			categoryList: {
				type: Array,
				default: () => [{
					id: 1,
					name: "Java"
				}, {
					id: 2,
					name: "前端"
				}, {
					id: 3,
					name: "Python"
				}, {
					id: 4,
					name: "UI设计"
				}, {
					id: 5,
					name: "运维"
				}, {
					id: 6,
					name: "人工智能"
				}, {
					id: 7,
					name: "实战课程"
				}, ]
			}
		},
		methods: {
			toPageSearch(id, name, index) {
				const params = {
					categoryId: id,
					name: name,
					activeIndex: index
				}
				this.navTo(`/pages/search/search?params=${ JSON.stringify(params) }`)
			}
		}
	}
</script>

<style lang="scss">
	/* 分类区 */
	.category-box {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 20rpx 30rpx 0 30rpx;

		view {
			width: 160rpx;
			height: 70rpx;
			background-color: #E3E5EB;
			line-height: 70rpx;
			text-align: center;
			font-size: 26rpx;
			margin-top: 15rpx;
			overflow: hidden;
			border-radius: 20rpx;
		}
	}
</style>