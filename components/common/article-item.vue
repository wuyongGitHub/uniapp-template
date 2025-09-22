<template>
	<view class="article-item" @click="navTo(`/pages/article/details?id=${item.id}`)">
		<view class="article-content row">
			<view class="left-text column">
				<text class="title text-ellipsis">
					{{ item.title }}
				</text>
				<text class="summary text-ellipsis">
					{{ item.summary }}
				</text>
			</view>
			<view v-if="item.imageUrl" class="right-image">
				<image :src="item.imageUrl"></image>
			</view>
		</view>
		<view class="article-info">
			<text>
				{{ item.nickName }}
			</text>
			<text>
				· {{ $util.dateFormat(item.updateDate) }}
			</text>
			<text>
				· {{ item.thumhup }} 赞
			</text>
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
					title: 'SpringBoot项目实战教程分布式微服务架构项目实战教程分布式微服务架构项目实战教程分布式微服务架构 ',
					summary: 'SpringCloud OAuth2 Vue分布式微服务架构项目实战教程分布式微服务架构分布式微服务架构项目实战教程分布式微服务架构分布式微服务架构项目实战教程分布式微服务架构分布式微服务架构项目实战教程分布式微服务架构',
					imageUrl: 'https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAWb3qFGBhykjmcTvz9CWmwib2Qj7c3Vxjia4y5fgSoNdrMYIdH11Dl1OCraibA7u0mts/600',
					nickName: '梦老师',
					thumhup: 100,
					updateDate: new Date(),
				}),
			}
		},
	}
</script>
<style lang="scss">
	.text-ellipsis {
		overflow: hidden;
		text-overflow: ellipsis; //显示省略号
		-webkit-line-clamp: 2; //最多2行
		display: -webkit-box;
		-webkit-box-orient: vertical;
		white-space: normal;
	}

	.article-item {
		padding: 30rpx;
		border-bottom: 1rpx solid #f1f1f1;

		.article-content {
			.left-text {
				.title {
					font-size: 35rpx;
					font-weight: bold;
				}

				.summary {
					padding-top: 5rpx;
					font-size: 26rpx;
					color: #999;
					-webkit-line-clamp: 1; //最多1行
				}
			}

			.right-image {
				min-width: 220rpx;
				margin-left: 5rpx;

				image {
					width: 220rpx;
					height: 140rpx;
					border-radius: 10rpx;
				}
			}
		}

		.article-info {
			text {
				font-size: 26rpx;
				color: #999;
				padding-right: 10rpx;

				&:first-child {
					color: #222222;
				}
			}
		}
	}
</style>