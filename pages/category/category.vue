<template>
	<view class="category">
		<scroll-view class="left noScorll" scroll-y>
			<view class="title">
				<view v-for="(item,index) in categoryList" :key="index" :class="{active:index===activeIndex}"
					@click.stop="getLabel(index,item)">{{item.name}}</view>
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="tag">
				<view v-for="(item,index) in labelList" :key="index" @click.stop="clickLabel(item)">{{item.name}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import api from "@/api/course.js"
	export default {
		props: {
			// 将当前组件作为子组件，传递了对应的标题处的对象
			value: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {
				categoryList: [], //左侧滚动分类
				labelList: [], //右侧标签数据
				activeIndex: 0, //当前激活
			}
		},
		mounted() {
			// 查询分类数据
			this.getList()
		},
		// 监听原生导航按钮事件
		onNavigationBarButtonTap(e) {
			// 搜索按钮
			if (e.index === 0) {
				// 在 /common/mixin/mixin.js 中定义了
				this.navTo('/pages/search/search')
			}
		},
		methods: {
			// 跳转到搜索页
			clickLabel(item) {
				// 判断当前是否被当作子组件使用
				if(this.value){
					// 将点击的标签信息回显到搜索页进行搜索
					this.searchPageChangeLabel(item)
					return
				}
				const params = {
					labelId: item.id,
					name: item.name,
					activeIndex: this.activeIndex
				}

				// this.navTo('/pages/search/search')
				this.navTo(`/pages/search/search?params=${ JSON.stringify(params) }`)
			},
			searchPageChangeLabel(item){
				// 如果上一次和这一次名称不相等则触发 标签名和分类名判断
				if(this.value.name !== item.name && this.value.name !== item.cname){
					// 如果有cname则是不限，如果没有则是具体的左侧分类名
					this.value.name = item.cname || item.name;
					// 标签ID
					this.value.id = item.id || null;
					//分类ID，点击不限就取分类ID
					this.value.categoryId = item.categoryId || null;
					this.$emit("searchByLabel",this.value)
				}
				this.value.active = false
			},
			// 获取列表
			async getList() {
				const {
					data
				} = await api.getCategoryList();
				this.categoryList = data;
				// 如果有值，则是搜索页传递过来的数据，当前页面作为子组件使用
				if (this.value) {
					// 对每个分类下的标签列表添加一个”不限“,除了"全部分类"
					this.categoryList.forEach((item) => {
						item.labelList.unshift({
							id: null,
							name: "不限",
							cname: item.name,
							categoryId: item.id
						})
					})
					// 向分类列表中第一个元素添加”全部分类“
					this.categoryList.unshift({
						id: null,
						name: "全部分类"
					})
					// 默认选中分类下标，在作为子组件的时候，默认选中左侧分类
					this.activeIndex = this.value.activeIndex>-1 ? this.value.activeIndex+1 : this.activeIndex
				}
				// 刚进入页面默认第一项触发
				this.getLabel(this.activeIndex)
			},
			// 获取标签信息
			getLabel(index, item) {
				this.activeIndex = index;
				if(item && item.name==='全部分类'){
					// 则是分类弹窗，关闭弹窗，将数据传递给下拉筛选标签处
					this.searchPageChangeLabel(item)
					return
				}
				// 获取点击的分类对象
				const activeCategory = this.categoryList[index];
				// 通过分类对象获取标签
				this.labelList = activeCategory.labelList;
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.category {
		display: flex;
		height: 100%;

		.left {
			background-color: #f8f9fb;
			width: 200rpx;
			border-radius: 0 25rpx 25rpx 0;

			.title {
				view {
					color: #000;
					text-align: center;
					font-size: 30rpx;
					color: #888888;
					width: 200rpx;
					line-height: 40rpx;
					font-size: 30rpx;
					padding: 55rpx 30rpx;
					position: relative;

					&:before {
						//分类触发竖线
						position: absolute;
						content: '';
						width: 0rpx;
						height: 0rpx;
						border-right: 6rpx solid $mxg-color-primary;
						border-radius: 30rpx;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
						transition: 0.3s;
						;
					}
				}

				.active {
					color: $mxg-color-primary;
					font-size: 33rpx;
					font-weight: bold;

					&:before {
						//分类触发竖线
						height: 50rpx;
					}
				}
			}
		}

		.right {
			background-color: #FFF;
			padding-left: 15rpx;
			margin: 0;

			.tag {
				display: flex;
				flex-wrap: wrap;
				padding-top: 35rpx;
				padding-left: 10rpx;

				view {
					font-size: 25rpx;
					line-height: 60rpx;
					border: 1px solid #999;
					border-radius: 30rpx;
					min-width: 160rpx;
					text-align: center;
					padding: 0 5rpx;
					margin: 15rpx 5rpx;
				}
			}
		}
	}
</style>