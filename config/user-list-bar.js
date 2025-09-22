// 导入 store 对象获取当前用户信息
import store from '@/store'
const rightIcon = 'iconfont icon-right' // 右侧图标
export default () => {
	// 放到方法体，不然可能有时获取不到最新用户信息
	const userInfo = store.state.userInfo
	return [ // 二维数组导航
		[{
				title: '头像',
				event: 'chooseImg', // 点击触发的事件名
				src: userInfo.imageUrl || '/static/logo.png', // 右侧图片
				rightIcon, // 右侧图标
			},
			{
				title: '用户名',
				event: 'editUsername',
				text: userInfo.username,
				rightIcon,
			},
			{
				title: '手机号',
				event: 'editMobile',
				text: userInfo.mobile,
				rightIcon,
			}
		],
		[{
				title: '昵称',
				event: 'editName',
				text: userInfo.nickName,
				rightIcon,
			},
			{
				title: '性别',
				event: 'chooseSex',
				text: userInfo.sex ? '女' : '男',
				rightIcon,
			}
		],
	]
}