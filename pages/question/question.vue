<template>
	<view class="container">
		<tab-bar ref="tabBar" :tabs="tabs" v-model="tabIndex"></tab-bar>
		<swiper :style="{height: height}" :current="tabIndex" @change="swiperChange">
			<swiper-item v-for="(tab,i) in tabs" :key="i">
				<mescroll-item ref="mescrollItem" :i="i" :index="tabIndex" :tabs="tabs"></mescroll-item>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import tabBar from '@/components/common/tab-bar.vue'
	import tabs from '../../config/question-tab.js'
	import mescrollItem from './components/question-swiper-item.vue'
	
	export default {
		components: {
			tabBar,
			mescrollItem
		},
		data() {
			return {
				tabs,
				tabIndex: 0,
				height: '400px', // 需要固定的swiper高度
			}
		},
		
		onLoad() {
			// 需要固定swiper的高度
			this.height = uni.getSystemInfoSync().windowHeight + 'px'
		},
		
		onNavigationBarSearchInputClicked() {
			this.navTo('/pages/search/search')
		},
		
		methods: {
			// 轮播菜单
			swiperChange(e){
				this.tabIndex = e.detail.current
				// 左右切换时，重新计算移动的宽度 scroll-view 头部标签选项栏
				this.$refs.tabBar.changeTab(this.tabIndex)
			},
		}
	}
</script>

<style>
	page, .container {
		height: 100%;
		overflow: hidden;
	}
</style>
