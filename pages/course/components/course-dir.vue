<template>
	<view class="course-dir">
		<view v-for="(chapter, index) in chapterList" :key="index">
			<!-- 第几章 -->
			<text class="chapters text-ellipsis">第{{index+1}}章 {{chapter.name}}</text>
			<!-- 第几节 -->
			<view class="sections row" v-for="(section, index2) in chapter.sectionList" :key="index2"
				@click="playVideo(index, index2, section)"
				:class="{active: activeObj.chapterIndex === index && activeObj.sectionIndex === index2}">
				<text class="iconfont icon-roundrightfill"></text>
				<view class="row">
					<text>{{index+1}}-{{index2+1}}</text>
					<text class="title text-ellipsis">{{section.name}}</text>
				</view>
				<text class="see" v-if="section.isFree">试看</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isBuy: Boolean,
			activeObj: { // 当前所在章节
				type: Object,
				default: () => ({
					chapterIndex: -1, //章下标
					sectionIndex: -1 //节下标
				})
			},
			chapterList: { //章节信息
				type: Array,
				default: () => [{
						id: 1,
						name: '课程介绍',
						sectionList: [ //课节信息
							{
								id: 1,
								name: '什么是uni-app框架',
								isFree: 1, // 是否付费（0付费，1免费）
							},
							{
								id: 2,
								name: '安装HBuilderX和插件',
								isFree: 0, // 是否付费（0付费，1免费）
							},
							{
								id: 3,
								name: '创建uni-app项目和运行Web浏览器',
								isFree: 0, // 是否付费（0付费，1免费）
							}
						]
					},
					{
						id: 2,
						name: '初始化梦学谷在线教育APP项目',
						sectionList: [ //课节信息
							{
								id: 1,
								name: '创建运行项目和完善项目目录',
								isFree: 0, // 是否付费（0付费，1免费）
							},
							{
								id: 2,
								name: '拷贝静态资源到项目和mixin混合讲解',
								isFree: 0, // 是否付费（0付费，1免费）
							}
						]
					}
				]
			}
		},
		data() {
			return {}
		},
		methods: {
			playVideo(chapterIndex, sectionIndex, section) {
				if (section.isFree || this.isBuy) {
					this.activeObj.chapterIndex = chapterIndex
					this.activeObj.sectionIndex = sectionIndex
					// 传递
					this.$emit('playVideo', {
						section,
						activeObj: this.activeObj
					})
				} else {
					this.$util.msg('请先购买')
				}
			}
		}
	}
</script>

<style lang="scss">
	.course-dir {
		padding: 0 36rpx;

		.chapters {
			margin-top: 30rpx;
			margin-bottom: 10rpx;
			color: $mxg-text-color-black;
			font-size: 35rpx;
			font-weight: bold;
		}

		.sections {
			padding: 20rpx 0;
			font-size: 30rpx;
			border-bottom: $wyk-underline;
			line-height: 40rpx;
			color: #3d3c40;

			text {
				margin-right: 10rpx;
			}

			.title {
				width: 470rpx;
			}

			.see {
				color: $mxg-text-color-blue;
				font-size: 25rpx;
				// 靠右
				flex: 1;
				text-align: right;
			}
		}
	}

	.active {
		color: $mxg-text-color-blue;
	}
</style>