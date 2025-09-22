<template>
	<view>
		<!-- 所属标签 -->
		<view class="tag-list row" >
			<uni-tag v-for="(item, index) in data.labelList" :key="index"
				:text="item.name" class="tag-view" type="primary" size="small" :circle="true" :inverted="true" />
		</view>
		
		<!-- 问题详情 -->
		<view class="content-main">
			<text class="title">{{data.title}}</text>
			<view class="info">
				<view class="author center">
					<image :src="data.userImage || '/static/logo.png'"></image>
					<text>{{data.nickName}}</text>
				</view>
				<text> · {{$util.dateFormat(data.updateDate)}}</text>
			</view>
			
			<!-- 文章内容 -->
			<!-- #ifdef MP -->
			<!-- nodes 是html代码字符串 -->
			<!-- <rich-text class="markdown-body" selectable="true" nodes="<h2 style='color:red'>文章内容</h2>"></rich-text> -->
			<rich-text class="markdown-body" selectable="true" :nodes="data.htmlContent"></rich-text>
			<!-- #endif -->
			<!-- #ifndef MP -->
			<!-- <text class="markdown-body" selectable="true" v-html="`<h2 style='color:red'>文章内容</h2>`"></text> -->
			<text class="markdown-body" selectable="true" v-html="data.htmlContent"></text>
			<!-- #endif -->
		</view>
		
		<!-- 回答 -->
		<view class="footer">
			<view class="comment">
				<view class="footer-header">{{data.reply}}个回答</view>
				<view class="comment-item row" 
					v-for="(item, index) in replyList" :key="index"
				>
					<image :src="item.userImage || '/static/logo.png'"></image>
					<view class="comment-right">
						<view class="info space-between center">
							<text>{{item.nickName}}</text>
							<text> {{$util.dateFormat(item.createDate)}}</text>
						</view>
						<!-- <text class="content">{{item.htmlContent}}</text> -->
						<!-- #ifdef MP -->
						<rich-text class="markdown-body content" selectable="true" :nodes="item.htmlContent"></rich-text>
						<!-- #endif -->
						<!-- #ifndef MP -->
						<text class="markdown-body content" selectable="true" v-html="item.htmlContent"></text>
						<!-- #endif -->
					</view>
				</view>
			</view>
		</view>
		
		<!-- 底部按钮：关注和评论按钮 -->
		<view class="question-option row">
			<!-- 0 未关注，1已关注   -->
			<text v-if="data.star" @click="starQuestionHandler" class="one grey">已关注问题</text>
			<text v-else @click="starQuestionHandler" class="one iconfont icon-jiaguanzhu">关注问题</text>
			<text @click="showAnswerHandler" class="one iconfont icon-edit">回答问题</text>
		</view>
		
		<!-- 回答问题输入框 -->
		<view v-if="showAnswer" class="answer-box" @touchmove.stop.prevent="()=>{}">
			<view class="title center" @touchend.prevent="()=>{}">
				<view class="one">
					<text @touchend.prevent="showAnswerHandler" class="iconfont icon-close"></text>
				</view>
				<text class="one">回答问题</text>
				<button @touchend.prevent="addReply" :disabled="!content" class="btn" type="primary" size="mini">提交</button>
			</view>
			<textarea v-model="content" maxlength="200" :focus="focus" 
				class="textarea" placeholder="有何高见,展开讲讲……" />
		</view>
		
		<!-- 分享 -->
		<share ref="share" :shareData="{title: data.title}"></share>
	</view>
</template>

<script>
	import api from '@/api/question.js'
	
	export default {
		data() {
			return {
				id: null,
				data: {}, //问题数据
				replyList: [] ,// 回答列表
				showAnswer: false, //显示隐藏回答框
				content: '', //回答内容
				focus: true,
			}
		},
		
		onLoad(option) {
			this.id = option.id
			
			this.getQuestion()
			this.loadReplyList()
		},
		
		onNavigationBarButtonTap(e) {
			if(e.type === 'share') {
				this.$refs.share.showHandler()
			}
		},
		
		onShareAppMessage() {
			return {
				title: this.data.title,
				path: this.$util.routePath()
			}
		},
		
		methods: {
			// 问题详情
			async getQuestion() {
				const {data} = await api.getQuestionById(this.id)
				//处理图片，在h5和小程序太大了
				data.htmlContent = data.htmlContent
					.replace(/\<img/gi, '<img style="width:100%;height:auto"')
				this.data = data
			},
			
			//回答列表
			async loadReplyList() {
				const {data} = await api.getReplyById(this.id)
				this.replyList = data
			},
			
			// 点击回答问题按钮触发 
			showAnswerHandler(){
				//判断是否登录，未登录进入登录页
				const isLogin = this.$util.isLogin()
				if(isLogin) this.showAnswer = !this.showAnswer 
			},
			
			// 新增回答信息
			async addReply() {
				const content = this.content.trim()
				if(!content) return
				
				this.focus = false
				uni.showLoading({
					title: '提交中',
					mask: true
				})
				
				const data = {
					questionId: this.id,
					mdContent: content,
					htmlContent: content,
				}
				const res = await api.addReply(data)
				uni.hideLoading()
				
				if(res.code === 20000) {
					this.showAnswer = false // 隐藏弹窗
					// 重新查询问答列表
					this.loadReplyList()
					this.$util.msg('回答成功', {icon: 'success'})
					this.content = ''
				}else {
					this.$util.msg('回答失败，请重试')
				}
			},
			
			//关注问题
			async starQuestionHandler() {
				uni.showLoading()
				const res = await api.starQuestion(this.id)
				uni.hideLoading()
				if(res.code === 20000) {
					this.data.star = !this.data.star
				}else {
					this.$util.msg('关注失败')
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
	
	
	.question-option {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		text-align: center;
		border-top: $wyk-underline;
		background-color: $mxg-color-grey;
		text {
			color: $mxg-text-color-blue;
			font-size: 30rpx;
			font-weight: bold;
			line-height: 90rpx;
			&:first-child {
				border-right: $wyk-underline;
			}
		}
		.grey {
			color: $mxg-text-color-grey;
		}
	}
	
	/* 底部 */
	.answer-box {
		z-index: 100;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 20rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx 20rpx 0 0;
		box-shadow: 0 0 5px $mxg-text-color-grey;
		.title {
			font-size: 35rpx;
			font-weight: bold;
			padding: 20rpx 0;
		}
		.iconfont {
			 padding: 20rpx;
			color: $mxg-color-primary;
		}
		.btn {
			padding: 0 20rpx;
			margin-left: 15rpx;
		}
		.textarea {
			height: 350rpx;
			font-size: 30rpx;
			padding: 15rpx 20rpx;
			width: 100%;
			background-color: #F8F9FB;
		}
	}

</style>
