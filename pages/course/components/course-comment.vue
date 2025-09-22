<template>
	<view>
		<no-data v-if="!commentList || commentList.length<=0" desc="暂无评论"></no-data>
		<!-- 评论 -->
		<view v-else class="comment">
			<view class="comment-item" v-for="(item, index) in commentList" :key="index">
				<view class="info">
					<image :src="item.userImage || '/static/tab/my.png'" :style="{'padding': !item.userImage && '10rpx'}"
						mode="aspectFill">
					</image>
					<view class="user">
						<view>{{item.nickName}}</view>
						<view>{{ $util.dateFormat(item.createDate) }}</view>
					</view>
					<text class="iconfont icon-haoping2" :class="{grey: !item.isGood}">
					</text>
				</view>
				<view class="content">
					{{item.content}}
				</view>
				<view class="replay" v-if="item.children && item.children.content">
					<text>讲师回复：</text>
					<text>{{item.children.content}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			commentList: {
				type: Array,
				default: () => [{
						"id": "1",
						"parentId": "-1",
						"nickName": "萧强",
						"userImage": null,
						"isGood": 1, // 1好评，0差评
						"content": "很认可梦学谷，这套课程项目与企业开发流程功能一样",
						"createDate": Date.now(), //wx小程序不支持new Date()
						"children": null
					},
					{
						"id": "2",
						"parentId": "-1",
						"nickName": "江秀英",
						"userImage": "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
						"isGood": 0, // 1好评，0差评
						"content": "但非约事京或改各史习反候至百。",
						"createDate": "2008-03-12 09:08:06",
						"children": {
							"id": "3",
							"parentId": "2",
							"nickName": "李涛",
							"userImage": null,
							"content": "感谢你一直以来的支持！梦学谷-陪你学习，伴你梦想！",
							"createDate": "2008-03-12 09:08:06",
						}
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	/* 评论 */
	.comment {
		background-color: #FFFFFF;
		padding: 0 36rpx;
		font-size: 30rpx;

		.comment-item {
			margin-top: 36rpx;
			border-bottom: $wyk-underline;

			.info {
				display: flex;
				align-items: center;

				image {
					width: 70rpx;
					height: 70rpx;
					border-radius: 50rpx;
					margin-right: 20rpx;
				}

				.user {
					font-weight: bold;
					line-height: 33rpx;

					:last-child {
						color: #999;
						font-size: 25rpx;
						font-weight: normal;
					}
				}

				:last-child {
					// 最右边
					margin-left: auto;
					font-size: 35rpx;
					color: #ff001b;
				}

				.grey {
					color: $mxg-text-color-grey;
				}
			}

			.content {
				margin: 25rpx 0;
			}

			.replay {
				margin-bottom: 30rpx;
				color: #7d828f;
				background-color: #F8F9FB;
				padding: 15rpx;
				border-radius: 10rpx;
			}
		}
	}
</style>