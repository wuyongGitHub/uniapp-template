<template>
	<view class="container-list">
		<!-- 标签导航栏 -->
		<tab-bar ref="tabBar" v-model="tabIndex" :tabs="tabs"></tab-bar>
		<!-- 列表区域 -->
		<swiper :style="{height: height}" :current="tabIndex" @change="swiperChange">
			<swiper-item v-for="(tab, i) in tabs" :key="i">
				<mescroll-item ref="mescrollItem" :i="i" :index="tabIndex" :tabs="tabs">
				</mescroll-item>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import courseApi from '@/api/course.js'
	import MescrollItem from "./component/mescroll-swiper-item.vue"
	import tabBar from '@/components/common/tab-bar.vue'
	export default {
		components: {
			tabBar,
			MescrollItem
		},
		data() {
			return {
				tabs: [],
				tabIndex: 0, // 当前tab的下标
				height: '', // 需要固定的swiper的高度
			}
		},
		onLoad() {
			// 需要固定swiper的高度 (需减去悬浮tabs的高度64rpx)
			this.height = uni.getSystemInfoSync().windowHeight - uni.upx2px(64) + 'px'
			// 查询分类
			this.loadData()
		},
		// 监听原生输入框点击事件
		onNavigationBarSearchInputClicked() {
			this.navTo("/pages/search/search")
		},
		methods: {
			async loadData() {
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				//查询分类
				const {
					data
				} = await courseApi.getCategoryList()
				data.unshift({
					id: null,
					name: '推荐'
				}) //添加`推荐`到第1个元素
				this.tabs = data
				uni.hideLoading()
			},
			// 轮播菜单
			swiperChange(e) {
				this.tabIndex = e.detail.current
				// 左右切换时，重新计算
				this.$refs.tabBar.changeTab(this.tabIndex)
			},
		}
	}
</script>

<style>
	page,
	.container-list {
		height: 100%;
		overflow: hidden;
	}
</style>