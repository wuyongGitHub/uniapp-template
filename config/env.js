// h5端主机名域名前缀
let HOST_H5 = 'https://www.mengxuegu.com/#/'

if (process.env.NODE_ENV === 'development') {
	HOST_H5 = 'https://static-3f6cc99f-e041-4662-9069-5c1175816bf6.bspapp.com/#/'
} else {
	console.log('生产环境')
}
export {
	HOST_H5
}