<template>
	<view class="content">
		<!-- 搜索框在小程序中显示 -->
		<!-- #ifdef MP -->
		<search-input @click.native="navTo('/pages/search/search')"></search-input>
		<!-- #endif -->
		<!-- 轮播图 -->
		<banner :bannerList="bannerList"></banner>
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption">
			<!-- 分类区域 -->
			<category-box :categoryList="categoryList"></category-box>
			<!-- 热门推荐 -->
			<view class="list-container">
				<swiper-course name="热门推荐" word="HOT" :courseData="hotCourseList" :params="{sort:'hot'}">></swiper-course>
				<scroll-course name="近期上新" word="NEW" :courseData="newCourseList" :params="{sort:'new'}">></scroll-course>
				<swiper-course name="免费精选" word="FREE" :courseData="freeCourseList" :params="{isFree: 1}">></swiper-course>
				<!-- 付费精品 -->
				<list-course name="付费精品" word="NICE" :courseData="payCourseList" :params="{isFree: 0}"></list-course>
			</view>
		</mescroll-body>
	
	</view>
</template>

<script>
	// 上拉下拉 uni_modules\mescroll-uni\components\mescroll-uni
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js"
	import api from "@/api/course.js"
	// 付费精品
	import listCourse from "./components/list-course.vue"
	// 横向推荐课程
	import scrollCourse from "./components/scroll-course.vue"
	// 默认推荐
	import swiperCourse from "./components/swiper-course.vue"
	// 分类区域
	import categoryBox from './components/category-box.vue'
	// 头部轮播图
	import banner from '../../components/common/banner.vue'
	// 搜索框组件
	import searchInput from '../../components/common/search-input.vue'
	export default {
		mixins: [MescrollMixin], // 2. 使用mixin
		components: {
			searchInput,
			banner,
			swiperCourse,
			categoryBox,
			scrollCourse,
			listCourse
		},
		data() {
			return {
				bannerList: [], // 广告信息
				categoryList: [], // 分类信息	
				hotCourseList: [], // 热门推荐信息
				newCourseList: [], // 最近上新
				freeCourseList: [], // 免费精选信息
				payCourseList: [], // 付费精品信息
				downOption: { // 3. 下拉刷新
					offset: 50, // 下拉高度多少，开始刷新
				}
			}
		},
		// 监听原生输入框点击事件
		onNavigationBarSearchInputClicked() {
			this.navTo("/pages/search/search")
		},
		// 监听扫一扫按钮
		onNavigationBarButtonTap(e) {
			// 点击第一个按钮
			if (e.index === 0) {
				// 打开扫一扫功能
				uni.scanCode({
					success: function(res) {
						console.log("条码类型" + res.scanType);
						console.log("条码内容" + res.result);
						uni.navigateTo({
							url: `/pages/public/web-view?url=${res.result}`
						})
					}
				})
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			//搜索框提示信息，只在APP中有
			this.placeholderData()
			// #endif
			this.loadBannerData()
			// this.loadCateData()
			// this.loadHotCourseData()
			// this.loadNewCourseData()
			// this.loadFreeCourseData()
			// this.loadPayCourseData()
		},
		methods: {
			// 下拉上拉
			async upCallback(page) {
				if (page.num === 1) {
					// this.loadBannerData()
					this.loadCateData()
					this.loadHotCourseData()
					this.loadNewCourseData()
					this.loadFreeCourseData()
					// this.loadPayCourseData()
				}
				//付费精品，带分页功能，isFree:0收费，1免费
				const {
					data
				} = await api.getList({
					isFree: 1
				}, page.num, page.isze)
				const curList = data.records

				// 如果第一页需要手动设置空列表
				if (page.num == 1) this.payCourseList = [];
				// 追加新数据
				this.payCourseList = this.payCourseList.concat(curList)
				// 请求成功, 隐藏加载状态，判断是否数据全部加载完（后台接口有返回列表的总数据量total)
				this.mescroll.endBySize(curList.length, data.total)
			},
			async loadHotCourseData() {
				const {
					data
				} = await api.getList({
					sort: 'hot'
				}, 1, 8)
				this.hotCourseList = data.records
			},
			async loadNewCourseData() {
				const {
					data
				} = await api.getList({
					sort: 'new'
				}, 1, 8)
				this.newCourseList = data.records
			},
			async loadFreeCourseData() {
				const {
					data
				} = await api.getList({
					isFree: 1
				}, 1, 10)
				this.freeCourseList = data.records
			},
			async loadPayCourseData() {
				const {
					data
				} = await api.getList({
					isFree: 0
				})
				this.payCourseList = data.records
			},
			// 轮播图数据
			async loadBannerData() {
				const {
					data
				} = await api.getAdvertList(1)
				this.bannerList = data
				// console.log("loadBannerData", data)
			},
			//分类数据
			async loadCateData() {
				const {
					data
				} = await api.getCategoryList()
				this.categoryList = data
				// console.log("loadCateData", data)
			},
			// 搜索框滚动数据
			placeholderData() {
				// 获取当前页面实例，仅App支持卸载APP-PLUS条件编译下
				let webview = this.$scope.$getAppWebview();
				let arr = ["APP", "微信小程序", "JAVA", "SpringBoot", "vue", "React"];
				let i = 0;
				webview.setStyle({
					"titleNView": {
						"searchInput": {
							"placeholder": arr[i]
						}
					}
				})
				setInterval(() => {
					// 定时循环每个元素，3最后一个元素，又从0第一个元素开始
					i = i < 3 ? ++i : 0;
					webview.setStyle({
						'titleNView': {
							"searchInput": {
								"placeholder": arr[i]
							}
						}
					})
				}, 3000)
			}
		}
	}
</script>

<style>
	.list-container {
		padding: 0 30rpx;
	}
</style>