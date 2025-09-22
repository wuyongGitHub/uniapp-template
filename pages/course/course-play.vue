<template>
	<view class="course-play">
		<!-- #ifndef APP-PLUS -->
		<video id="myVideo" style="width: 750rpx; height: 423rpx;" :src="src" :poster="poster">
		</video>
		<!-- #endif -->

		<!-- 标题与详情按钮 -->
		<view class="course-info space-between">
			<text class="title">{{course.title}}</text>
			<view class="right" @click="navTo(`/pages/course/course-details?id=${id}`)">
				<text>详情</text>
				<text class="iconfont icon-right"></text>
			</view>
		</view>

		<!-- 课程列表 -->
		<course-dir :isBuy="true" :chapterList="chapterList" :activeObj="activeObj" @playVideo="changeVideo">
		</course-dir>

		<!-- 底部按钮：分享，评论 -->
		<view class="bottom center">
			<!-- #ifdef APP-PLUS -->
			<view class="btn-item one column" @click="share">
				<text class="iconfont icon-Share-Outline"></text>
				<text>分享</text>
			</view>
			<!-- #endif -->
			<view class="btn-item one column" @click="openComment">
				<text class="iconfont icon-edit"></text>
				<text>评价</text>
			</view>
		</view>


		<!-- 分享 -->
		<mxg-share ref="share" :shareData="course"></mxg-share>

		<!-- 评论组件 -->
		<mxg-comment ref="comment" @submitComment="submitComment"></mxg-comment>
	</view>
</template>

<script>
	let videoContext = null

	import courseDir from './components/course-dir.vue'

	import api from '@/api/course.js'
	export default {
		components: {
			courseDir
		},

		data() {
			return {
				src: 'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=164016&resourceType=video&editionType=low&source=aliyun&playUrlType=url_oss',
				poster: 'https://gd4.alicdn.com/imgextra/i4/3603079088/O1CN01dczOSM2H0LvTowhkl_!!3603079088.png',
				id: null, // 课程id
				course: {}, // 课程基本信息
				chapterList: [], // 课程视频列表
				activeObj: { // 列表选中的下标
					chapterIndex: 0,
					sectionIndex: 0
				}
			}
		},

		onReady() {
			// #ifndef APP-PLUS
			videoContext = uni.createVideoContext('myVideo', this)
			// console.log('videoContext', videoContext)
			// #endif
		},

		onLoad(option) {
			this.id = option.id
			this.loadData()
		},

		methods: {
			async loadData() {
				// 查询课程基本信息
				const {
					data: course
				} = await api.getCourseById(this.id)
				this.course = course
				// 查询视频播放列表
				const {
					data: chapterList
				} = await api.getCourseBuyList(this.id)
				this.chapterList = chapterList
				// console.log('course', this.course)
				// console.log('chapterList', this.chapterList)

				// #ifndef APP-PLUS
				// 非app端
				this.poster = this.course.mainImage
				const chapter = this.chapterList[this.activeObj.chapterIndex]
				const section = chapter && chapter.sectionList[this.activeObj.sectionIndex]
				this.src = section && section.videoUrl || ''
				// #endif

				// #ifdef APP-PLUS
				// 针对APP端, 触发video事件，传递数据
				uni.$emit('video', {
					type: 'init',
					params: {
						course: this.course, // 课程信息
						chapterList: this.chapterList, // 课程列表
						activeObj: this.activeObj
					}
				})
				// #endif
			},

			//切换播放
			changeVideo(obj) {
				// console.log('obj', obj)
				this.activeObj = obj.activeObj

				// 点击的那节课信息 obj.section
				// #ifndef APP-PLUS
				videoContext.pause()
				this.src = obj.section.videoUrl
				setTimeout(() => {
					videoContext.play()
				}, 300)
				// #endif

				// #ifdef APP-PLUS
				// APP切换课程播放
				uni.$emit('video', {
					type: 'change',
					params: {
						activeObj: obj.activeObj,
						section: obj.section
					}
				})
				// #endif
			},

			share() {
				// #ifdef APP-PLUS
				this.$refs.share.showHandler()
				// #endif
			},

			// 提交评论内容
			async submitComment(comment) {
				uni.showLoading({
					title: '提交中',
					mask: true
				})
				// 封装课程id
				comment.courseId = this.id
				// 调用接口提交
				console.log('comment', comment)

				const res = await api.addCourseComment(comment)
				if (res.code === 20000) {
					comment.content = ''
					uni.hideLoading()
					this.$util.msg('评论成功')
					// 隐藏评论框
					this.$refs.comment.show()
				} else {
					this.$util.msg(res.message)
				}

			},

			// 打开评论窗口
			openComment() {
				this.$refs.comment.show()
			}
		}
	}
</script>

<style lang="scss">
	.course-play {
		padding-bottom: 100rpx;
	}

	.course-info {
		padding: 30rpx;
		font-weight: bold;
		border-bottom: $wyk-underline;

		.title {
			width: 500rpx;
			font-size: 35rpx;
			line-height: 60rpx;
			color: $mxg-text-color-black;
		}

		.right>text {
			font-size: 28rpx;
			line-height: 60rpx;
			color: $mxg-text-color-black;
		}
	}

	.bottom {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100rpx;
		background-color: #FFFFFF;
		border-top: $wyk-underline;
	}

	.btn-item {
		text {
			text-align: center;
			color: $mxg-text-color-grey;
			font-size: 25rpx;
		}

		.iconfont {
			font-size: 38rpx;
		}
	}
</style>