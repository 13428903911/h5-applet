<template>
	<view>
		<Adminheader></Adminheader>
		<Settings></Settings>
		<view class="page-setting w1060 cl container">
			<view class="main w820 fr">
				<view class="box box-verified">
					<view class="box-hd cl"><h2 class="title fl">实名认证</h2> <span class="st fl">已认证</span></view>
					<view class="box-bd">
						<form class="form-wrap w520" v-for="item in userData">
							<view class="info">
								<dl class="cl"><dt class="fl">账户类型：</dt> <dd>个人账户</dd></dl>
								<dl class="cl"><dt class="fl">姓名：</dt> <dd>{{item.username}}</dd></dl>
								<dl class="cl"><dt class="fl">身份证号：</dt> <dd>{{item.id_card}}</dd></dl>
								<dl class="cl"><dt class="fl">银行卡号：</dt> <dd>{{item.card_no}}</dd></dl>
								<view class="form-group-ft">
									<p class="tips t-red">温馨提示：后续充值和提现，均需通过该账户进行操作。</p> 
									<view class="btn-group"><span class="btn btn-blue" @click="modifiedData(item)" >修改资料</span> <!----></view>
								</view>
							</view>
						</form>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Settings from '../settings.vue'
	import Adminheader from '../../admin/admin_header/admin_header'
	export default {
		data() {
			return {
				userData:[]
			}
		},
		onLoad() {
			this.autonymProve()
		},
		methods: {
			autonymProve() {//查询
				this.$http.post('/public/index.php/api/User/getAuthInfo',{user_id:this.$store.state.userInfo.user_id}).then(res => {
				
						this.userData = res.data.data
					
				})
			},
			modifiedData(item){
				let data = JSON.stringify(item)
				wx.navigateTo({url: '../seting_Certification/seting_Certification?userData='+data})
			},
		},
		components:{
			Settings,
			Adminheader
		}
	}
</script>

<style lang="scss" scoped>
.container {
    margin-left: auto;
    margin-right: auto;
    padding: 20px 15px;
    box-sizing: border-box;
	background: #f6f8f9;
	min-height: 94vh;
}
.page-setting {
    line-height: 24px;
	padding-top: 80px;
	.main {
	    width: 100%;
		.box {
		    margin: 0 -15px;
		    padding: 20px 15px;
			background: #ffffff;
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
				}
				.st {
				    margin: 4px 0 0 10px;
				    line-height: 24px;
				    color: #9ca6ae;
					margin-right: 35%;
				}
				.fl {
				    float: left;
				}
			}
			.box-bd {
			    margin-top: 10px;
				.info {
				    margin-top: 20px;
					dl {
					    margin-top: 10px;
					}
					dt {
					    width: 100px;
					    color: #9ca6ae;
					}
					.fl {
					    float: left;
					}
					.other {
					    margin-top: 20px;
						
					}
					.tips {
					    margin-bottom: 10px;
						margin-top: 20px;
					}
					.t-red {
					    color: #ff5853;
					}
					.btn {
					    display: inline-block;
					    width: 100%;
					    height: 50px;
					    line-height: 50px;
					    text-align: center;
					    border: none;
					    border-radius: 2px;
						font-size: 14px;
					    cursor: pointer;
					    box-sizing: border-box;
					}
					.btn.btn-blue {
					    background: #008bf7;
					    color: #fff;
					}
				}
			}
		}
	}
}
</style>
