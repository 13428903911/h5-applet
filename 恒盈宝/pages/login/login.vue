<template>
	<view class="container">
		<view class="images">
			<a><image src="../../static/images/logo.png" mode=""></image></a>
		</view>
		<view class="text">
			<h2>登录即刻灵活用工</h2>
		</view>
		<view>
			<form>
				<view class="form-group">
					<view class="form_button">
						<button :class="{'active' : 0 == currents}" @click="clickTab(0)" class="fl">短信验证码登录</button>
						<button :class="{'active' : 1 == currents}" @click="clickTab(1)" class="fl">账号密码登录</button>
					</view>
					<view class="dxdl" :class="{'actives' : 1== current}" @click="clickTab(0)">
						
						<view class="form-po">
							<text>手机号</text>
							<input @blur = "fun()" v-model="mobile" maxlength="11" type="text" placeholder="输入手机号" />
						</view>
						<view class="form-po">
								<text>短信验证码</text>
								<input style="width: 60%;" v-model="captcha" maxlength="6" type="text" placeholder="输入短信验证码" />
							<view class="form-yz" @tap="handleCode">
								{{codeBtn}}
							</view>
							<view class="form-dl">
								<button @click="dl">登录</button>
							</view>
						</view>
					</view>
					<view class="mmdl" :class="{'actives' : 0 == current}" @click="clickTab(1)">
						<view class="form-po">
							<text>账号</text>
							<input maxlength="11" type="text" v-model="nameValue" placeholder="输入手机号或邮箱"/>
						</view>
						<view class="form-po">
							<view class="form-po-mm">
								<text class="left">密码</text>
								<!-- <text class="right"><a tabindex="-1" href="javascript:;">忘记密码</a></text> -->
							</view>
							<input type="password" placeholder="输入密码" v-model="passwordValue"/>
							<view class="form-dl">
								<button  @tap="btn">登录</button>
							</view>
						</view>
					</view>
					
				</view>
			</form>
		</view>
		<view class="hr"></view>
		<view class="other">没有账号？<a @click = "register()">立即注册 →</a></view>
	</view>
</template>

<script>
	 import request from "@/store/api.js"
	export default {
		data() {
			return {
				current:0,
				currents:0,
				nameValue:'',
				passwordValue:'',
				codeBtn: '获取验证码',
				mobile: '',
				event: 'mobilelogin',
				isClick2: true,
				captcha:""
			}
		},
		mounted(){
			
		},
		methods: {
			fun(){
				var reg = /^1[3578]{1}[0-9]{9}$/;
				if(this.mobile==""){
					uni.showToast({
						title: '手机号不能为空',
						duration: 1000,
						icon: 'none'
					});
				}else if(reg.test(this.mobile)==false){
					uni.showToast({
						title: '手机号不正确',
						duration: 1000,
						icon: 'none'
					});
				}
			},
			// 获取验证码
			handleCode() {
				var that = this;
				let count = 60;
				//验证手机格式
				var reg = /^1[3578]{1}[0-9]{9}$/;
				if(this.mobile==""){
					uni.showToast({
						title: '手机号不能为空',
						duration: 1000,
						icon: 'none'
					});
				}else if(reg.test(this.mobile)==false){
					uni.showToast({
						title: '手机号不正确',
						duration: 1000,
						icon: 'none'
					});
				} else if (that.isClick2) {
					that.isClick2 = false;
					let timer = setInterval(function() {
						count--;
						that.codeBtn = count + '后重新发送';
						if (count == 0) {
							that.isClick2 = true;
							clearInterval(timer)
							that.codeBtn = '重新获取';
						}
					}, 1000)
					that.$http.post('/public/index.php/api/Sms/send',{
						mobile: that.mobile,
						event:that.event,
					}).then(function(res) {
						if (res.data.code == 1) {	
							uni.showToast({
								title: '已发送，请注意查收',
								duration: 1000,
								icon: 'none'
							});
						}
					})
				}
			},
			//提交登录
			dl(){//短信登录
				var that = this;
				that.$http.post('public/index.php/api/User/mobilelogin',{
					mobile: that.mobile,
					captcha:that.captcha,
				}).then(function(res) {
					// let resData =res.data
					if (res.data.code == 1) {
						that.$store.commit('login',res.data.data.userinfo)
					    uni.navigateTo({
					    	url:'/admin/admin_data/admin_data'
					    });
					} else {
					    uni.showToast({icon: 'none',title: '手机号或验证码错误'})
					}
				})
			},
			
			register(){
				wx.navigateTo({
					url:'/pages/register/register'
				})
			},
			  clickTab(cur){
				this.current = cur
				this.currents = cur
			},
		 btn(){//账号密码登录
			 if(this.nameValue.length <= 0) {
				 uni.showToast({icon:'none',title:'请输入用户名'});
			 }
			 if(this.passwordValue.length <= 0) {uni.showToast({icon:'none',title:'请输入密码'})};
			let opts={
				url:'/public/index.php/api/User/login',
				method:'post'
			};
			let param={
				account: this.nameValue,
				password: this.passwordValue
			};
			this.$http.post('/public/index.php/api/User/login',{
				account: this.nameValue,
				password: this.passwordValue
			}).then(res => {
				let resData =res.data
				if(resData.code == 1){
					uni.showToast({icon: 'none',title: '登录成功'});
					this.$store.commit('login',resData.data.userinfo)
					// uni.setStorage({key:'userinfo',data:resData.data.userinfo});
					uni.reLaunch({url:'/admin/admin_data/admin_data'})
				}else{
					uni.showToast({icon: 'none',title: '用户名或密码错误'})
				}
			})
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	font-size:28rpx;
	padding: 0rpx 40rpx;
	    padding-bottom: 20px;
	a {
	    text-decoration: none;
	    color: #008bf7;
	}
	.images image{
		width: 240rpx;
		height: 60rpx;
		margin-bottom: 100rpx;
	}
	.text{
		margin-bottom: 64rpx;
		h2{
			font-size: 48rpx;
			line-height: 64rpx;
		}
	}
	.form-group{
		margin-top: 40rpx;
		.form_button{
			height: 100rpx;
			border: none;
			border-radius: 4rpx;
			box-sizing: border-box;
			line-height: 100rpx;
			text-align: center;
			color: #9ca6ae;
			button{
				width: 49.5%;
				height: 100rpx;
				cursor: pointer;
				color: #9ca6ae;
			}
			.fl{
				float: left;font-size: 28rpx;
				line-height: 100rpx;
			}
		}
		.form_button .active{
			color: #092235;
			font-weight: 700;
			background: #fff;
		}
		.actives{
			display: none;
		}
		.form-po{
			margin-top: 40rpx;
			position: relative;
			text{
				display: block;
				font-weight: 700;
				margin-bottom: 20rpx;
			}
			input{
				width: 100%;
				height: 92rpx;
				padding: 24rpx 40rpx;
				line-height: 48rpx;
				border: none;
				box-sizing: border-box;
				border: 1rpx solid #9ca6ae;
			}
			.uni-input-placeholder{
				font-size: 28rpx;
			}
			.form-yz{
				   width: 33%;
				   display: inline-block;		
				   text-align: center;
				   position: absolute;
				    height: 42px;
				    line-height: 42px;
				    top: 21%;
				   left: 50%;
				   margin-left: 16%;
				  background: #409EFF;
				  color: #FFFFFF;
				  border-radius: 4px;
			}
			.form-po-mm .left{
				float: left;
			}
			.form-po-mm .right{
				float: right;
				font-weight: normal;
			}
		}
		.form-dl{
			margin-top: 20px;
			button{
				display: inline-block;
				width: 100%;
				height: 50px;
				line-height: 50px;
				text-align: center;
				border: none;
				border-radius: 2px;
				color: #fff;
				cursor: pointer;
				box-sizing: border-box;
				background: #008bf7;
			}
		}
	}
	.hr {
	    margin: 20px 0;
		border-top: 1px solid #edf1f4;
	}
	.other{
		text-align: center;
	}
}
	
</style>