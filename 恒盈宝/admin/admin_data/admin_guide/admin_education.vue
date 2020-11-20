<template>
	<view>
		<Adminheader></Adminheader>
		<view class="resume-education fixed-ft work-exper container">
			<el-form class="form-wrap w700 mcenter" :model="fomeData" ref="fomeData" :rules="rules">
				<view class="form-group-hd"><h2 class="title">您的教育信息</h2></view>
				<view class="form-group"><view class="subtitle"><label>填写您的最高学历信息</label> <!----></view></view>
				<view class="form-group">
					<view class="label"><label>学校名称</label></view> 
					<el-form-item class="content" prop="school">
						<el-input type="text" name="tag0schoolName" placeholder="请输入学校名称" class="ipt-text" 
						data-vv-scope="__global__" aria-required="true" aria-invalid="false" v-model="fomeData.school"></el-input>
					</el-form-item> 
					<p class="tips-error" style="display: none;"></p>
				</view>
				<view class="form-group-wrap">
					<view class="form-group form-group-select">
						<view class="label">
							<label>学历</label>
						</view> 
						<view class="content" prop="education">
							<el-select v-model="fomeData.education" placeholder="请选择">
							  <el-option
							    v-for="item in options"
							    :key="item.value"
							    :label="item.name"
							    :value="item.name">
							  </el-option>
							</el-select>
	
							</view> </view>
				</view>
				<view class="form-group">
					<view class="label">
						<label>专业</label>
					</view> 
					<el-form-item class="content" style="width: 89%;" prop="major">
						<el-input type="text" placeholder="请输入专业" name="tag0major" class="ipt-text" v-model="fomeData.major"></el-input>
					</el-form-item> 
				</view>
				<view class="form-group">
					<view class="label"><label style="margin-bottom: 10px;">开始时间</label></view>
					<el-date-picker
					      v-model="value1"
					      type="date"
						  @change="dateChangebirthday1"
						   format="yyyy-MM-dd"
						   value-format="yyyy-MM-dd"
					      placeholder="请选择开始时间">
					</el-date-picker>
				</view>
				<view class="form-group">
					<view class="label"><label style="margin-bottom: 10px;">结束时间</label></view>
					<el-date-picker
					      v-model="value2"
					      type="date"
						  @change="dateChangebirthday2"
						   format="yyyy-MM-dd"
						   value-format="yyyy-MM-dd"
					      placeholder="请选择结束时间">
					</el-date-picker>
					
				</view>
			</el-form>
			
		</view>
		<view class="ft-wrap"><view class="w700 mcenter cl">
			<span @click="fanhui()" class="to-head fl-li-co">
				<i style="font-size: 24px;margin-right: 5px;vertical-align: bottom;" class="icon iconfont">&#xe60b;</i>&nbsp;返回
			</span> 
			<span class="btn btn-blue fr" @click="onSubmit('fomeData')">保 存</span> <!----></view></view>
		</view>
	</view>
</template>

<script>
	import Adminheader from '../../admin_header/admin_header.vue'
	export default {
		data() {
			return {
				value1:'',
				value2:'',
				 pickerOptions: {
				    disabledDate(time) {
				        return time.getTime() > Date.now();
				    }
				},
				  options: [{
				          id: 1,
				          name: '大专'
				        }, {
				         id: 2,
				         name: '本科'
				        }, {
				         id: 3,
				         name: '硕士'
				        }, {
				         id: 4,
				         name: '博士'
				        }],
				fomeData:{
					user_id:this.$store.state.userInfo.user_id,
					school:'',
					education:'',
					major:'',
					start_time:'',
					end_time:''
				},
				rules: {
				        school: [
				          { required: true, message: '工作能力不能为空', trigger: 'blur' },
				        ],
				        education: [
				          { required: true, message: '描述内容不能为空', trigger: 'blur' }
				        ],
				        major: [
				          { required: true, message: '工作经验不能为空', trigger: 'blur' }
				        ]
						// start_time: [
						//   { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
						// ],
						// end_time: [
						//   { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
						// ],
				      }
			}
		},
		methods: {
			dateChangebirthday1(){
				this.fomeData.start_time = this.value1
				// console.log(this.fomeData.start_time)
			},
			dateChangebirthday2(){
				this.fomeData.end_time = this.value2
				// console.log(this.fomeData.end_time)
			},
			onSubmit(formName){//保存
			   this.$refs[formName].validate((valid) => {
			        if (valid) {
			          this.$http.post('/public/index.php/api/Position/saveEducate',this.fomeData).then(res => {
			          	uni.reLaunch({url: '/admin/admin_data/admin_data'})
			          })
			        } else {
			          return false;
			        }
			      });
				
			},
			fanhui(){
				uni.reLaunch({url: '/admin/admin_data/admin_data'})
			},
			educationQuery() {//查询
				this.$http.post('/public/index.php/api/Position/getEducate',{user_id:this.$store.state.userInfo.user_id}).then(res => {
					if(res.data.data==""){}
					      else{
							 this.fomeData = res.data.data
							 this.value1 = res.data.data.start_time
							 this.value2 =  res.data.data.end_time 
						  }
					
				})
			}
			
		},
		mounted() {
			this.educationQuery()
		},
		components:{
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
}
.container.fixed-ft {
    padding-bottom: 100px;
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
    z-index: 111;
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
