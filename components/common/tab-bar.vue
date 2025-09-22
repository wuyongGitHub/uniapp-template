<template>
	<view class="tab-bar" @touchmove.stop.prevent="()=>{}">
		<!-- <view class="bar-view center"> -->
		<scroll-view class="noScorll bar-view" scroll-x scroll-with-animation :scroll-left="scrollLeft">
			<view class="bar-item" :style="{width: `${itemWidth}px`}" :class="{current: index === value}"
				v-for="(item, index) in tabs" :key="index"
				@click="changeTab(index)"
				>
				{{item.name}}
			</view>
		</scroll-view>
		<!-- </view> -->
	</view>
</template>

<script>
	// 定时器变量
	let scorllTimer = null 
	
	export default {
		props: {
			value: { // vue 语法糖, v-model双向绑定：1. props声明value, 2. 修改它时触发input事件传递
				type: Number,
				default: 0
			},
			tabs: { // 标签选项数组
				type: Array,
				default: () => [
					{
						id: 1,
						name: '课程'
					},
					{
						id: 2,
						name: '文章'
					},
					{
						id: 3,
						name: '问答'
					}
				]
			}
		},
		
		data() {
			return {
				scrollLeft: 0, // 计算左右移动距离
				windownWidth: uni.getSystemInfoSync().windowWidth ,// 屏幕宽度 px
				itemWidth: uni.upx2px(150) // 150rpx转px
			}
		},
		
		watch: {
			tabs: {
				handler(newVal) {
					// 监听标签选项数组，小于5个，平均分配每个的宽度
					if(newVal && newVal.length<5) {
						this.itemWidth = this.windownWidth/newVal.length
					}
				},
				immediate: true 
			}
		},
		
		
		methods: {
			/* changeTab(index) {
				// console.log('index', index)
				//改变tab, 点击不同的标签，才更新值
				if(this.value != index) {
					//this.value = index
					this.$emit('input', index)
				}
			}, */
			
			//  切换标签选项
			changeTab(index) {
				if(scorllTimer) {
					// 多次切换只执行最后一次
					clearTimeout(scorllTimer)
					scorllTimer = null
				}
				
				// 获取点击的这个距离左侧宽度
				let width = this.itemWidth * (index+1)
				// console.log('width', width)
				// 延迟400ms,以防用户切换太快
				scorllTimer = setTimeout(() => {
					// 点击的这个距离>屏幕1/2（中间）则移动到中间
					if(width - this.itemWidth/2 > this.windownWidth/2) {
						this.scrollLeft = width - this.itemWidth/2 - this.windownWidth/2
					}else {
						this.scrollLeft = 0
					}
					console.log("wobeizhixingle")
					 this.value = index 
					this.$emit('input', index)
				}, 400)
			}
		}
	}
</script>

<style lang="scss">
	.tab-bar {
		width: 100%;
		height: 80rpx;
		background-color: #FFFFFF;
		border-bottom: 1px solid #efeff4;
		.bar-view {
			width: 100%;
			text-align: center;
			/* +++ */
			white-space: nowrap;
			.bar-item {
				/* flex: 1; */
				display: inline-block;
				width: 150rpx;
				
				font-size: 30rpx;
				line-height: 80rpx;
				position: relative;
				&:after {
					position: absolute;
					content: '';
					width: 0;
					height: 0;
					border-bottom: 6rpx solid $mxg-text-color-blue;
					border-radius: 20rpx;
					left: 50%;
					bottom: 6rpx;
					transform: translateX(-50%);
					transition: .3s;
				}
			}
			.current {
				color: $mxg-text-color-blue;
				&:after {
					width: 60rpx;
				}
			}
		}
	}
</style>
