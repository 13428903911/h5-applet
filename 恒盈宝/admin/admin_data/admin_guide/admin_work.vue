<template>
	<view>
		<Adminheader></Adminheader>
		<view class="resume-work w700 fixed-ft work-exper container">
			<view class="form-group-hd"><h2 class="title">您的工作经历</h2></view>
			<el-form class="form-wrap" :model="dynamicValidateForm" ref="dynamicValidateForm.experience" :rules="rules">
				<el-form-item class="form-group"
				  v-for="(experience,index) in dynamicValidateForm.experience"
				  :label="'工作经历' + (index+1)"
				  :key="experience.key"
				  :prop="'experience.' + index + '.value'" 
				>
				<view style="margin-top: 40px;"><p>请从最近的工作经历开始填写</p></view>
				<view class="form-group">
					<view class="label"><label>职位头衔</label></view> 
					<el-form-item class="content" prop="job_title">
						<el-input type="text" name="tag0jobTitle" placeholder="请输入职位头衔" class="ipt-text" 
						data-vv-scope="__global__" aria-required="true" aria-invalid="false" v-model="experience.job_title"></el-input>
					</el-form-item> 
						<p class="tips-error" style="display: none;"></p>
				</view>
				<view class="form-group">
					<view class="label">
						<label>公司名称<span class="remark">（将作为您所属的公司展示）</span></label>
					</view> 
					<el-form-item class="content" prop="company">
						<el-input type="text" name="tag0corporateName" placeholder="请输入公司名称" class="ipt-text" 
						data-vv-scope="__global__" aria-required="true" aria-invalid="false" v-model="experience.company"></el-input>
					</el-form-item> 
						<p class="tips-error" style="display: none;"></p>
				</view>
				<view class="form-group">
					<view class="label"><label style="margin-bottom: 10px;">入职时间</label></view>
					 <el-form-item class="block" prop="entry_time">
					    <el-date-picker
					      v-model="experience.entry_time"
						   value-format=" yyyy-MM-dd" format="yyyy-MM-dd"
					      type="date"
					      placeholder="入职时间">
					    </el-date-picker>
					  </el-form-item>
				</view>
				<view class="form-group">
					<view class="label"><label style="margin-bottom: 10px;">离职时间</label></view>
					 <el-form-item class="block" prop="leave_time">
					    <el-date-picker
					      v-model="experience.leave_time"
						   value-format=" yyyy-MM-dd" format="yyyy-MM-dd"
					      type="date"
					      placeholder="离职时间">
					    </el-date-picker>
					  </el-form-item>
				</view>
				<view class="form-group">
					<view class="label"><label style="margin-bottom: 10px;">工作内容及业绩</label></view>
					<el-form-item class="content" prop="job_content">
						<textarea @input = "descInput" name="tag0jobContent" placeholder="请填写您的工作内容及工作业绩" 
						class="ipt-area" data-vv-scope="__global__" aria-required="true" aria-invalid="false" v-model="experience.job_content">
						</textarea>
					</el-form-item>
				</view>
			
				 <view class="form-group form-group-del" @click.prevent="removeDomain(experience)">
				 	<span class="fr" style="color: rgb(0, 139, 247);">
				 		<i class="icon iconfont" style="color: rgb(0, 110, 247);margin-right: 5px;">&#xe60c;</i>&nbsp;删除此项目
				 	</span>
				 </view>
			  </el-form-item>
			</el-form>
			<view align="center" class="other" style="margin-top: 20px; border-top: 1px solid rgb(237, 241, 244);">
				<span class="btn-text" style="margin-top: 16px;" @click="addDomain">
					<i class="icon iconfont">&#xe76e;</i>&nbsp;再添加一段工作经历
				</span>
			</view>
			<view class="ft-wrap"><view class="w700 mcenter cl"><span @click="fanhui()" class="to-head fl-li-co">
				<i style="font-size: 24px;margin-right: 5px;vertical-align: bottom;" class="icon iconfont">&#xe60b;</i>&nbsp;返回
			            </span> <span class="btn btn-blue fr" @click="submit('dynamicValidateForm.experience')">保 存</span> <!----></view></view>
		</view>
	</view>
</template>

<script>
	import Adminheader from '../../admin_header/admin_header.vue'
	export default {
		data() {
			return {
				arr:[],
				endId:'',
				 remnant:0,
				//保存的参数
						user_id:this.$store.state.userInfo.user_id,
						dynamicValidateForm:{
							experience:[
								{
									user_id:this.$store.state.userInfo.user_id,
									job_title:'',
									company:'',
									entry_time:'',
									leave_time:'',
									job_content:'',
									create_time: parseInt(new Date().getTime()/1000),
									update_time: parseInt(new Date().getTime()/1000)
								}
							]
						},
					rules: {
						// job_title: [
						//   { required: true, message: '职位头衔不能为空', trigger: 'blur' },
						// ],
						// company: [
						//   { required: true, message: '公司名称不能为空', trigger: 'blur' },
						// ],
						// job_content: [
						//   { required: true, message: '工作内容及业绩不能为空', trigger: 'blur' },
						// ],
					}
				}	
		},
		methods: {
			
			descInput(e){
				this.remnant = e.detail.value.length
			 },
			 // 保存
			 submit(formName) {
				 this.$refs[formName].validate((valid) => {
				         if (valid) {
							 this.$http.post('/public/index.php/api/Position/saveExperience',{
							 	user_id:this.user_id,
							 	experience: JSON.stringify(this.dynamicValidateForm.experience)
							 }).then(res => {
								 console.log(res)
							 	if(res.data.code === 1){
							 		this.experience=''
							 		uni.showToast({icon: 'none',title: '保存成功'})
							 		 uni.reLaunch({url: '/admin/admin_data/admin_data'})
							 	}
							 	
							 })

				         } else {
				           return false;
				         }
				       });
				
			 },
			 resetForm(formName) {
				this.$refs[formName].resetFields();
			  },
			  removeDomain(item) {
				var index = this.dynamicValidateForm.experience.indexOf(item)
				if (index !== -1) {
				  this.dynamicValidateForm.experience.splice(index, 1)
				}
			  },
			addDomain() {
				  this.dynamicValidateForm.experience.push({
					id:this.endId,
					user_id:this.$store.state.userInfo.user_id,
					job_title:'',
					company:'',
					entry_time:'',
					leave_time:'',
					job_content:'',
					create_time: parseInt(new Date().getTime()/1000),
					update_time: parseInt(new Date().getTime()/1000),
				  });
				},
			 fanhui(){
			 	 uni.reLaunch({url: '/admin/admin_data/admin_data'})
			 },
			 jowUndergoQuery() {//查询
	
					this.$http.post('/public/index.php/api/Position/getExperience',{user_id:this.$store.state.userInfo.user_id}).then(res => {
						if(res.data.data.length<=0){
						      }
						      else{
								let resdata = res.data.data
						       this.dynamicValidateForm.experience = resdata
							   let objdata = resdata[resdata.length-1]  //让数组最后一个长度-1
							    this.endId = objdata.id+1//数组的id加1
						       }
								
					}) 	
				
			 },
		},
		mounted() {
			this.jowUndergoQuery()
		},
		components:{
			Adminheader
		}
	}
</script>

<style lang="scss" scoped>
.title {
	font-size: 24px;
	line-height: 32px;
	font-weight: 700;
}
/deep/ .el-form-item__label{
	font-weight: 700;
	font-family: PingFangSC-Semibold;
	font-size: 20px;
	color: #092235;
	letter-spacing: 0;
}
.container {
    margin-left: auto;
    margin-right: auto;
	padding: 20px 15px;
    box-sizing: border-box;
	position: relative;
	z-index: 111;
	background: #FFFFFF;
	.form-wrap{
		.form-group-hd {
		    margin-bottom: 32px;
			
		}
		.form-group {
		    margin-top: 10px;
			.subtitle {
			    margin-bottom: 12px;
				label {
				    font-weight: 700;
				    margin-top: 32px;
				    margin-bottom: 4px;
				    font-family: PingFangSC-Semibold;
				    font-size: 20px;
				    color: #092235;
				    letter-spacing: 0;
				}
			}
			.label label {
			    display: block;
			    font-weight: 700;
				.remark {
				    margin-left: 10px;
				    color: #9ca6ae;
				    font-weight: 400;
				}
			}
			.content {
			    position: relative;
			    margin-top: 10px;
			   
			    box-sizing: border-box;
			    border-radius: 2px;
				
				.ipt-area {
				    display: block;
				    width: 100%;
				    height: 152px;
				    padding: 12px 20px;
				    line-height: 24px;
				    border: none;
				    box-sizing: border-box;
				    resize: vertical;
					border: 1px solid #9ca6ae;
				}
			}
			.tips-error {
			    margin-top: 5px;
			    line-height: 20px;
			    color: #ff5853;
			}
		}
		.text-span {
		    position: absolute;
		    right: 18px;
		    top: 75%;
		    color: #969896;
		}
	}
}
.container.fixed-ft {
    padding-bottom: 100px;
}
.fr {
    float: right;
}
.btn-text {
    display: inline-block;
    text-align: center;
    color: #008bf7;
    cursor: pointer;
    line-height: 20px;
}
.ft-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
	padding: 10px 15px;
    background: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.05);
    box-sizing: border-box;
    z-index: 99;
}
.fl-li-co {
    color: #008bf7;
    line-height: 45px;
    float: left;
	padding-left: 2%;
}
.btn {
    display: inline-block;
	width: 120px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: none;
    border-radius: 2px;
    color: #fff;
    cursor: pointer;
    box-sizing: border-box;
}
.btn.btn-blue {
    background: #008bf7;
    color: #fff;
}
.fr {
    float: right;
}
.other {
    margin-top: 15px;
}
.btn-text {
    display: inline-block;
    text-align: center;
    color: #008bf7;
    cursor: pointer;
    line-height: 20px;
}
</style>
