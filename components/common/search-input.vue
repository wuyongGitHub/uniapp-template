<template>
	<view class="search-box">
		<input type="text" class="search-input" placeholder="搜你想要的内容" disabled />
	</view>
</template>

<script>
</script>

<style lang="scss">
	.search-box{
		position: absolute;
		left: 0;
		top: 30rpx;
		z-index: 9999;
		width: 100%;
		.search-input{
			background-color: #F8F8F8;
			height: 70rpx;
			line-height: 40rpx;
			text-align: center;
			border-radius: 30rpx;
			margin: 0 20rpx;
		}
	}
</style>