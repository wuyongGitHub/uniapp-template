<template>
	<view>
		<no-data v-if="!groupList || groupList.length<=0" desc="暂无套餐"></no-data>
		<view v-else class="group-list">
			<!-- Android平台weex对阴影样式(box-shadow)支持不完善,
新增elevation属性（组件的属性，不是css样式）设置组件的层级，
Number类型，层级值越大阴影越明显，阴影效果也与组件位置有关，
越靠近页面底部 阴影效果越明显 -->
			<view class="group-item" elevation="12px" v-for="(item, index) in groupList" :key="index">
				<text class="title">{{item.title}}</text>
				<course-item v-for="(info, i) in item.list" :key="i" :item="info"></course-item>
				<view class="price-box space-between center">
					<view class="price">
						<text class="group-price">￥{{item.groupPrice}}</text>
						<text class="total-price">￥{{item.totalPrice}}</text>
					</view>
					<text class="buy" @click="buyGroupHandler(item)">购买套餐</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import courseItem from '@/components/common/course-item.vue'
	import groupData from '@/mock/courseGroupData.js'
	export default {
		components: {
			courseItem
		},
		props: {
			groupList: {
				type: Array,
				default: () => groupData
			}
		},
		methods: {
			buyGroupHandler(item) {
				// 确认购买页
				this.navTo(`/pages/order/confirm-buy?groupCourse=` + encodeURIComponent(JSON.stringify(item)))
			}
		}
	}
</script>
<style lang="scss">
	.group-item {
		margin: 36rpx 30rpx;
		background-color: #fff;
		border-radius: 20rpx;
		box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.1);
		padding: 0 20rpx;

		.title {
			font-size: 35rpx;
			font-weight: 500;
			padding-top: 20rpx;
		}

		.price-box {
			color: $mxg-text-color-red;
			font-size: 30rpx;
			line-height: 80rpx;
			font-weight: bold;

			.group-price {
				font-size: 37rpx;
				margin-right: 10rpx;
			}

			.total-price {
				color: #999;
				font-weight: normal;
				text-decoration: line-through;
			}
		}
	}
</style>