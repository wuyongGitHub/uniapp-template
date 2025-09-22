<template>
	<!-- 不能用v-if (i: 每个tab页的专属下标;  index: 当前tab的下标; 申明在 MescrollMoreItemMixin )-->
	<view v-show="i === index">
		<down-bar :params="params" @search="search" :downBars="downBars"></down-bar>
		<!-- ref动态生成: 字节跳动小程序编辑器不支持一个页面存在相同的ref (如不考虑字节跳动小程序可固定值为 ref="mescrollRef") -->
		<mescroll-body :ref="'mescrollRef'+i" @init="mescrollInit" :down="downOption" @down="downCallback" :up="upOption"
			@up="upCallback">
			<view style="padding: 0 30rpx;">
				<!-- 数据列表 -->
				<course-item v-for="(item, index) in list" :key="index" :item="item">
				</course-item>
			</view>
		</mescroll-body>
	</view>
</template>

<script>
	import downBar from './down-bar.vue'

	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import MescrollMoreItemMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mixins/mescroll-more-item.js";

	import downBars from '@/config/course-down-bar.js'
	import courseItem from '@/components/common/course-item.vue'

	import api from '@/api/course.js'

	export default {
		mixins: [MescrollMixin, MescrollMoreItemMixin], // 注意此处还需使用MescrollMoreItemMixin (必须写在MescrollMixin后面)

		components: {
			downBar,
			courseItem
		},
		props: {
			params: { // 其他页面跳转到搜索页所带上请求参数，用于回显标题处
				type: Object,
				default: null
			},
			content: { // 搜索内容
				type: String,
				default: ''
			},

			i: Number, // 每个tab页的专属下标 (除了支付宝小程序必须在这里定义, 其他平台都可不用写, 因为已在MescrollMoreItemMixin定义)
			index: { // 当前tab的下标 (除了支付宝小程序必须在这里定义, 其他平台都可不用写, 因为已在MescrollMoreItemMixin定义)
				type: Number,
				default () {
					return 0
				}
			},
		},



		data() {
			return {
				upOption: {
					auto: false, // 不自动加载
					noMoreSize: 4, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
				},
				downBars: downBars(), // 注意是调用方法，不要少了()

				searchData: { // 封装搜索条件
					content: null, // 关键字内容
					sort: null, //排序类型（new 最新，hot热门）
					isFree: null, // 0付费，1免费
					labelId: null, //标签id
					categoryId: null, // 分类id
				},

				list: [] // 渲染列表数据
			}
		},

		mounted() {
			// 如果有其他页面带的请求参数，
			//则获取对应的请求参数值，将参数值与 this.searchData合并
			// Object.keys 返回对象中所有的key名称，返回值数组
			this.params && Object.keys(this.searchData).forEach((key) => {
				// 防止参数值为0也是有效的，所以要将0也正常处理，因为默认0会被false
				this.searchData[key] =
					(this.params[key] || this.params[key] === 0) ? this.params[key] : null
			})
			console.log('mounted合并的searchData', this.searchData)
		},

		methods: {
			// 搜索（data就是查询条件）
			search(data) {
				// 合并关键字内容，去掉左右空格
				this.searchData.content = this.content && this.content.trim()
				// 合并数据，data中的属性会合并到this.searchData对象属性值上，
				Object.assign(this.searchData, data)

				// console.log('查询逻辑', this.searchData)

				// 内容将page.num=1,再upCallback方法
				this.mescroll.resetUpScroll()
			},

			// 上拉加载的回调（下拉也会调用此方法，page.num = 1)
			async upCallback(page) {
				console.log('课程列表upCallback', page.num, page.size, this.searchData)
				// 根据分页条件查询列表数据
				const {
					data
				} = await api.getList(this.searchData, page.num, page.size)
				// 注意是声明的常量 list
				const currList = data.records

				// 第一次加载数据（下拉刷新）
				if (page.num === 1) {
					this.list = []
					// 回到顶部(距离顶部位置，时长毫秒数)
					this.mescroll.scrollTo(0, 0)
				}

				// 追加新数据
				this.list = this.list.concat(currList)
				// console.log('list', this.list)
				// 请求成功，隐藏加载状态
				this.mescroll.endBySize(currList.length, data.total)
			},


		}
	}
</script>

<style>
</style>