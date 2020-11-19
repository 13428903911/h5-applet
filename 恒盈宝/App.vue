<script>
export default {
	onLaunch: function() {  
	     uni.getStorage({//获得保存在本地的用户信息  
	        key: 'userinfo', success:(res) => {
	            //获取成功即说明本地有保存用户数据，把res.data继续给state.userInfo。并修改登录状态，由此达到登录状态
				console.log(res.data)
	            this.$store.commit('login',res.data); 
				console.log(this.$store.state.userInfo.token)
				// this.$http.post('/public/index.php/api/User/login',{
				// 	username:res.data.username
				// }).then(res => {
				// 	this.$store.commit('login',res.data)
				// 	uni.setStorage({key:'auth',data:res.data});
				// })
	        }  
	    });  
	}, 
}  

</script>

<style>
@import url("./iconfont/iconfont.css");
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
*{margin: 0;padding: 0;list-style: none;text-decoration: none;font-size: 14px;}
uni-page-head .uni-page-head{
	display: none;
}
</style>
