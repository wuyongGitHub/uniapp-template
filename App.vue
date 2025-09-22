<script>
	export default {
		onLaunch: function() {
			this.initLogin()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			initLogin() {
				const userInfo = uni.getStorageSync('userInfo');
				const accessToken = uni.getStorageSync("mxgEducationToken")
				if (userInfo && accessToken) {
					this.$store.commit('setState', {
						userInfo,
						accessToken
					})
				}
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("@/common/css/common.css");
	/* #ifndef APP-PLUS-NVUE */
	/* 本地icon引入 */
	@import url("~@/static/icon/iconfont.css");
	@import url("~@/static/icon/iconfont-app-icon.css");
	/* #endif */
</style>