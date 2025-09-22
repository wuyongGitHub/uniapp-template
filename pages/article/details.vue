<template>
	<view>
		<!-- 所属标签 -->
		<view class="tag-list row" >
			<uni-tag v-for="(item, index) in detailData.labelList" :key="index"
				:text="item.name"  class="tag-view" 
				type="primary" size="small" :circle="true" :inverted="true" />
		</view>
		
		<view class="content-main">
			<text class="title">{{detailData.title}}</text>
			<view class="info">
				<view class="author center">
					<image :src="detailData.userImage || '/static/logo.png'"></image>
					<text>{{detailData.nickName}}</text>
				</view>
				<text> · {{$util.dateFormat(detailData.updateDate)}}</text>
				<text> · {{detailData.viewCount}}人阅读</text>
			</view>
			
			<!-- 文章内容 -->
			<!-- #ifdef MP -->
			<!-- nodes 是html代码字符串 -->
			<!-- <rich-text selectable="true" nodes="<h2 style='color:red'>文章内容</h2>"></rich-text> -->
			<rich-text class="markdown-body" selectable="true" :nodes="detailData.htmlContent"></rich-text>
			<!-- #endif -->
			<!-- #ifndef MP -->
			<!-- <text selectable="true" v-html="`<h2 style='color:red'>文章内容</h2>`"></text> -->
			<text class="markdown-body" selectable="true" v-html="detailData.htmlContent"></text>
			<!-- #endif -->
		</view>
		
		<!-- 热门评论 -->
		<view class="footer">
			<view class="comment">
				<view class="footer-header">热门评论</view>
				<view class="comment-item row" 
					v-for="(item, index) in commentList" :key="index"
				>
					<image :src="item.userImage || '/static/logo.png'"></image>
					<view class="comment-right">
						<view class="info space-between center">
							<text>{{item.nickName}}</text>
							<text>{{$util.dateFormat(item.createDate)}}</text>
						</view>
						<text class="content">{{item.content}}</text>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 评论区 -->
		<view class="bottom center" @touchmove.stop.prevent="()=>{}">
			<textarea v-model="content" :disabled="disabled" :focus="focus" @click="clickComment"
				class="textarea" placeholder="有何高见,展开讲讲……" />
			<button :disabled="disabled || !content.trim()" @click="addComment"
				class="btn" size="mini">提交</button>
		</view>
		
		<!-- 分享 -->
		<share ref="share" :shareData="{title: detailData.title, mainImage: detailData.imageUrl}"></share>
	</view>
</template>

<script>
	import api from '@/api/article.js'
	
	export default {
		data() {
			return {
				id: null, //文章id
				detailData: {}, // 详情数据
				commentList: [], // 评论列表
				disabled: true, //默认禁用评论框
				focus: false, //默认不获取焦点
				content: '', // 评论内容
			}
		},
		
		onLoad(option) {
			this.id = option.id
			
			this.getDetails()
			this.loadCommentList()
		},
		
		onNavigationBarButtonTap(e) {
			// 点击导航栏分享按钮，针对APP端
			if(e.type === 'share') {
				this.$refs.share.showHandler()
			}
		},
		
		// 微信小程序分享
		onShareAppMessage() {
			return {
				title: this.detailData.title,
				path: this.$util.routePath()
			}
		},
		
		methods: {
			// 查询文章详情
			async getDetails() {
				const {data} = await api.getArticleById(this.id)
				console.log('data', data)
				// 将标题设置到导航标题上
				uni.setNavigationBarTitle({
					title: data.title
				})
				
				//处理图片，在h5和小程序太大了
				data.htmlContent = data.htmlContent
					.replace(/\<img/gi, '<img style="width:100%;height:auto"')
				this.detailData = data
			},
			
			// 查询文章评论列表
			async loadCommentList() {
				const {data} = await api.getArticleCommentById(this.id)
				this.commentList = data
			},
			
			// 点击评论框
			clickComment() {
				console.log("我被点击了评论框")
				// 如果不禁用说明已经之前判断过已经登录了，不用再往下执行
				if(!this.disabled){
					return
				}
				
				// 1.判断是否登录，
				const isLogin = this.$util.isLogin()
				if(isLogin) {
					// 已经登录，让评论可输入
					this.disabled = false
					this.$nextTick(() => { // 要使用箭头函数
						this.focus = true // 获取焦点
					})
				}
			},
			
			// 新增评论
			async addComment() {
				const content = this.content.trim()
				console.log('content', content)
				if(!content) return
				
				uni.showLoading({title: '提交中', mask: true })
				
				const data = {content, articleId: this.id}
				const res = await api.addArticleComment(data)
				uni.hideLoading()
				
				if(res.code === 20000) {
					// 重新查询评论列表
					this.loadCommentList()
					this.$util.msg('评论成功', {icon: 'success'})
					// 清除评论框内容
					this.content = ''
				}else {
					this.$util.msg('评论失败，请重试')
				}
			}
		}
	}
</script>

<style lang="scss">
	@import url('@/common/css/github-markdown.css');
	@import url('@/common/css/github-min.css');
	
	.tag-list {
		// 一行排列不下，换行
		flex-wrap: wrap;
		padding: 10rpx 25rpx;
		font-size: 14px;
		background-color: #ffffff;
		.tag-view {
			margin-top: 15rpx;
			margin-right: 20rpx;
		}
	}
    
	.content-main {
		padding: 25rpx;
		.title {
			font-size: 45rpx;
			line-height: 55rpx;
			font-weight: bold;
		}
		.info {
			display: flex;
			align-items: center;
			margin: 30rpx 0;
			.author {
				font-size: 30rpx;
				color: #303133;
				image {
					width: 45rpx;
					height: 45rpx;
					border-radius: 100%;
					margin-right: 10rpx;
				}
			}
			&>text {
				margin-left: 10rpx;
				font-size: 25rpx;
				color: #999;
			}
		}
	}

	.footer {
		background-color: #F1F1F1;
		padding-top: 10rpx;
		/* 标题 */
		.footer-header{
			font-size: 30rpx;
			color: #303133;
			font-weight: bold;
			padding: 25rpx;
			&:before{
				content: '';
				width: 0;
				height: 40rpx;
				margin-right: 25rpx;
				border-left: 6rpx solid $mxg-color-primary;
			}
		}
	}
	
	/* 评论 */
	.comment {
		background-color: #FFFFFF;
		margin-top: 10rpx;
		// 最下方有评论按钮,
		padding-bottom: 120rpx;
		.comment-item {
			padding: 20rpx 25rpx;
			image{
				width: 50rpx;
				height: 50rpx;
				border-radius: 50rpx;
				margin-right: 20rpx;
			}
			
			.comment-right{
				width: calc(100% - 80rpx);
				font-size: 25rpx;
				color: $mxg-text-color-grey;
				.content{
					font-size: 30rpx;
					color: $mxg-text-color-black;
					margin: 10rpx 0;
				}
			}
		}
	}
	
	/* 底部 */
	.bottom {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		white-space: nowrap;// 不换行
		padding: 20rpx;
		background-color: #FFFFFF;
		border-top: $wyk-underline;
		.textarea {
			font-size: 30rpx;
			padding: 15rpx 20rpx;
			width: 100%;
			height: 70rpx;
			background-color: #F8F9FB;
			border-radius: 30rpx;
		}
		.btn {
			padding: 0 20rpx;
			margin-left: 15rpx;
		}
	}
</style>
