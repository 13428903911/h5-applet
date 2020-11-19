//引用Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//实例store对象
const store = new Vuex.Store({
	state: {
	  userInfo:{},//用户数据
	  detailId:"",
	  estimateMomty:[]//预计月薪数据
	 },
	
	 
	mutations: {
		detail(state,data){
		 state.detailId = data
		},
		// 登录
		login(state,user){
		
			state.userInfo = user;
			// state.userInfo.token = user.data
			// state.userInfo.userName = user.user_id
			// let auth = JSON.parse(JSON.stringify(user))
			uni.setStorage({key:'userinfo',data:user});
		},
		//退出
		clear(state){
			state.userInfo = '';
			uni.removeStorage({key:'userinfo',
			success:function(res){
				uni.reLaunch({
					url:'/pages/login/login'
				})
			}
			});
		}
	}
})

//导出store对象
export default store