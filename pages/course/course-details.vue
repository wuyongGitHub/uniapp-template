<template>
	<view>
		<course-header></course-header>
		<!-- #ifdef APP-PLUS -->
		<share ref="share" :shareData="course"></share>
		<!-- #endif -->
		<view class="course-details" :style="'height:'+pageHeight+'px'">
			<tab-bar :tabs="tabs" v-model="tableIndex"></tab-bar>
			<swiper class="swiper-box" duration="300" :current="tableIndex" circular="true" @change="changTab">
				<swiper-item v-for="(item,index) in tabs" :key="index">
					<scroll-view scroll-y="true" class="scroll-box" id="scroll-box" :scroll-y="enableScroll" upper-threshold="0"
						@scrolltoupper="scrolltoupper">
						<view class="details-info">
							<course-info v-if="index==0" :detailUrls="course.detailUrls"></course-info>
							<course-dir v-if="index==1" :chapterList="chapterList" :activeObj="activeObj" :isBuy="isBuy"
								@playVideo="playVideo"></course-dir>
							<course-comment v-if="index==2" :commentList="commentList"></course-comment>
							<course-group v-if="index==3" :groupList="groupList"></course-group>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view><!-- 底部按钮：立即购买 -->
		<bottom-btn :btnText="isBuy || course.isFree ? '立即观看': '立即购买'" :courseId="id"
			@clickBottom="clickBottom"></bottom-btn>
		<!-- 免费试看 -->
		<view v-if="videoUrl" @click="closePlay" class="mask video-box" @touchmove.stop.prevent="()=>{}">
			<view class="name">
				<text>免费试看</text>
				<text class="iconfont icon-close"></text>
			</view>
			<video id="playVideo" class="video" :src="videoUrl">
			</video>
		</view>
	</view>
</template>

<script>
	import api from '@/api/course.js'
	import bottomBtn from './components/bottom-btn.vue'
	import courseHeader from './components/course-header.vue'
	import tabBar from '@/components/common/tab-bar.vue'
	import tabs from '@/config/course-details-tabs.js'
	import courseInfo from './components/course-info.vue'
	import courseDir from './components/course-dir.vue'
	import courseComment from './components/course-comment.vue'
	import courseGroup from './components/course-group.vue'
	export default {
		components: {
			courseHeader,
			tabBar,
			courseInfo,
			courseDir,
			courseComment,
			courseGroup,
			bottomBtn,
		},
		data() {
			return {
				isBuy: true, // 是否购买
				tabs: tabs(),
				tableIndex: 0,
				enableScroll: false, // 详情区域是否允许滚动 ++++++ 改false
				pageHeight: 300, // 手机可用视口高度
				statusNavHeight: 0, // 状态栏+导航栏高度
				detailTop: 0, //详情区域距离顶部高度（头部高度）
				id: null, // 课程id
				course: {}, //课程基本信息
				chapterList: [], // 章节信息
				commentList: [], // 评论信息
				groupList: [], // 套餐信息
				videoContext: null, //播放器实例
				activeObj: {}, //当前所选视频下标对象 ++++
				videoUrl: null // 播放视频
			}
		},
		// 小程序端分享给好友（与onLoad同级）
		onShareAppMessage(res) {
			return {
				title: this.course.title,
				path: this.$util.routePath()
			}
		},
		onLoad(options) {
			//获取当前页面视口高度
			this.getPageHeight()
			// #ifdef APP-PLUS
			// 禁用点击状态栏回到顶部
			this.noStatusScrollTop()
			// #endif

			// 查询数据
			this.id = options.id
			this.loadData()
		},
		// #ifdef APP-PLUS
		// 监听APP导航栏按钮
		// app端分享
		onNavigationBarButtonTap(e) {
			if (e.type === 'share') {
				this.$refs.share.showHandler()
			}
		},
		// #endif
		// 监听页面滚动到底部
		onReachBottom() {
			// 滚动条到达底部后，详情开始滚动
			this.enableScroll = true
		},
		// 实时监听页面滚动 （与methods同级）
		onPageScroll(e) {
			// 页面到达底部则将详情区滚动条开启
			if (this.detailTop - this.statusNavHeight <= e.scrollTop) {
				this.enableScroll = true
				return;
			}
			// 当前滚动条距离顶部高度 小于 详情标签到顶部高度
			if (this.enableScroll && e.scrollTop < this.detailTop) {
				//禁止详情滚动
				this.enableScroll = false
			}
		},
		// 页面初次渲染完成
		onReady() {
			//获取详情区域距离顶部高度
			let view = uni.createSelectorQuery().in(this).select(".course-details");
			view.fields({
				rect: true
			}, data => {
				// console.log("节点的顶部高度为" + data.top);
				this.detailTop = data.top
			}).exec();

			// 获取video实例, 注意 video 组件上声明 id="playVideo"
			this.videoContext = uni.createVideoContext('playVideo', this)
		},
		methods: {
			// 试看视频
			playVideo(obj) {
				if (this.isBuy) {
					// 已购买视频播放页
					this.navTo(`/pages/course/course-play?id=${this.courseId}`)
					return
				}
				this.activeObj = obj.activeObj // ++++
				this.videoUrl = obj.section.videoUrl
				this.$nextTick(() => {
					this.videoContext.play()
				})
			},
			// 关闭播放窗口给
			closePlay() {
				this.videoContext.stop()
				this.videoUrl = null
			},
			clickBottom() {
				console.log("this.isBuy", this.isBuy, this.course.isFree)
				if (this.isBuy || this.course.isFree) {
					// 跳转已购买视频播放页(后面创建页面)
					this.navTo(`/pages/course/course-play?id=${this.id}`, {
						login: true
					})
				} else {
					// 跳转确认购买页
					this.navTo(`/pages/order/confirm-buy?course=` + encodeURIComponent(JSON.stringify(this.course)), {
						login: true
					})
				}
			},
			// 加载数据
			loadData() {
				// 查询课程是否购买
				this.getCourseIsBuy()
				this.getCourseById()
				this.getChapterSectionList()
				this.getCourseCommentList()
				this.getCourseGroupList()
			},
			// 是否购买课程
			async getCourseIsBuy() {
				// const isLogin = this.$util.isLogin()
				// console.log("~~~~", isLogin)
				// console.log("我被执行了")
				const token = uni.getStorageSync('mxgEducationToken')
				if (!token) { // 判断是否登录
					const {
						data
					} = await api.getCourseIsBuy(this.id)
					this.isBuy = data.isBuy
				}
			},
			// 查询课程基本信息
			async getCourseById() {
				const {
					data
				} = await api.getCourseById(this.id)
				this.course = data
				// 将课程名称赋值导航标题 
				uni.setNavigationBarTitle({
					title: data.title
				})
			},
			// 查询章节列表数据
			async getChapterSectionList() {
				const {
					data
				} = await api.getChapterSectionList(this.id)
				this.chapterList = data
			},
			// 查询评论列表数据 
			async getCourseCommentList() {
				const {
					data
				} = await api.getCourseCommentList(this.id)
				this.commentList = data
			},
			// 查询套餐搭配数据
			async getCourseGroupList() {
				const {
					data
				} = await api.getCourseGroupList(this.id)
				this.groupList = data
			},
			// 禁用点击状态栏回到顶部
			noStatusScrollTop() {
				const webview = this.$scope.$getAppWebview();
				webview.setStyle({
					'scrollsToTop': false
				})
			},
			scrolltoupper() {
				// 页面区域也回到顶部 
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 150
				})
				// 滚动到页面顶部，禁用详情滚动
				this.enableScroll = false
			},
			changTab(e) {
				this.tableIndex = e.detail.current
				// 一但切换选项，页面回到底部// 切换选项，将页面滚动条切换到底部 ++
				uni.pageScrollTo({
					scrollTop: this.detailTop,
					duration: 300
				})
			},
			// 获取当前页面视口高度
			getPageHeight() {
				const res = uni.getSystemInfoSync()
				// 平台
				const system = res.platform
				// 状态栏高度
				const statusBarHeight = res.statusBarHeight
				// 状态栏+导航高度
				if (system === 'android') {
					this.statusNavHeight = (48 + statusBarHeight)
				} else if (system === 'ios') {
					this.statusNavHeight = (44 + statusBarHeight)
				}
				// screenHeight 是整合手机屏幕的高度，
				// windowHeight 是webview（不包括手机通知栏、小程序标题栏和tabBar）的页面高度；
				// 如果导航是渐变效果, 上面两个值是一样的，需要自己计算，减去后面显示出来的状态导航高
				// 页面视口高度 
				this.pageHeight = res.windowHeight - this.statusNavHeight
			}
		}
	}
</script>

<style lang="scss">
	.video-box {
		z-index: 100;
		text-align: center;

		.video {
			width: 750rpx;
			height: 420rpx;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.name {
			position: relative;
			top: 380rpx;
			color: #FFFFFF;
			font-size: 38rpx;
			font-weight: bold;
		}

		.icon-close {
			margin-left: 20rpx;
		}
	}

	.course-details {
		overflow: hidden;

		.scroll-box,
		.swiper-box {
			height: 100%;
		}

		.details-info {
			// 标签选项卡高度
			padding-bottom: 180rpx;
		}
	}
</style>