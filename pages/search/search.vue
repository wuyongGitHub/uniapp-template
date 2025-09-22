<template>
	<view>
		<!-- #ifdef MP -->
		<uni-search-bar class="uni-mt-10" ref="searchBar" radius="100" :focus="true" placeholder="搜索你想要的内容"
			clearButton="auto" @cancel="navBack()" cancelButton="always" @confirm="doSearch"></uni-search-bar>
		<!-- #endif -->
		<!-- 搜索关键字历史记录 -->
		<key-word @doSearch="doSearch" v-if="!searched"></key-word>
		<!-- 标签导航组件 -->
		<tab-bar v-model="tabIndex" v-if="searched"></tab-bar>
		<!-- 下拉筛选 -->
		<!-- <down-bar :params="params" v-if="searched"></down-bar> -->
		<block v-if="searched">
			<course-list :params="params" :content="content" ref="mescrollItem0" :i="0" :index="tabIndex">
			</course-list>
			<article-list :params="params" :content="content" ref="mescrollItem1" :i="1" :index="tabIndex">
			</article-list>
			<question-list :params="params" :content="content" ref="mescrollItem2" :i="2" :index="tabIndex">
			</question-list>
		</block>
	</view>
</template>

<script>
	import MescrollMoreMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mixins/mescroll-more.js"
	import keyWord from './components/keyword.vue';
	import tabBar from '@/components/common/tab-bar.vue';
	import questionList from './components/question-list.vue';
	import courseList from './components/course-list.vue'
	import articleList from './components/article-list.vue'
	// 当前页面实例
	// #ifdef APP-PLUS
	let currentWebview = null;
	// #endif
	export default {
		mixins: [MescrollMoreMixin], // 2. 使用mixin
		components: {
			keyWord,
			tabBar,
			questionList,
			courseList,
			articleList,
		},
		onLoad(option) {
			// #ifdef APP-PLUS
			// 获取页面实例
			currentWebview = this.$scope.$getAppWebview();
			// #endif

			if (option.params) {
				// 如果有参数，不自动获取焦点
				this.params = JSON.parse(option.params)
				// 开始搜索 
				this.doSearch()
			} else {

				// #ifdef APP-PLUS
				// 获取焦点
				currentWebview.setTitleNViewSearchInputFocus(true)
				// #endif

			}
		},
		// 监听原生标题栏搜索输入框输入内容变化事件	
		onNavigationBarSearchInputChanged(e) {
			this.content = e.text
		},
		// 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。
		onNavigationBarSearchInputConfirmed(e) {

			// 失去焦点,收起小键盘
			// #ifdef APP-PLUS
			currentWebview.setTitleNViewSearchInputFocus(false)
			// #endif

			this.doSearch()
		},
		// 监听取消按钮
		onNavigationBarButtonTap(e) {
			// 后退
			this.navBack()
		},
		data() {
			return {
				params: null, // 来的页面带的参数
				content: null, //搜索内容
				searched: false, //是否搜索过，搜索过一次隐藏keyword
				tabIndex: 0, //当前所在下标
			}
		},
		methods: {
			doSearch(obj) {
				this.content = obj && obj.value ? obj.value : this.content
				console.log(this.content)

				//  #ifdef MP
				// 修改小程序端口输入框内容
				this.$refs.searchBar.searchVal = this.content;
				// #endif
				// 是否搜索过
				this.searched = true;

				// 将当前搜索关键字保存到本地缓存
				this.storageHsitory()
				this.$nextTick(() => {
					// 节流, 避免过快多次请求
					this.$util.throttle(() => {
						// 调用对应子组件方法搜索
						this.$refs[`mescrollItem${this.tabIndex}`].search()
					})
				})
				// uni.showLoading()
			},
			storageHsitory() {
				// 搜索历史本地保存的key
				const key = 'history_list'
				// 获取当前本地已经存在的搜索记录
				uni.getStorage({
					key,
					success: (res) => {
						// 第n次搜索
						// 查询到的原来历史关键字数组中，判断是否存在当前搜索内容关键字，不存在则添加到数组第一个元素，存在则不添加
						this.content && res.data.indexOf(this.content) < 0 && res.data.unshift(this.content)
						//保存到本地缓存中
						uni.setStorageSync(key, res.data)
						console.log("历史关键字", res)
					},
					fail: (err) => {
						// 如果本地缓存没有key值，失败，则进行第一次保存
						this.content && uni.setStorageSync(key, [this.content])
						console.log("获取历史关键之失败", err)
					}
				})
			}
		}
	}
</script>

<style>

</style>