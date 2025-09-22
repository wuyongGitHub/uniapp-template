<template>
	<view class="down-bar row sticky-box" @touchmove.stop.prevent="()=>{}">
		<view class="one" v-for="(item,index) in downBarList" :key="index" @click="clickDwonView(item)">
			<view class="center" :class="{active:item.active || (item.id || item.id==0) || item.categoryId}">
				<text>{{item.name}}</text>
				<text class="iconfont icon-down1" v-show="!item.active"></text>
				<text class="iconfont icon-up" v-show="item.active"></text>
			</view>
			<view class="item-list" v-show="item.active">
				<!-- 分类页面  在category组件中分类点击事件不要少了.stop @click.stop 不然点击左侧分类会自动关闭弹窗 -->
				<category-box class="category" v-if="item.isCategory" :value="item"
					@searchByLabel="searchByLabel"></category-box>
				<!-- 非分类页面 -->
				<view class="name" v-else v-for="(item1,index1) in item.list" :key="index1"
					:class="{active:item1.name===item.name}" @click="changeInfo(item,item1)">{{item1.name}}</view>
			</view>
			<!-- 蒙层 -->
			<view class="cover" v-show="item.active"></view>
		</view>
	</view>
</template>

<script>
	import categoryBox from "@/pages/category/category.vue"
	export default {
		props: {
			params: { //其他页面跳转到搜索页的回显
				type: Object,
				default: null
			},
			downBar: {
				type: Array,
				default: () => [{
						type: "sort",
						name: "综合排序",
						active: false,
						list: [{
								id: null,
								name: "综合排序"
							},
							{
								id: 'new',
								name: "最新排序"
							},
							{
								id: 'hot',
								name: "热门排序"
							},
						]
					},
					{
						type: "label",
						name: "全部分类",
						active: false,
						isCategory: true,
					}
				]
			}
		},
		watch: {
			params: { // 监听其他页跳转到搜索页带的参数
				handler(newVal) {
					if (newVal) {
						// console.log('监听其他页跳转到搜索页带的参数', newVal)
						// 如果是`分类页面`点击`标签`后跳转过来的，
						// 则获取 `downBar` 最后一个元素，将分类标题替换掉即可
						if (newVal.name) {
							const obj = this.downBar[this.downBar.length - 1]
							// 将`全部分类`按钮的文字更新为新的标签名称
							obj.id = newVal.labelId
							obj.name = newVal.name
							// 为了打开分类弹窗后，高亮显示当前是哪个分类
							obj.activeIndex = newVal.activeIndex
							// 首页传递分类id
							obj.categoryId = newVal.categoryId
							return //不要少了
						}
						// 其他页面(非分类页)跳转过来参数 +++++++++++++++
						// 1. 从数组中找到对应类型的目标元素
						// 取 params 对象中第1个key名，与item.type进行匹配
						const key = Object.keys(newVal)[0]
						// item.type 与 key 匹配，找到目标元素
						const target = this.downBar.find(item => {
							return item.type === key
						})
						// 2. 从目标元素的 list 数组元素id匹配value,
						// 匹配到了，将对应名称name,显示到标题上
						const value = newVal[key]
						target.list.find(item => {
							if (item.id === value) {
								// 赋值到目标下拉对象上，显示对应的标题信息
								target.name = item.name
								target.id = item.id
								//匹配到了return true,不然会执行下去
								return true
							}
						})
					}
				},
				immediate: true //第1次即监听
			}
		},
		data() {
			return {
				downBarList: [], //用于接收父组件传递的数据,小程序直接修改props的值无效
			}
		},
		components: {
			categoryBox
		},
		created() {
			this.downBarList = this.downBar;
		},
		methods: {
			clickDwonView(item) {
				this.downBarList.forEach((i) => {
					// 将点击的显示或隐藏,其他的全部隐藏掉
					i.active = (item === i) ? !item.active : false;
				})
			},
			changeInfo(item, item1) {
				// 如果和上次查询的数据一样则不查询
				if (item1.name === item.name) return

				//更改查询名称
				item.name = item1.name
				item.id = item1.id

				// 触发父组件方法查询数据
				console.log("{[item1.type]:item.id}", {
					[item.type]: item1.id
				})
				this.$emit('search', {
					[item.type]: item1.id
				})
			},
			// 分类子组件，触发此方法，来查询对应分类标签的数据
			searchByLabel(label) {
				// console.log('选择的标签信息', label)
				// #ifdef MP
				//关闭弹窗
				this.clickDwonView(label)
				// 获取最后一个全部分类对象，将标题替换
				const obj = this.downBarList[this.downBarList.length - 1]
				obj.name = label.name
				obj.id = label.id
				obj.categoryId = label.categoryId
				// #endif
				this.$emit('search', {
					labelId: label.id,
					categoryId: label.categoryId
				})
			}
		}
	}
</script>

<style lang="scss">
	.down-bar {
		z-index: 100;
		background-color: #FFF;
		font-size: 30rpx;
		line-height: 80rpx;
		width: 100;
	}

	.item-list {
		z-index: 100;
		position: absolute;
		background-color: #FFF;
		left: 0;
		right: 0;

		.name {
			padding-left: 80rpx;
		}

		.category {
			height: 580rpx;
		}
	}

	// 被点击之后的效果
	.active {
		color: $mxg-text-color-blue;
	}

	// 粘顶
	.sticky-box {
		position: -webkit-sticky;
		position: sticky;
		top: var(--window-top);
	}

	// 蒙层
	.cover {
		z-index: 99;
		position: fixed;
		left: 0;
		right: 0;
		top: 160px;
		bottom: 0;
		background-color: black;
		opacity: 0.2;
	}
</style>