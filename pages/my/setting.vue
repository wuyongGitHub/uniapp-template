<template>
	<view>
		<!-- 绑定的事件是对应setting-list-bar.js中的event值 -->
		<wyk-list :list="list" @setWifiPlay="setWifiPlay" @setWifiDownload="setWifiDownload" @setAutoPlay="setAutoPlay"
			@clearStorage="clearStorage"></wyk-list>
	</view>
</template>
<script>
	import list from '@/config/setting-list-bar.js'
	export default {
		data() {
			return {
				list: list() //注意调用的是方法，不要少了（）
			}
		},
		methods: {
			// 清除缓存
			clearStorage(obj) {
				console.log('清除缓存', obj)
				// 提示
				uni.showModal({
					title: '您确定清除应用缓存吗?',
					content: '(该操作不会删除缓存课程)',
					success: (res) => { //箭头函数
						if (res.confirm) {
							// 清空
							uni.clearStorage()
							// 清空赋值 0KB
							this.$set(obj, 'text', '0KB')
							this.$util.msg('清除成功')
						}
					}
				});
			},
			// 允许非WIFI网络播放
			setWifiPlay(obj) {
				this.saveStorage(obj, 'wifi-play')
			},
			// 允许非WIFI网络缓存
			setWifiDownload(obj) {
				this.saveStorage(obj, 'wifi-download')
			},
			// 视频自动连续播放
			setAutoPlay(obj) {
				this.saveStorage(obj, 'auto-play')
			},
			// 保存到本地
			saveStorage(obj, key) {
				const checked = !obj.checked
				this.$set(obj, 'checked', checked)
				// 保存到本地
				uni.setStorage({
					key,
					data: checked
				})
				console.log('修改后状态值', checked)
			}
		}
	}
</script>
<style lang="scss">
	page {
		background-color: $mxg-color-grey;
	}
</style>