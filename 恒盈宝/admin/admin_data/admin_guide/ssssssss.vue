<template>
	<view>
		<Adminheader></Adminheader>
		<view class="resume-work w700 fixed-ft work-exper container">
				<el-form class="form-wrap" :model="project" ref="project" :rules="rules">
					<view class="form-group-hd"><h2 class="title">您的项目经验</h2></view>
					<view class="form-group"><view class="subtitle"><label>项目经验 1</label></view></view>
					<view style="margin-top: 10px;"><p>项目名称不能为空</p></view>
					<view class="form-group">
						<view class="label"><label>项目名称</label></view> 
						<el-form-item class="content" prop="project_name">
							<el-input type="text" name="tag0jobTitle" placeholder="项目名称" class="" data-vv-scope="__global__" 
							aria-required="true" aria-invalid="false" v-model="project.project_name"></el-input>
						</el-form-item> 
					</view>
					
					<view class="form-group">
						<view class="subtitle"><label>项目介绍</label></view> 
						<span> 1. 项目的目标 <br></span>
						<span> 2. 您对项目的贡献 <br></span>
						<span> 3. 项目最终成果及原因分析 <br></span>
						<el-form-item class="content suggest-wrap" prop="introduce">
							<textarea name="workExperience" maxlength="1000" id="textarea" class="ipt-area" v-model="project.introduce" @input = "descInput" />
						</el-form-item> 
					</view>
					
					<view class="form-group">
						<view class="label"><label style="margin-bottom: 10px;">开始时间</label></view>
						 <view class="block">
						    <el-date-picker
						      v-model="project.start_time"
							  value-format=" yyyy-MM-dd" format="yyyy-MM-dd"
						      type="date"
						      placeholder="请选择开始时间">
						    </el-date-picker>
						  </view>
					</view>
					<view class="form-group">
						<view class="label"><label style="margin-bottom: 10px;">结束时间</label></view>
						 <view class="block">
						    <el-date-picker
						      v-model="project.end_time"
							  value-format=" yyyy-MM-dd" format="yyyy-MM-dd"
						      type="date"
						      placeholder="请选择结束时间">
						    </el-date-picker>
						  </view>
					</view>
					<view class="form-group form-group-del">
						<view class="label">
							<label>项目链接 <span style="color: rgb(156, 166, 174); font-size: 14px;"></span></label>
						</view> 
						<view class="content">
							<input type="text" name="tag0projectLink" placeholder="请输入项目链接，如github.com/react" class="ipt-text"
							 data-vv-scope="__global__" aria-required="false" aria-invalid="false" v-model="project.project_link">
						</view> 
						<p class="tips-error" style="display: none;"></p>
					</view>
					<view class="form-group">
						<view class="label">
							<label>项目附件<span class="remark"></span></label> 
							<p style="margin-top: 10px;">上传的项目附件每个不超过 5M ，最多上传 5 个附件。并确保您对添加到此项目的附件拥有版权。<br> 
							默认第一张图为项目封面图，封面图的最佳尺寸为：680*510px</p>
						</view> 
						<view style="margin-top: 18px;">
							<el-upload
							  class="upload-demo"
							  :accept="'image/*'"
							  :headers="{token:$store.state.userInfo.token}"
							   :on-success="upload"
							    :file-list="fileList"
							   :on-error="handleError"
							   :before-upload="handleBeforeUpload"
							  drag
							  action="http://81.69.199.157:82/public/index.php/api/Common/upload"
							  multiple>
							  
							  <div class="el-upload__text"><em>点击上传</em></div>
							</el-upload>
						</view>
					</view>
					<div class="form-group form-group-del"><div style="margin-top: 10px;"><span class="fr" style="color: rgb(0, 139, 247);"><i class="icon iconfont" style="color: rgb(0, 139, 247);margin-right: 5px;">&#xe60c;</i>&nbsp;删除此项目</span></div></div>
					<div class="flrs"></div>
				</el-form>
				<view class="other"><span class="btn-text"></span></view>
				<view align="center" class="other" style="margin-top: 20px; border-top: 1px solid rgb(237, 241, 244);">
					<span class="btn-text" style="margin-top: 16px;">
						<i class="icon iconfont">&#xe76e;</i>&nbsp;再添加一段工作经历
					</span>
				</view>
				<view class="ft-wrap"><view class="w700 mcenter cl"><span @click="fanhui()" class="to-head fl-li-co">
					<i style="font-size: 24px;margin-right: 5px;vertical-align: bottom;" class="icon iconfont">&#xe60b;</i>&nbsp;返回
				            </span> <span class="btn btn-blue fr" @tap="submit('project')">保 存</span> <!----></view></view>
			</view>
	</view>
</template>

<script>
	import Adminheader from '../../admin_header/admin_header.vue'
	export default {
		data() {
			return {
				remnant:0,
				 fileList: [],//显示图片地址
				 imgObj:{//图片地址
					   name:'',
					   url:''
				   },
				reqData:[],
				user_id: this.$store.state.userInfo.user_id,
				project:{
					user_id: this.$store.state.userInfo.user_id,
					project_name:'',
					introduce:'',
					start_time:'',
					end_time:'',
					project_link:'',
					file_id:'',
					file:"",
					create_time:parseInt(new Date().getTime()/1000),
					update_time:parseInt(new Date().getTime()/1000)
				},
				rules: {
				        project_name: [
				          { required: true, message: '项目名称不能为空', trigger: 'blur' },
				        ],
				        introduce: [
				          { required: true, message: '项目介绍不能为空', trigger: 'blur' }
				        ]
				
				      }
			}
		},
		methods: {  
			upload(res, file) {//上传成功钩子
			     uni.showToast({icon: 'none',title: '上传成功'});
				 this.project.file_id = res.data.id
				  this.project.file = res.data.fullurl
			},
			handleError() {//上传失败钩子
			  uni.showToast({icon: 'none',title: '上传失败，请重新上传'});
			},
			handleBeforeUpload(file) {//上传前的钩子
				 const isLt2M = file.size / 1024 / 1024 < 2;
				  if (!isLt2M) {
				     uni.showToast({icon: 'none',title:"上传图片大小不能超过 2MB!"});
				  }
				  return isLt2M
			},
			
			descInput(e){
				this.remnant = e.detail.value.length
			 },
			 submit(formName) {//保存
			 this.$refs[formName].validate((valid) => {
			         if (valid) {
			           this.reqData.push(this.project)
					 this.$http.post('/public/index.php/api/Position/saveProject',{
						 user_id:this.user_id,
						 project: JSON.stringify(this.reqData)
					 }).then(res => {
						 if(res.data.code == 1) {
							 uni.showToast({icon: 'none',title: '保存成功'});
							 uni.reLaunch({url: '/admin/admin_data/admin_data'})
						 }
					 })
			         } else {
			           return false;
			         }
			       });
			 
			 },
			 fanhui(){
			 	uni.reLaunch({url: '/admin/admin_data/admin_data'})
			 },
			 undergoQuery() {//查询
		
					this.$http.post('/public/index.php/api/Position/getProject',{user_id:this.$store.state.userInfo.user_id}).then(res => {
							if(res.data.data.length<0){}
							      else{
							       this.project = res.data.data[0]
							       this.imgObj.name = res.data.data[0].file.slice(-9)
							       this.imgObj.url = res.data.data[0].file
							       this.fileList.push(this.imgObj)
							      }
					})
				
			 }
		},
		onLoad() {
			
				this.undergoQuery()
			
				
			
		},
		components:{
			Adminheader
		}
	}
</script>

<style lang="scss" scoped>
/deep/ .el-upload--picture{margin-left:-8px;}
/deep/ .el-upload-dragger{
	width: 320px;
	height: 50px!important;
	text-aligh:center;
	.el-upload__text{
		line-height: 50px;
	}}
/deep/ .uni-input-wrapper{
	   height: 30px;
}
/deep/ .ipt-text{
	overflow: initial;
	
}
/deep/ .uni-input-input{
	border: 1px solid #9ca6ae;
	width: 99%;
	text-indent: 1em;
}
/deep/ .uni-input-placeholder{
	text-indent: 1em;
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
			.title {
			    font-size: 24px;
			    line-height: 32px;
				font-weight: 700;
			}
		}
		.form-group {
		    margin-top: 20px;
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
