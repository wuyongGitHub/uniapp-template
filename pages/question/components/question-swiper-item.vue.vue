<template>
	<!-- 
	swiper中的transfrom会使fixed失效,此时用height="100%"固定高度; 
	swiper中无法触发mescroll-mixins.js的onPageScroll和onReachBottom方法,只能用mescroll-uni,不能用mescroll-body
	-->
	<!-- ref动态生成: 字节跳动小程序编辑器不支持一个页面存在相同的ref (如不考虑字节跳动小程序可固定值为 ref="mescrollRef") -->
	<!-- 
	  bottom="80" 底部宽出上面的标签选项栏所占高度
	  offset="0" 上拉距离底部多少时触发@up事件
	 -->
	<mescroll-uni :ref="'mescrollRef'+i" @init="mescrollInit" height="100%" bottom="80" offset="0" :down="downOption"
		@down="downCallback" :up="upOption" @up="upCallback">
		<!-- 数据列表 v-for="(item, index) in 15" :key="index"-->
		<question-item v-for="(item, index) in list" :key="index" :item="item"></question-item>
	</mescroll-uni>
</template>

<script>
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import MescrollMoreItemMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mixins/mescroll-more-item.js";
	import questionItem from '@/components/common/question-item.vue'
	import api from '@/api/question.js'

	export default {
		components: {
			questionItem
		},

		mixins: [MescrollMixin, MescrollMoreItemMixin], // 注意此处还需使用MescrollMoreItemMixin (必须写在MescrollMixin后面)
		data() {
			return {
				downOption: {
					auto: false // 不自动加载 (mixin已处理第一个tab触发downCallback)
				},
				upOption: {
					auto: false, // 不自动加载
					// page: {
					// 	num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
					// 	size: 10 // 每页数据的数量
					// },
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
		},
		methods: {
			/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
			async upCallback(page) {
				let response = null
				switch (this.index) {
					case 0: // 热门问答
						response = await api.getHotList(page.num, page.size)
						break;
					case 1: // 最新问题
						response = await api.getNewList(page.num, page.size)
						break;
					case 2: // 等待回答
						response = await api.getWaitList(page.num, page.size)
						break;
					default:
						break;
				}
				// 响应的数据
				const data = response.data
				// 列表数据
				const list = data.records
				// 第一页则是下拉刷新，将原有数据清空
				if (page.num === 1) {
					this.list = []
					this.mescroll.scrollTo(0, 0)
				}

				// 追加新数据
				this.list = this.list.concat(list)

				this.mescroll.endBySize(list.length, data.total)

				//演示为空情况
				//this.mescroll.endSuccess(0)
			},

		}
	}
</script>

<style>

</style>