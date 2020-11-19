<template>
	<view>
		<Adminheader></Adminheader>
		<Settings></Settings>
		<view class="box">
			<view class="title">
				<h2>实名认证</h2>
				<span v-if="userObj.id">已认证</span>
				<span v-else>未认证</span>
			</view>
			<el-form :model="ruleForm" ref="ruleForm" label-width="100%" class="demo-ruleForm" :rules="rules">
				<el-form-item  prop="username" class="nameInput" >
					<p class="name">姓名</p>
					<p class="name_text">认证通过后不可修改</p>
					<el-input placeholder="请输入身份证姓名" v-model="ruleForm.username" v-if="userObj.id" readonly></el-input>
					<el-input placeholder="请输入身份证姓名" v-model="ruleForm.username" v-else></el-input>
				</el-form-item >
				<el-form-item  prop="id_card" class="nameInput" >
					<p class="name">身份证号码</p>
					<p class="name_text">认证通过后不可修改</p>
					<el-input placeholder="请输入身份证号码" v-model="ruleForm.id_card" v-if="userObj.id" readonly></el-input>
					<el-input placeholder="请输入身份证号码" v-model="ruleForm.id_card" v-else></el-input>
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
			return{
				imgUrl:'',
				
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
				          { min: 2, max: 4, message: '长度在 2 到 5 个字符', trigger: 'blur' }
				        ],
				        id_card: [
				          { required: true, message: '身份证号码不能为空', trigger: 'blur' },
						   { min: 18, max: 18, message: '长度是18位', trigger: 'blur' }
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
		onLoad(option) {
			this.userObj = JSON.parse(option.userData)
			console.log(this.userObj)
			if(this.userObj.id){
				this.ruleForm = this.userObj
			}
		},
		methods:{
			submitForm(formName) {
			     this.$refs[formName].validate((valid) => {
			             if (valid) {
			             this.$http.post('/public/index.php/api/User/saveAuth',this.ruleForm).then(res => {
			             						this.ruleForm = ''
			             	wx.navigateTo({url: '../setting_verified/setting_verified'})
			             })
			             } else {
			               return false;
			             }
			           });
					  
			   
			         },
			bank(){//跳转银行卡图片
				wx.navigateTo({
					url: '/seting_bank/seting_bank'
				})
			}
		},
		components:{
			Settings,
			Adminheader
		}
	}
</script>

<style lang="less" scoped>
	.box{
		.title{
			display: flex;
			justify-content: space-between;
			margin-top:50px;
			h2{
				font-size: 16px;
				font-weight: bold;
			}
			span{
				margin: 4px 0 0 10px;
				line-height: 24px;
				 color: #9ca6ae;
				 padding-right: 110px;
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

</style>
