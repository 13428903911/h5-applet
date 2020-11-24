<template>
	<view class="register">
		<view class="images">
			<a href="/"><image src="../../static/images/logo.png" mode=""></image></a>
		</view>
		<view class="text">
			<h2>注册即刻灵活用工</h2>
		</view>
		<view class="">
			<el-form ref="form" :model="form" :rules="rules">
				<el-form-item class="form-po" prop="username">
				  <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-form-item class="form-po" prop="mobile">
				  <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
				</el-form-item>
				<el-form-item prop="code" class="form-po">
				  <el-input placeholder="请输入验证码" v-model="form.code">
					<el-button style="margin-left: 10px;" slot="append" @click="sendMessage" :disabled="btnDisabled">{{MessageBtn}}</el-button>
				  </el-input>
				  </el-form-item>
				  <el-form-item prop="password">
					<el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
				  </el-form-item>
				  <el-checkbox v-model="checked">我已阅读并同意《****用户服务协议》</el-checkbox>
				  <el-form-item>
					<el-button class="form-dl" style="width:100%;margin-top: 15px;" type="primary" @tap="submitForm('form')">注册</el-button>
				  </el-form-item>
			</el-form>
		</view>
		<view class="other cl">
			<!-- <span class="btn-text fl">海外用户注册入口</span> -->
			<span class="fr">已有账号？<a @click="zuce">直接登录 →</a></span>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {//注册参数
				  username: "",
				  password: "",
				  email: "",
				  mobile:"",
				  code:"",
				  event:'register'
				},
				
				  rules: {
				          username: [
				            { required: true, message: '用户名不能为空', trigger: 'blur' },
				          ],
				          mobile: [
				            { required: true, message: '手机号不能为空', trigger: 'blur' },
							{ min: 11, max: 11, message: '手机号错误', trigger: 'blur' }
				          ],
				          code: [
				            { required: true, message: '验证码不能为空', trigger: 'blur' }
				          ],
				          password: [
				            { required: true, message: '密码不能为空', trigger: 'blur' }
				          ]
				         },
				onfocus: false,
				checked: false,
				CardCode: "",
				ClntId: "",
				total: 60,
				btnDisabled: false,
				MessageBtn: "获取验证码"
			}
		},
		methods: {
			zuce(){
				wx.navigateTo({
					url:'/pages/login/login'
				})
			},
			//用户注册
			submitForm(formName){
				
				const that = this;
				 this.$refs[formName].validate(valid => {
					  if (valid && this.checked) {
						  this.$http.post('/public/index.php/api/User/register',this.form).then(res => {
							  
							  console.log(res)
							  if(res.data.code == 1){
								  uni.reLaunch({url: '../login/login'})
								  uni.showToast({icon: 'none',title: '注册成功'});
								  this.form = ''
								 
							  }
						  	  
						  })
					  }else{
						  this.$message.error("请填写完注册信息！");
						  return false;
					  }
				 })
			},
			// 发送验证码，倒计时按钮
			sendMessage() {
			  const that = this;
			  if (that.form.mobile == "") {
			    that.$message.error("请先输入手机号！");
			    return false;
			  }
			  console.log(this.form)
			 this.$http.post('/public/index.php/api/Sms/send',this.form).then(response => {
			      if (response.data.code == 1) {
			        // 请求成功倒计时60秒，期间禁止2次点击
			        that.MessageBtn = this.total + "s后重新发送";
			        that.btnDisabled = true;
			        let clock = window.setInterval(() => {
			          that.total--;
			          that.MessageBtn = that.total + "s后重新发送";
			          if (that.total < 10) {
			            that.MessageBtn = "0" + that.total + "秒后重新发送";
			          } else {
			            that.MessageBtn = that.total + "秒后重新发送";
			          }
			          if (that.total == 0) {
			            that.MessageBtn = "重新发送";
			            that.total = 60;
			            that.btnDisabled = false;
			            window.clearInterval(clock);
			          }
			        }, 1000);
			        that.$message.success("发送成功");
			      } else {
			        that.$message.error(response.data.msg);
			      }
			    });
			},
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .el-input__inner {
	    border-radius: 0px;
	    height: 45px;
	    line-height: 45px;
	    border: 1px solid #9ca6ae;
	}
	/deep/ .el-input-group__append{
		background-color: #FFFFFF;
		border: none;
	}
	/deep/ .el-button{
		background: #409EFF;
		color: #FFFFFF;
	}
	.register{
		font-size:28rpx;
		padding: 0rpx 40rpx;
		padding-bottom: 20px;
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
					width: 37%;
					display: inline-block;		
					text-align: center;
					position: absolute;
					 height: 2.4rem;
					 line-height: 40px;
					 top: 40%;
					left: 50%;
					margin-left: 12%;
					color: #008bf7;
					border-left: 1px solid #9ca6ae;
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
			.form-box{
				margin-top: 10px;
				checkbox{
					transform: scale(0.6);
				}
				a {
				    text-decoration: none;
				    color: #008bf7;
				}
			}
			.hr {
			    margin: 20px 0;
				border-top: 1px solid #edf1f4;
			} 
		}
		.btn-text {
		    display: inline-block;
		    text-align: center;
		    color: #008bf7;
		    cursor: pointer;
		    line-height: 20px;
		}
		.fl {
		    float: left;
		}
		.fr {
		    float: right;
			a {
			    text-decoration: none;
			    color: #008bf7;
			}
		}
	}
</style>
