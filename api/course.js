import request from "@/common/js/request";

export default {
	// 查询分类与标签接口
	getCategoryList() {
		return request({
			url: '/article/api/category/label/list',
		})
	},
	// 获取指定位置的广告信息
	getAdvertList(position = 1) {
		return request({
			url: `/article/api/advert/show/${position}`, //反单引号
		})
	},
	// 热门/上新/免费/付费课程数据
	getList(query, current = 1, size = 20) {
		return request({
			url: "/course/api/course/search",
			method: "POST",
			data: {
				...query,
				current,
				size
			}
		})
	},
	// 通过课程id查询基本信息
	getCourseById(id) {
		return request({
			url: `/course/api/course/${id}`,
			method: 'GET'
		})
	},
	// 通过课程id查询章节列表数据
	getChapterSectionList(id) {
		return request({
			url: `/course/api/chapter/section/list/${id}`,
			method: 'GET'
		})
	},
	// 通过课程id查询评论列表数据
	getCourseCommentList(id) {
		return request({
			url: `/course/api/comment/list/${id}`,
			method: 'GET'
		})
	},
	// 通过课程id查询套餐搭配数据
	getCourseGroupList(id) {
		return request({
			url: `/course/api/group/list/${id}`,
			method: 'GET'
		})
	},
	// 查询课程是否已购买
	getCourseIsBuy(courseId) {
		return request({
			url: `/course/course/is-buy/${courseId}`,
			method: 'GET'
		})
	},
	// 通过课程id获取已经购买课程视频列表
	getCourseBuyList(id) {
		return request({
			url: `/course/course/buy/list/${id}`,
			method: 'GET'
		})
	},
}