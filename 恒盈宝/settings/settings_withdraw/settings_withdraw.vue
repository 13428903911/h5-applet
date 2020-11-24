<template>
	<view>
		<Adminheader></Adminheader>
		<view class="funds-withdraw w1060 container">
			<view class="box">
				<view class="box-hd"><h2 class="title">提现</h2></view>
				<view class="box-bd">
					<!-- <view class="notice w520 mcenter cl">
						<span class="fl">账号未认证，请先完成认证后再进行提现操作</span> 
						<a @click="lijirenzheng" class="fr">立即认证<i class="icon iconfont iconarrow-right-copy"></i></a>
						<view style="clear: both;"></view>
					</view> -->
					<form class="form-wrap w520 mcenter">
						<view class="form-group">
							<view class="label">
								<label>提现金额</label> 
								<p>每天仅可提现一次，提现仅限未被冻结部分资金，单次提现金额不低于1.00元；每月最多提现金额不超过98850.00元。</p>
							</view>
							<view class="form-group">
								<el-input placeholder="请输入提现金额" v-model="formData.money"></el-input>
							</view>
						</view>
						<view class="form-group">
							<view class="label"><label>收款人</label></view> 
							<el-input v-model="formData.payee" readonly></el-input>
						</view>
						<view class="form-group">
							<view class="label"><label>收款人身份证号</label></view> 
							<el-input v-model="formData.id_card" readonly></el-input>
						</view>
						<view class="form-group">
							<view class="label"><label>收款银行账号</label> <p>请填写以上收款人名下的银行账号，账户错误将导致提现失败</p></view> 
							<el-input placeholder="请填写银行账号" class="ipt-text" v-model="formData.account_number"></el-input>
							<a @click="chakan" class="btn-text btn-bank">查看支持收款的银行列表</a> 
						</view>
						<view class="form-group">
							<view class="label"><label>开户支行</label></view>
							<el-input placeholder="请输入开户支行" class="ipt-text" v-model="formData.account_bank"></el-input>
						</view> 
						<el-button class="btn" type="primary" @tap='reqCash'>申请提现</el-button>
					</form>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Adminheader from '../../admin/admin_header/admin_header'
	export default {
		data() {
			return {
				formData:{
					user_id:this.$store.state.userInfo.user_id,
					money:"",
					payee:'',
					id_card:'',
					account_bank:'',
					account_number:''
				}
				
			}
		},
		mounted() {
			 uni.getStorage({key:'userVerify',success:(res) => {
				 this.formData.payee = res.data.username
				 this.formData.id_card = res.data.id_card
			 }});
		},
		methods: {
			lijirenzheng(){
				wx.navigateTo({url:'/settings/seting_Certification/seting_Certification'})
			},
			chakan(){
				wx.navigateTo({
					url: '/settings/seting_bank/seting_bank'
				})
			},
			reqCash(){
				// wx.navigateTo({url: '/settings/settings_jyzd/settings_jyzd'})
				this.$http.post('/public/index.php/api/User/saveWithDrawal',this.formData).then(res => {
					if(res.data.code == 1){
						uni.showToast({icon: 'none',title: '提交申请成功！'});
						// this.formData=''
						// console.log(res)
						// wx.navigateTo({url: '/settings/settings_jyzd/settings_jyzd'})
					}else{
						this.$message.error("提交申请失败");
					}
					
				}) 
			}
			
		},
		components:{
			Adminheader,
		},
		created() {
			
		}
	}
</script>

<style scoped lang="scss">
.container {
    margin-left: auto;
    margin-right: auto;
    padding: 20px 15px;
    box-sizing: border-box;
	line-height: 24px;
}
.form-wrap .form-group .content.disabled, .form-wrap .form-group .content.disabled .ipt-text, .form-wrap .form-group .content .ipt-disabled {
    background: #f6f8f9;
}
.box {
    margin: 0 -15px;
    padding: 0px 15px;
	background: #fff;
	.box-hd {
	    display: -ms-flexbox;
	    display: flex;
	    -ms-flex-pack: justify;
	    justify-content: space-between;
	    -ms-flex-align: end;
	    align-items: flex-end;
	    line-height: 26px;
		.title {
		    font-size: 16px;
			font-weight: 700;
		}
	}
	.box-bd {
	    margin-top: 10px;
		.notice {
		    margin-bottom: 20px;
		    padding: 10px 20px;
		    line-height: 24px;
		    background: #ffeeed;
		    border-radius: 2px;
		    color: #ff5853;
			.fl {
			    float: left;
			}
			a {
			    color: #ff5853;
				.icon {
				    font-size: 12px;
				}
			}
			.fr {
			    float: right;
			}
		}
	}
	.form-wrap{
		.form-group {
		    margin-top: 20px;
			.label label {
			    display: block;
			    font-weight: 700;
			}
			.content {
			    position: relative;
			    margin-top: 10px;
			    border: 1px solid #9ca6ae;
			    box-sizing: border-box;
			    border-radius: 2px;
				.ipt-text {
				    width: 100%;
				    height: 48px;
				    padding: 12px 20px;
				    line-height: 24px;
				    border: none;
				    box-sizing: border-box;
				}
			}
			.content.has-rt {
			    display: table;
			    width: 100%;
				.ipt-rt {
				    position: static;
				    display: table-cell;
				    width: 1px;
				    white-space: nowrap;
				    vertical-align: middle;
					padding: 0 20px;
					line-height: 48px;
				}
			}
		}
	}
}
.btn-text {
    display: inline-block;
    text-align: center;
    color: #008bf7;
    cursor: pointer;
    line-height: 20px;
}
.form-wrap .form-group-ft{
    margin-top: 20px;
}
.btn {
	width: 100%;
	height: 50px;
   margin-top:30px;
  
}
</style>
