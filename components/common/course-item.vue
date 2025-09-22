<template>
	<view class="course-item" :class="{column:isColumn}"  @click="navTo(`/pages/course/course-details?id=${item.id}`)">
		<view class="item-left">
			<image class="course-img" :src="'https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAWb3qFGBhykjmcTvz9CWmwib2Qj7c3Vxjia4y5fgSoNdrMYIdH11Dl1OCraibA7u0mts/600'" mode="" lazy-load></image>
			<view class="course-time">
				{{item.totalTime}}
			</view>
		</view>
		<view class="item-right">
			<view class="title">{{item.title}}</view>
			<view class="info">
				<view class="nickname iconfont icon-laoshi2">{{item.nickName}}</view>
				<view class="count">
					<view v-if="item.isFree" class="money">免费</view>
					<view v-else class="money iconfont icon-moneybag">{{item.priceOriginal || item.priceDiscount}}</view>
					<view class="iconfont icon-video">{{item.studyTotal}}人在学</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CourseItem',
		props: {
			isColumn: { //是否图片与文字描述纵向排列（false 默认横向，true 纵向）
				type: Boolean,
				default: false
			},
			item: {
				type: Object,
				default: () => ({ // 默认值是对象，必须是小括号将对象括起来。
					id: 1,
					mainImage: 'https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAWb3qFGBhykjmcTvz9CWmwib2Qj7c3Vxjia4y5fgSoNdrMYIdH11Dl1OCraibA7u0mts/600',
					totalTime: '00:59:08',
					title: 'SpringBoot项目实战教程SpringCloud OAuth2 Vue分布式微服务架构',
					nickName: '梦老师1', // 课程老师
					isFree: 0, //是否免费：0收费，1免费
					priceOriginal: 999, // 原价
					priceDiscount: 699.9, // 优惠价
					studyTotal: 899
				})
			}
		}
	}
</script>

<style lang="scss">
	.course-item {
		display: flex;
		// flex-direction: column;
		width: 100%;
		padding: 20rpx 0;

		.item-left {
			width: 290rpx;
			height: 160rpx;
			margin-right: 20rpx;
			position: relative;

			.course-img {
				width: 290rpx;
				height: 160rpx;
				border-radius: 10rpx;
			}

			.course-time {
				position: absolute;
				bottom: 5rpx;
				right: 5rpx;
				color: #FFF;
				font-size: 22rpx;
				background-color: rgba(51, 51, 51, 0.4);
				border-radius: 20rpx;
				padding: 0 8rpx;
			}
		}

		.item-right {
			.title {
				max-width: 365rpx;
				height: 70rpx;
				line-height: 35rpx;
				font-size: 28rpx;
				font-weight: bold;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2; // 设置显示行数
				display: -webkit-box; // 将对象作为弹性伸缩模型
				-webkit-box-orient: vertical;
				white-space: normal;
			}

			.info {
				.nickname {
					font-size: 23rpx;
					color: #999;
				}

				.count {
					display: flex;
					align-items: center;

					.iconfont {
						font-size: 23rpx;
						color: #222222;
					}

					.money {
						width: 130rpx;
						color: $mxg-color-orange;
						font-size: 28rpx;
						padding-right: 30rpx;
						align-self: flex-end;
					}
				}
			}
		}
	}
</style>