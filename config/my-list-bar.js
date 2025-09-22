const rightIcon = 'iconfont icon-right'
export default () => {
	return [ // 二维数组导航
		[{
				title: '我的订单',
				icon: 'mxg-icon mxg-icon-host-color', // 左侧图标
				rightIcon, // 右侧图标
				path: '/pages/order/order', // 目标页面，配置了点击直接跳转
				login: true, // true 登录后才可访问
				/* event: 'setWifiPlay', // 点击触发的事件名
				checked: false // 是否选中 */
			},
			{
				title: '我的余额',
				icon: 'mxg-icon mxg-icon-lock-color',
				rightIcon,
				path: '/pages/order/my-balance',
				login: true
			},
			{
				title: '我的课程',
				icon: 'mxg-icon mxg-icon-warn',
				rightIcon,
				path: '/acticle',
				login: true
			}
		],
		[{
				title: '设置',
				icon: 'mxg-icon mxg-icon-set-color',
				rightIcon,
				path: '/pages/my/setting',
			},
			{
				title: '意见反馈',
				icon: 'mxg-icon mxg-icon-notice-color',
				rightIcon,
				path: '/pages/my/feedback'
			}
		],
		[{
			title: '关于我们',
			icon: 'mxg-icon mxg-icon-model-color',
			rightIcon,
			path: '/pages/my/about'
		}]
	]
}