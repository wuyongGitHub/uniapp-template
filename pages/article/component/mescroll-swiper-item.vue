<template>
	<!-- 
	swiper中的transfrom会使fixed失效,此时用height固定高度; 
	swiper中无法触发mescroll-mixins.js的onPageScroll和onReachBottom方法,只能用mescroll-uni,不能用mescroll-body
	-->
	<!-- top的高度等于悬浮菜单tabs的高度  @down="downCallback" -->
	<mescroll-uni :ref="'mescrollRef'+i" @init="mescrollInit" height="100%" bottom="80rpx" offset="0" :down="downOption"
		@down="downCallback" :up="upOption" @up="upCallback">
		<!-- 数据列表 -->
		<article-item v-for="(item,index) in list" :key="index" :item="item"></article-item>
	</mescroll-uni>
</template>

<script>
	import api from '@/api/article.js'
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import MescrollMoreItemMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mixins/mescroll-more-item.js";
	import articleItem from "@/components/common/article-item.vue"
	export default {
		components: {
			articleItem
		},
		mixins: [MescrollMixin, MescrollMoreItemMixin], // 注意此处还需使用MescrollMoreItemMixin (必须写在MescrollMixin后面)
		data() {
			return {
				downOption: {
					auto: false // 不自动加载 (mixin已处理第一个tab触发downCallback)
				},
				upOption: {
					auto: false, // 不自动加载
					noMoreSize: 4, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					empty: {
						tip: '~ 空空如也 ~', // 提示
					}
				},
				list: [], //列表数据
			}
		},
		props: {
			i: Number, // 每个tab页的专属下标 (除了支付宝小程序必须在这里定义, 其他平台都可不用写, 因为已在MescrollMoreItemMixin定义)
			index: { // 当前tab的下标 (除了支付宝小程序必须在这里定义, 其他平台都可不用写, 因为已在MescrollMoreItemMixin定义)
				type: Number,
				default () {
					return 0
				}
			},
			tabs: { // 为了请求数据,演示用,可根据自己的项目判断是否要传
				type: Array,
				default () {
					return []
				}
			},
			height: [Number, String] // mescroll的高度
		},
		methods: {
			/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
			async upCallback(page) {
				// 根据分类id分页查询列表数据
				const query = {
					categoryId: this.tabs[this.index].id
				}
				const {
					data
				} = await api.getList(query, page.num, page.size)
				// 注意：数据在 records 中,
				const list = data.records
				// 如果是第一页需手动置空列表,回到顶部
				if (page.num == 1) {
					this.list = [];
					this.mescroll.scrollTo(0, 0)
				}
				//追加新数据
				this.list = this.list.concat(list)
				// 请求成功, 隐藏加载状态，判断是否数据全部加载完（后台接口有返回列表的总数据量 total)
				this.mescroll.endBySize(list.length, data.total)
				// 传入0就没有数据
				// this.mescroll.endSuccess(0)
			},
			//点击空布局按钮的回调
			emptyClick() {
				uni.showToast({
					title: '点击了按钮,具体逻辑自行实现'
				})
			}
		}
	}
</script>
<style>
	image {
		display: inline-block;
	}
</style>