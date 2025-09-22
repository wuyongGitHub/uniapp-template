<template>
	<view class="course-header">
		<image class="img" :src="course.mainImage" lazy-load></image>
		<view class="header-info">
			<!-- v-if="!course.isFree" -->
			<view class="price-info">
				<text v-if="course.isFree" >免费</text>
				<block v-if="!course.isFree">
					<!-- 优惠价 -->
					<text v-if="course.priceDiscount">￥{{course.priceDiscount}}</text>
					<!-- 原价一直会显示（有优惠价时，显示price类名） -->
					<text :class="{price: course.priceDiscount}">￥{{course.priceOriginal}}
					</text>
				</block>
				<text v-if="course.priceDiscount" class="youhui">优惠价</text>
			</view>
			<view class="title">
				{{course.title}}
			</view>
			<view class="count">
				<text class="iconfont icon-haoping2">{{course.goodRate}}好评</text>
				<text class="iconfont icon-touxiang2">{{course.studyTotal}}人在学</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			course: {
				type: Object,
				default: () => ({
					"id": 10,
					"title": "Uniapp兼容多端在线教育项目实战",
					"studyTotal": 590, //在学人数
					"goodRate": '100%', //好评率
					"mainImage": "https://pic.ntimg.cn/file/20220207/56930_165226331107_2.jpg",
					"isFree": 0, // 0 付费，1免费
					"priceOriginal": 614.51, //原价
					"priceDiscount": 281.91 // 优惠价
				})
			}
		}
	}
</script>

<style lang="scss">
	.course-header {
		.img {
			width: 750rpx;
			height: 420rpx;
			// 去掉底部白色背景
			display: block;
		}

		.header-info {
			padding: 25rpx;
			background-color: #FFFFFF;
			border: 25rpx solid $mxg-color-grey;
			border-left: 0; //左边不无框
			border-right: 0; //右边不无框
		}

		.price-info {
			text {
				margin-right: 15rpx;

				&:first-child {
					color: $mxg-text-color-red;
					font-size: 46rpx;
					font-weight: bold;
				}
			}

			.price {
				color: #B6BBBF;
				font-size: 30rpx;
				text-decoration: line-through; // 删除线
			}

			.youhui {
				color: $mxg-text-color-red;
				font-size: 20rpx;
				border: 1px solid $mxg-text-color-red;
				border-radius: 10rpx;
				padding: 0 3rpx;
			}
		}

		.title {
			font-size: 35rpx;
			font-weight: bold;
			color: #1d1d1f;
			padding-left: 8rpx;
		}

		.count {
			padding: 15rpx 0;

			text {
				margin-right: 15rpx;
				font-size: 20rpx;
				color: #7d828f;
				border-radius: 30rpx;
				padding: 15rpx;
				background-color: $mxg-color-grey;
			}
		}
	}
</style>