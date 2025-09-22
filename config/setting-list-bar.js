export default () => {
	return [ // 二维数组导航
		[{
				title: '允许非WIFI网络播放',
				event: 'setWifiPlay', // 点击触发的事件名
				// 是否选中，注意要使用Sync同步获取方法在app和小程序才会生效
				checked: uni.getStorageSync('wifi-play') || false
			}, {
				title: '允许非WIFI网络缓存',
				event: 'setWifiDownload',
				checked: uni.getStorageSync('wifi-download') || false
			},
			{
				title: '视频自动连续播放',
				event: 'setAutoPlay',
				checked: uni.getStorageSync('auto-play') || false
			}
		],
		[{
			title: '清除应用缓存',
			event: 'clearStorage', // 点击触发的事件名
			// 右侧内容
			text: uni.getStorageInfoSync().currentSize < 1024 ?
				uni.getStorageInfoSync().currentSize + 'KB' :
				(uni.getStorageInfoSync().currentSize / 1024).toFixed(2) + 'MB',
		}, ],
	]
}