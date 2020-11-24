<template>
	<view>
		<Adminheader></Adminheader>
		<Settings></Settings>
			<!-- 基本信息 -->
			<view class="main_box">
				<view class="userinfo">
					<h2>基本资料</h2>
					<view class="user_text">
						<view class="user_text_title">请使用您正脸的个人头像：</view>
						<ul>
							<li>• 提供您正脸的个人头像，可以让需求方对您有个大致印象；</li>
							<li>• 不符合要求头像的用户有可能会受到限制，如投递职位，匹配优质人才等；</li>
							<li>• 建议尺寸：500*500像素及以上，长宽比为 1:1 的正方形照片。</li>
						</ul>
						<view class="user_img">
						<el-upload
							v-model = "imageUrl"
						  class="avatar-uploader"
						  action="http://81.69.199.157:82/public/index.php/api/Common/upload"
						  :show-file-list="false"
						  :headers="{token:$store.state.userInfo.token}"
						  :on-success="handleAvatarSuccess">
						  <img v-if="imageUrl" :src="imageUrl" class="avatar">
						  <img src="/static/images/touxiang5.png" v-else/>
						</el-upload>
						</view>
					</view>
					<!-- form表单 -->		
					<el-form :model="ruleForm" ref="ruleForm" label-width="100%" class="demo-ruleForm" :rules="rules">
						<el-form-item  prop="username" class="nameInput" >
							<p class="name">姓名</p>
							<p>真实姓名或英文名，请勿填写社交昵称</p>
							<el-input placeholder="请输入姓名" v-model="ruleForm.username"></el-input>
						</el-form-item >
							
							<view>
							         <p class="name">所在省份</p>
							          <el-select style="margin-top: 10px;" name="" v-model="ruleForm.province" @change = "click_chenge($event)">
											<el-option :value="item.province_id"
												:label="item.province" v-for="(item,index) in provinceList" :key="item.province">
											</el-option>
									 </el-select>
									  <p class="name" style = "margin-top: 20px;">所在城市</p>
							         <el-select style="margin-top: 10px;" name="" v-model="ruleForm.city" value-key="city">
							            <el-option  :value="item.city" v-for="(item,index) in cityList" :label="item.city" :key="item.city_id">
											
										</el-option>
							          </el-select>
							</view>
						  <el-button type="primary" style="width:100%;margin-top:40px" @click="submitForm('ruleForm')">保存</el-button>
					</el-form>
				</view>
			</view>
	</view>
</template>

<script>
	import Settings from '../settings.vue'
	import Adminheader from '../../admin/admin_header/admin_header'
	import VDistpicker from 'v-distpicker'
	export default {
		data(){
			return{
				 imageUrl: '',
				active:false,
				ruleForm:{
					user_id:this.$store.state.userInfo.user_id,
					username:'',
					province:'',
					city:'',
					avatar:''
				},
				   // 省市县的信息
				  provinceList: [], //获取的一级数组数据
				  cityList: [], //获取的二级数组数据
				  rules: {
				          username: [
				            { required: true, message: '请输入名字', trigger: 'blur' },
				            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
				          ],
				          province: [
				            { required: true, message: '省份不能为空', trigger: 'blur' }
				          ],
				          city: [
				            { type: 'date', required: true, message: '城市不能为空', trigger: 'blur' }
				          ]
				        },
			}
		},
		methods:{
			
			handleAvatarSuccess(res, file){//头像上传成功
			console.log(res)
				 this.imageUrl = URL.createObjectURL(file.raw);
				 this.ruleForm.avatar = res.data.fullurl
				
			
			},
			   submitForm(formName) {//保存
					// window.location.reload();
			        this.$refs[formName].validate((valid) => {
			            if (valid) {
			               this.$http.post('/public/index.php/api/User/saveUser',this.ruleForm).then(res => {
			               	uni.showToast({icon: 'none',title: '保存成功'})
			               	uni.navigateTo({
			               		url:'/admin/admin_index/admin_index'
			               	})
							// this.ruleForm = ''
							// this.imageUrl = ''
			               })
			            } else {return false;}
			        });
			
			    },
			   provincechange(){//查询省份
				 this.$http.post('/public/index.php/api/Index/getProvince').then(res => {
				       this.provinceList=res.data.data
				 })
			 },
			 click_chenge(id){//省份发生变化
			 
			 this.provinceList.forEach((item) => {
				 if(item.province_id == id){
					this.ruleForm.province = item.province
				 }
			 })
				this.$http.post('/public/index.php/api/Index/getCity',{province_id:id}).then(res => {
					this.cityList = res.data.data
				})
			 },
			 userMessageQuery() {//查询
				 this.$http.post('/public/index.php/api/User/index',{user_id:this.$store.state.userInfo.user_id}).then(res => {
					 if(res.data.data.length<0){}
					       else{
							   this.ruleForm = res.data.data[0]
							   this.imageUrl =  res.data.data[0].avatar
						   }
				 })
			 }
		},
		components:{
			Settings,
			Adminheader,
			// provincecity
			VDistpicker 
		},
		mounted() {
			this.provincechange()
			this.userMessageQuery()
		}
	}
</script>

<style lang="less" scoped>

		.admin_nbr:hover{
			color:#008bf7;
		}
		.main_box{
			margin-top:60px;
			.userinfo{
			padding: 20px;
			h2{
				font-size: 16px;
				font-weight: 700;
			}
			.user_text{
				line-height: 24px;
				margin-top: 20px;
				.user_text_title{
					font-weight: bold;
				}
				.user_img{
					margin-top:20px;
					img{
						width:200px;
						border-radius: 50% !important;
					}					
				}
				.headPortrait{
					padding-left: 50px;
					color: #008bf7;
				}
			}
			/deep/ .el-form-item__content{margin-left: 0 !important;line-height: 25px}
			.nameInput{
				margin-top: 25px;
				line-height: 24px;
				
				.name{
					font-weight: bold;
				}
				.el-input{
					margin-top:5px;
				}
			}
		}
		}
</style>
