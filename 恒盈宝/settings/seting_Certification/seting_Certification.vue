<template>
	<view>
		<Adminheader></Adminheader>
		<Settings></Settings>
		<view class="box">
			<view class="title">
				<h2>实名认证</h2>
				<view v-if="Authentication" class="activ">已认证</view>
				<span v-else>未认证</span>
			</view>
			<el-form :model="ruleForm" ref="ruleForm" label-width="100%" class="demo-ruleForm" :rules="rules">
				<el-form-item  prop="username" class="nameInput" >
					<p class="name">姓名</p>
					<p class="name_text">认证通过后不可修改</p>
					<el-input name="ww" placeholder="请输入身份证姓名" v-model="ruleForm.username" v-if="Authentication" readonly></el-input>
					<el-input name="ww" placeholder="请输入身份证姓名" v-model="ruleForm.username" v-else></el-input>
				</el-form-item >
				<el-form-item  prop="id_card" class="nameInput" >
					<p class="name">身份证号码</p>
					<p class="name_text">认证通过后不可修改</p>
					<el-input maxlength="18" placeholder="请输入身份证号码" v-model="ruleForm.id_card" v-if="Authentication" readonly></el-input>
					<el-input maxlength="18" placeholder="请输入身份证号码" v-model="ruleForm.id_card" v-else></el-input>
				</el-form-item >
				
				<el-form-item  prop="card_no" class="nameInput" >
					<p class="name">银行卡号</p>
					<el-input placeholder="请输入银行卡号" v-model="ruleForm.card_no"></el-input>
					<p @click="bank" style="color: #007AFF;">查看支持收款的银行列表</p>
				</el-form-item >
					
				<el-form-item  prop="bank_name" class="nameInput" >
					<p class="name">开户银行</p>
					<el-input placeholder="请输入银行卡号" v-model="ruleForm.bank_name"></el-input>
				</el-form-item >
				  <el-button type="primary" style="width:100%;margin-top:40px" @click="submitForm('ruleForm')">提交认证</el-button>
			</el-form>
		</view>
	</view>
</template>

<script>
	import Settings from '../settings.vue'
	import Adminheader from '../../admin/admin_header/admin_header'
	export default {
		data(){
			var validateCard = (rule, value, callback) => {
			     if (value === "") {
			       callback();
			       return;
			     } else {           
			       if (!this.validateIdCard(value)) {
			         callback(new Error("请输入正确的身份证号码"));
			       } else {
			         callback();
			       }
			     }
				}
				
			var validateName = (rule, value, callback) => {
				    let reg=/^[\u2E80-\u9FFF]+$/;//Unicode编码中的汉字范围
				    if (value && value.length > 0) {
				        if(!reg.test(value)){
				            callback([new Error('姓名输入不合法')]);
				        }else{
				            callback();
				        }
				    }else if(value.length == 0){
				        callback();
				    } else {
				        callback(new Error('姓名不能为空'));
				    }
				}
			return{
				imgUrl:'',
				Authentication:false,
				wiathAlter:false,
				ruleForm:{
					user_id:this.$store.state.userInfo.user_id,
					username:'',
					id_card:'',
					card_no:'',
					bank_name:''
				},
				userObj:{},
				rules: {
				        username: [
				          { required: true, message: '姓名不能为空', trigger: 'blur' },
						  { validator: validateName, trigger: "blur" },
				          { min: 2, max: 4, message: '长度在 2 到 6 个字符', trigger: 'blur' }
				        ],
				        id_card: [
				          { required: true, message: '身份证号码不能为空', trigger: 'blur' },
						  { validator: validateCard, trigger: "blur" }
				        ],
				        card_no: [
				          { required: true, message: '银行卡号不能为空', trigger: 'blur' }
						],
						bank_name: [
						  { required: true, message: '开户银行不能位空', trigger: 'blur' }
						]
				      }
			}
			 

		},
		onLoad() {
			uni.getStorage({key: 'userAuthentication', success:(res) => {
				if(res.data[0].id){
					this.Authentication = true
					this.userObj = res.data[0]
					this.ruleForm.username= this.userObj.username
					this.ruleForm.id_card = this.userObj.id_card
					this.ruleForm.card_no =this.userObj.card_no
					this.ruleForm.bank_name =this.userObj.bank_name
					console.log(this.userObj)
				}
			},
				
			})
			
		},
		watch:{
			ruleForm:{
				handler(){
					this.wiathAlter = true
					console.log(this.wiathAlter)
				},
				deep:true
			}
		},
		methods:{
			submitForm(formName) {
			     this.$refs[formName].validate((valid) => {
			             if (valid) {	
							 if(this.ruleForm.card_no == this.userObj.card_no && this.ruleForm.bank_name == this.userObj.bank_name){
								 uni.showToast({icon: 'none',title: '您没有修改'})
							 }else{
								this.$http.post('/public/index.php/api/User/saveAuth',this.ruleForm).then(res => {
									if(res.data.code == 1){										
										wx.navigateTo({url: '/settings/setting_verified/setting_verified'})    
									}						 
								}) 
							}
			             } else {
			               return false;
			             }
			           });
					  
			   
			         },
			bank(){//跳转银行卡图片
				wx.navigateTo({url: '/settings/seting_bank/seting_bank'})
			},
			validateIdCard(idCard){
			    var flag = false;
			    //15位和18位身份证号码的正则表达式
			    var regIdCard=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
			
			    //如果通过该验证，说明身份证格式正确，但准确性还需计算
			    if(regIdCard.test(idCard)){
			        if(idCard.length==18){
			            var idCardWi=new Array( 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ); //将前17位加权因子保存在数组里
			            var idCardY=new Array( 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
			            var idCardWiSum=0; //用来保存前17位各自乖以加权因子后的总和
			            for(var i=0;i<17;i++){
			                idCardWiSum+=idCard.substring(i,i+1)*idCardWi[i];
			            }
			
			            var idCardMod=idCardWiSum%11;//计算出校验码所在数组的位置
			            var idCardLast=idCard.substring(17);//得到最后一位身份证号码
			
			            //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
			            if(idCardMod==2){
			                if(idCardLast=="X"||idCardLast=="x"){
			                    flag = true;
			                }else{
			                    flag = false;
			                }
			            }else{
			                //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
			                if(idCardLast==idCardY[idCardMod]){
			                    flag = true;
			                }else{
			                    flag = false;
			                }
			            }
			        }else if(idCard.length==15){
			            var id17 = idCard.substring(0,6) + '19' + idCard.substring(6);
			            var parityBit = getParityBit(id17);
			            var tempIdCard =  id17 + parityBit;
			            flag = validateIdCard(tempIdCard);
			        } 
			     }else{
			        flag = false;
			     }
				 
			     return flag;
			}
		},
		components:{
			Settings,
			Adminheader
		},
	}
</script>

<style lang="less" scoped>
	.box{
		.title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top:50px;
			h2{
				font-size: 16px;
				font-weight: bold;
			}
			span{
				 color: #9ca6ae;
				 margin-right: 110px;
			}
		}
		padding:20px;
		/deep/ .el-form-item__content{margin-left: 0 !important;line-height: 25px}
		.nameInput{
			margin-top: 25px;
			line-height: 24px;
			
			.name{
				font-weight: bold;
			}
			.name_text{
				color: #9ca6ae;
			}
			.el-input{
				margin-top:5px;
			}
		}
	}
.activ{
	font-weight: bold;
	padding: 3px 10px;
	border-radius: 3px;
	color: #FFFFFF;
	background: #008BF7!important;
	margin-right: 110px;
	
}
</style>
