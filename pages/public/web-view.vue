<template>
	<view>
		<web-view v-if="isOpen(url)" :src="url"></web-view>
		<view class="tip column">
			<text>如需浏览，请长按网址复制后使用浏览器访问</text>
			<text selectable>{{url}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				url:null
			}
		},
		onLoad(options) {
			this.url = options.url;
		},
		methods:{
			isOpen(){
				if(this.url){
					// 只能访问孟学古的网址
					return this.url.indexOf('mengxuegu.com') !==-1
				}
			}
		}
	}
</script>
<style lang="scss">
	.tip{
		position: relative;
		top: 200rpx;
		width: 300rpx;
		margin: 0 auto;
		text-align: center;
		word-wrap: break-word;
		font-size: 30rpx;
		text:first-child{
			font-size: 40rpx;
			font-weight: bold;
			margin-bottom: 30rpx;
		}
	}
</style>