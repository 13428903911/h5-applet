<template>
	<view>
		<Adminheader></Adminheader>
		<view class="resume-work w700 fixed-ft work-exper container">
			<el-form class="form-wrap" :model="fomeData" ref="fomeData" :rules="rules">
				<view class="form-group-hd"><h2 class="title">添加工作时间</h2></view>
				<view style="margin-top: 10px;color: red;"><p>注意：添加工作时间前，请先告知客户并得到客户的同意</p></view>
				<view class="form-group">
					<view class="label"><label style="margin-bottom: 10px;">选择日期</label></view>
					 <el-form-item class="block" prop="work_date">
					    <el-date-picker
						  v-model="fomeData.work_date"
						  value-format=" yyyy-MM-dd" format="yyyy-MM-dd"
					      type="date"
					      placeholder="请选择开始时间">
					    </el-date-picker>
					  </el-form-item>
				</view>
				<view class="form-group">
					<view class="label"><label>工作时间</label></view> 
					<el-form-item class="content" prop="work_hours">
						<el-input onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" maxlength="4" v-model="fomeData.work_hours" type="text" name="tag0jobTitle" placeholder="请输入工作时间" class="ipt-text" 
						data-vv-scope="__global__" aria-required="true" aria-invalid="false"></el-input>
					</el-form-item> 
				</view>
				<view class="form-group-wrap">
					<view class="form-group form-group-select">
						<view class="label">
							<label>工作设备</label>
						</view> 
						<view class="content" prop="work_device">
							<!-- <select name="tag0degree" class="ipt-select" placeholder="请选择操作设备" v-model="fomeData.work_device">
								<option :value="item.id" :label="item.name" :key="item.id" v-for="item in options"></option> 
							</select> -->
							<template>
							  <el-select v-model="fomeData.work_device" placeholder="请选择">
							    <el-option
							      v-for="item in options"
							      :key="item.value"
							      :label="item.name"
							      :value="item.name">
							    </el-option>
							  </el-select>
							</template>
							</view></view>
				</view>
				<view class="form-group">
					<view class="label"><label style="margin-bottom: 10px;">工作说明</label></view>
					<el-form-item class="content" prop="work_desc">
						<textarea name="tagjoContent" v-model="fomeData.work_desc"
						class="ipt-area" data-vv-scope="__global__" aria-required="true" aria-invalid="false" >
						</textarea>
					</el-form-item>
				</view>
				<view class="form-group">
					<view class="label"><label>说明附件 <span style="margin-left: 10px;color: #606266;">选填，上传文件不超过10M</span></label></view> 
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
			</el-form>
			<view class="ft-wrap">
				<view class="w700 mcenter cl">
			        <span class="btn btn-blue fr" @click="submit('fomeData')">提 交</span> <!---->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Adminheader from '../admin_header/admin_header.vue'
	export default {
		data() {
			return {
				 fileList: [],
				options: [{
							id: 1,
							name: 'Mac'
						},
						{
					   id: 2,
					   name: 'Windows'
					  }, {
					   id: 3,
					   name: 'Android'
					  }],
				fomeData:{
					user_id:this.$store.state.userInfo.user_id,
					apply_id:"",
					work_date:"",
					work_hours:"",
					work_device:"",
					work_desc:"",
					file_id:"",
					file_url:"",
				},
				rules: {
				        work_date: [
				          { required: true, message: '选择日期不能为空', trigger: 'blur' },
				        ],
				        work_hours: [
				          { required: true, message: '工作时间不能为空', trigger: 'blur' }
				        ],
						work_device: [
						  { required: true, message: '工作设备不能为空', trigger: 'blur' }
						],
						work_desc: [
						  { required: true, message: '工作说明不能为空', trigger: 'blur' }
						]
				
				      }
			}
			
		},
		methods: {
			upload(res, file) {//上传成功钩子
			     uni.showToast({icon: 'none',title: '上传成功'});
				 this.fomeData.file_id = res.data.id
				  this.fomeData.file_url = res.data.fullurl
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
			submit(formName) {//保存
				this.$refs[formName].validate((valid) => {
						if (valid) {
						    this.$http.post('/public/index.php/api/Work/addWorkHours',this.fomeData).then(res => {
								if(res.data.code == 1){
									uni.setStorage({key:'jobStatus',data:res.data.code})
									uni.reLaunch({url: '/admin/admin_log/admin_log?apply_id='+this.fomeData.apply_id})
								}
						    	
						    })
						} else {
						  return false;
						}
			      });
				},
				onKeyYHKNameInput(){
					
				}
		},
		onLoad(ids) {
			this.fomeData.apply_id = ids.id
		},
		components:{
			Adminheader
		}
	}
</script>

<style lang="scss" scoped>
/deep/ .el-upload-dragger {
	height: 60px!important;
}
/deep/ .el-upload-dragger .el-upload__text em {
    line-height: 60px;
}
/deep/ .el-upload-dragger{
	width: 17rem;
}
.container {
    margin-left: auto;
    margin-right: auto;
	padding: 20px 20px;
    box-sizing: border-box;
	position: relative;
	z-index: 111;
	background: #FFFFFF;
	.form-wrap{
		.form-group-hd {
		    margin-top: 10px;
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
			}
			.content {
			    position: relative;
			    margin-top: 10px;
			  
			    box-sizing: border-box;
			    border-radius: 2px;
	
				.ipt-select {
				    width: 100%;
				    background: none;
				    border: none;
				    height: 48px;
				    padding: 0 20px;
				    appearance: none;
				    -webkit-appearance: none;
				    margin-right: -36px;
					border: 1px solid #9ca6ae;
					outline: 0;
				}
				.ipt-select.ipt-select-null {
				    color: #9ca6ae;
				}
				.ipt-rt {
				    position: absolute;
				    right: 0;
				    top: 0;
				    height: 100%;
				    padding: 0 20px;
				    line-height: 48px;
					pointer-events: none;
					color: #9ca6ae;
				}
			}
			.tips-error {
			    margin-top: 5px;
			    line-height: 20px;
			    color: #ff5853;
			}
		}
		.form-group-wrap .form-group {
		    width: 340px;
		}
	}
	.upload-demo{
		margin-top: 20px;
	}
</style>
