<template>
	<view class="question-item" @click="navTo(`/pages/question/details?id=${item.id}`)">
		<text class="title text-ellipsis">
			{{ item.title }}
		</text>
		<view class="foot">
			<view class="info-left">
				<text class="info-text">
					{{item.reply}} 回答 ·
				</text>
				<text class="info-text">
					{{ item.viewCount }} 浏览
				</text>
			</view>
			<view class="info-right">
				<text class="info-text">
					{{ item.nickName }} ·
				</text>
				<text class="info-text">
					{{ $util.dateFormat(item.updateDate) }}
				</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			item: {
				type: Object,
				default: () => ({
					id: 1,
					title: 'Uniapp如何快速掌握？',
					reply: 18,
					viewCount: 999,
					nickName: '梦老师',
					updateDate: new Date(),
				})
			}
		},
	}
</script>
<style lang="scss">
	.text-ellipsis {
		// 显示两行，超出部分用...代替
		overflow: hidden; // 超出隐藏
		text-overflow: ellipsis; //超出部分显示省略号
		display: -webkit-box; // 将对象作为弹性伸缩盒子模型显示
		-webkit-line-clamp: 2; //设置显示的行数
		-webkit-box-orient: vertical; // 设置或检索伸缩盒对象的子元素的排列方式 纵向
	}

	.question-item {
		padding: 25rpx;
		flex-direction: column;
		border-bottom: 1rpx solid #F1F1F1;
		min-height: 80rpx;

		.title {
			font-size: 33rpx;
			font-weight: 410;
		}

		.foot {
			display: flex;
			justify-content: space-between;

			.info-text {
				font-size: 26rpx;
				color: #999;
				padding-right: 10rpx;
			}
		}
	}
</style>