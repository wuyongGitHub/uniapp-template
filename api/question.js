import request from '@/common/js/request.js'
export default {
	// 分页条件查询问答列表
	getList(query, current = 1, size = 20) {
		return request({
			url: '/question/api/question/search',
			method: 'POST',
			data: {
				...query,
				current,
				size
			}
		})
	},
	// 分页查询热门问答列表
	getHotList(current = 1, size = 20) {
		return request({
			url: '/question/api/question/hot',
			method: 'POST',
			data: {
				current,
				size
			}
		})
	},
	// 分页查询最新问题列表
	getNewList(current = 1, size = 20) {
		return request({
			url: '/question/api/question/new',
			method: 'POST',
			data: {
				current,
				size
			}
		})
	},
	// 分页查询等待回答列表
	getWaitList(current = 1, size = 20) {
		return request({
			url: '/question/api/question/wait',
			method: 'POST',
			data: {
				current,
				size
			}
		})
	},
	// 通过问题id查询问题详情
	getQuestionById(questionId) {
		return request({
			url: `/question/api/question/${questionId}`,
			method: 'GET'
		})
	},
	// 通过问题id查询问题回答列表
	getReplyById(questionId) {
		return request({
			url: `/question/api/reply/list/${questionId}`,
			method: 'GET'
		})
	},
	// 新增回答
	addReply(data) {
		return request({
			url: `/question/reply`,
			method: 'POST',
			data
		})
	},
	// 关注问题接口
	starQuestion(questionId) {
		return request({
			url: `/question/question/star/${questionId}`,
			method: 'PUT'
		})
	}
}