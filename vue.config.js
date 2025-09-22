module.exports = {
	devServer: { // 开发环境
		proxy: { // 代理转发
			'/api/qmsapp': {
				target: 'http://192.168.60.38:32751', // 以/api 开头的代理到target指定地址
				pathRewrite: {
					'^/api': '' // 其中请求地址开头的 /api 替换为 ''
				}
			}
		}
	}
}