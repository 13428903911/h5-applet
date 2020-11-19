// import axios from 'axios'
// import { Message, MessageBox } from 'element-ui'

// export const webkit = (option) => {
// 	const http = axios.create({
// 		baseURL:'http://81.69.199.157:82',
// 		headers: {'content-type': 'application/x-www-form-urlencoded'},
// 		timeout:5000,
// 	})
// 	http.interceptors.request.use(req => {
// 		req.headers.Authorization = sessionStorage.getItem("token")
// 		    return req
// 	},
// 	 error => {
// 	    Promise.reject(error)
// 	  })
	  
	  
	 
// 	  http.interceptors.response.use(res => {
// 		    return res
// 	  })
	  
	  
	  
// 	  return http(option)
// }
import uniRequest from 'uni-request';
import store from './index.js';
// uniRequest.defaults.headers.post['Content-Type'] = 'text/html; charset=UTF-8'
uniRequest.defaults.baseURL = "http://81.69.199.157:82";

// uniRequest.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
 // uniRequest.defaults.headers("Access-Control-Allow-Origin", "*")
uniRequest.interceptors.request.use(
	config => {
		let token
		uni.getStorage({key: 'user',success(res) {
				token = res.data.token
				console.log(token)
			}
		})
		// config.headers.authorization = token
		
			// let token = store.state.userInfo.token
			  config.headers['token'] = store.state.userInfo.token
		
		return config;
	},
	error => {
		return Promise.reject(error);
	});
	
	
	// 响应拦截
	uniRequest.interceptors.response.use(function(response) {
		// if (response.data.code == 0) {
		// 	uni.showToast({
		// 		title: '',
		// 		icon: 'none',
		// 		success() {
		// 			uni.reLaunch({
		// 				// url: '/pages/login/login'
		// 			})
		// 			return
		// 		}
		// 	});
		// }
		return response;
	}, function(err) {
		return Promise.reject(err);
	});
	
	export default uniRequest