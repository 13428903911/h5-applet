<template>
	<view>
		<Adminheader></Adminheader>
		<view class="resume-time fixed-ft container">
			<el-form class="form-wrap w700 mcenter" :model="formMess" ref="formMess" :rules="rules">
				<view class="form-group-hd"><h2 class="title">您的预期时薪及可工作时间段</h2></view>
				<view class="form-group">
					<view class="subtitle"><label>预期时薪</label> <p>时薪计算方法：时薪=全职⽉薪/23天/8⼩时*溢价⽐例，溢价⽐例建议100%～120%</p></view> 
					<el-form-item class="content" prop="wage">
						<el-input v-model="formMess.wage" type="text" name="hourWage" placeholder="请输入您的预期时薪" class="ipt-text" 
						data-vv-scope="__global__" aria-required="true" aria-invalid="false"> 
						<span class="ipt-rt">元/小时</span></el-input>
						
					</el-form-item> 
				</view>
				<view class="form-group">
					<view class="subtitle"><label>可工作的时间段（可多选）</label></view>
				</view>
				<view class="form-group" @change="checkboxChange">
					<view class="btn-group cl">
						<view class="label"><label>周一至周五（工作日）</label></view> 
						<view class="btn-group fl">
							<span v-for="(item,index) in jobTiem" class="btn btn-gray" @tap="clickJobTiem(item.id,index)"  :class="{'activ':rSelect.indexOf(index)>-1}">{{item.name}}</span>
						</view>
					</view>
				</view>
				<view class="form-group">
					<view class="btn-group cl">
						<view class="label"><label>周六</label></view> 
						<view class="btn-group fl" style="display: flex;">
						<span v-for="(item,index) in jobTiem" class="btn btn-gray" @tap="clickJobTiem2(item.id,index)" :class="{'activ':rSelect2.indexOf(index)>-1}">{{item.name}}</span>
					</view>
				</view>
				</view>
				<view class="form-group" style="margin-bottom:60px"><view class="btn-group cl"><view class="label"><label>周日</label></view> <view class="btn-group fl" style="display: flex;">
					<span v-for="(item,index) in jobTiem" class="btn btn-gray"  @tap="clickJobTiem3(item.id,index)" :class="{'activ':rSelect3.indexOf(index)>-1}">{{item.name}}</span>
				</view></view></view>
				<view class="ft-wrap"><view class="w700 mcenter cl"><span @click="fanhui()" class="to-head fl-li-co"><i style="font-size: 24px;margin-right: 5px;vertical-align: bottom;" class="icon iconfont">&#xe60b;</i>&nbsp;返回
				  </span> <span class="btn btn-blue fr"  @click="onSubmit('formMess')">下一步</span></view></view>
			</el-form>
		</view>
	</view>
</template>

<script>
	import Adminheader from '../../admin_header/admin_header.vue'
	export default {
		data() {
			return {
				rSelect:[],
				rSelect2:[],
				rSelect3:[],
				jobTiem:[{id:1,name:'上午',},{id:2,name:'下午'},{id:3,name:'晚上'}],
				formMess:{
					wage:"",
					weekday_am:'',
					weekday_pm:'',
					weekday_night:'',
					sat_am:'',
					sat_pm:'',
					sat_night:'',
					sun_am:'',
					sun_pm:'',
					sun_night:'',
					user_id:this.$store.state.userInfo.user_id
				},
				rules: {
				        wage: [
				          { required: true, message: '预期时薪不能为空', trigger: 'blur' },
				        ]
				      }
			}
		},
		onLoad(){
			this.jowTimeQuery()
		},
		methods: {
			clickJobTiem(id,index){
				console.log(this.formMess)
				let jobIndex = this.rSelect.indexOf(index)
					if(jobIndex>-1){
						 this.rSelect.splice(jobIndex,1)//取消高亮
						 if(index == 0){
						 	this.formMess.weekday_am = ''
						 }else if(index == 1){
						 	this.formMess.weekday_pm = ''
						 }else{
						 	this.formMess.weekday_night = ''
						 }
					}
					 else{
						this.rSelect.push(index) //高亮
						if(index == 0){
							this.formMess.weekday_am = 1
							console.log(this.formMess)
						}else if(index == 1){
							this.formMess.weekday_pm = 1
							console.log(this.formMess)
						}else if(index == 2){
							this.formMess.weekday_night = 1
							console.log(this.formMess)
						}
					}
			},
			clickJobTiem2(id,index){
				let jobIndex2 = this.rSelect2.indexOf(index)
					if(jobIndex2 > -1){
						 this.rSelect2.splice(jobIndex2,1)//取消高亮
						 if(index == 0){
						 	this.formMess.sat_am = ''
						 }else if(index == 1){
						 	this.formMess.sat_pm = ''
						 }else{
						 	this.formMess.sat_night = ''
						 }
					}
					 else{
						this.rSelect2.push(index) //高亮
						if(index == 0){
							this.formMess.sat_am = 1
							
						}else if(index == 1){
							this.formMess.sat_pm = 1
							
						}else if(index == 2){
							this.formMess.sat_night = 1
							
						}
					}
			},
			clickJobTiem3(id,index){
				let jobIndex3 = this.rSelect3.indexOf(index)
					if(jobIndex3 > -1){
						 this.rSelect3.splice(jobIndex3,1)//取消高亮
						 if(index == 0){
						 	this.formMess.sun_am = ''
						 }else if(index == 1){
						 	this.formMess.sun_pm = ''
						 }else{
						 	this.formMess.sun_night = ''
						 }
					}
					 else{
						this.rSelect3.push(index) //高亮
						if(index == 0){
							this.formMess.sun_am = 1
							
						}else if(index == 1){
							this.formMess.sun_pm = 1
							
						}else if(index == 2){
							this.formMess.sun_night = 1
							
						}
					}
			},
			fanhui(){
				uni.reLaunch({url: '/admin/admin_data/admin_data'})	
			},
			checkboxChange(){
				
			},
			onSubmit(formName) {
				this.$refs[formName].validate((valid) => {
				        if (valid) {
							this.$http.post('/public/index.php/api/Position/saveWage',this.formMess).then(res => {
								 if(res.data.code == 1){
									 uni.showToast({icon: 'none',title: '保存成功'})
									 uni.reLaunch({url: '/admin/admin_data/admin_data'})
									 this.formMess=''
								 }
							})
			
				        } else {
				          return false;
				        }
				      });			 
			   },
			   jowTimeQuery() {//查询
				   this.$http.post('/public/index.php/api/Position/getWage',{user_id:this.$store.state.userInfo.user_id}).then(res => {
					   if(res.data.code == 1){
						  uni.setStorage({key:'jobMimeStaus',data:res.data.code});
						  if(res.data.data.length<0){} //数组
						  else{ 
							  this.formMess = res.data.data
							  let jobIndex = this.rSelect.indexOf(0)
							  if(jobIndex>-1){ this.rSelect.splice(jobIndex,1)}
							  else{
								  if(this.formMess.weekday_am == 1){this.rSelect.push(0)}
								  if(this.formMess.weekday_pm == 1){this.rSelect.push(1)}
								  if(this.formMess.weekday_night == 1){this.rSelect.push(2)}
								 }
								let jobIndex2 = this.rSelect2.indexOf(0)
								if(jobIndex2 > -1){ this.rSelect2.splice(jobIndex2,1)}
								else{
								  if(this.formMess.sat_am == 1){this.rSelect2.push(0)}
								  if(this.formMess.sat_pm == 1){this.rSelect2.push(1)}
								  if(this.formMess.sat_night == 1){this.rSelect2.push(2)}
								 }
								 let jobIndex3 = this.rSelect3.indexOf(0)
								 if(jobIndex3 > -1){ this.rSelect3.splice(jobIndex3,1)}
								 else{
								   if(this.formMess.sun_am == 1){this.rSelect3.push(0)}
								   if(this.formMess.sun_pm == 1){this.rSelect3.push(1)}
								   if(this.formMess.sun_night == 1){this.rSelect3.push(2)}
								  }
							}
					  
					  
				   }
			   })
			 
		}
	},
		components:{
			Adminheader
		},
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
	.form-wrap {
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
			.content {
			    position: relative;
			    margin-top: 10px;
			    box-sizing: border-box;
			    border-radius: 2px;
			
				.ipt-rt {
				    position: absolute;
				    right: 0;
				    top: 0;
				    height: 100%;
				    padding: 0 20px;
				    line-height: 48px;
				}
			}
			.tips-error {
			    margin-top: 5px;
			    line-height: 20px;
			    color: #ff5853;
			}
			.btn-group {
			    width: 100%;
			    margin-top: 10px;
			}
			 .label label {
			    display: block;
			    font-weight: 700;
			}
			.fl {
			    display: flex;
				justify-content: space-between;
			}
		}
	}
}
.container.fixed-ft {
    padding-bottom: 100px;
}
.btn {
    display: inline-block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
}
.btn.btn-gray{
    background: #f6f8f9;
	color: #092235;
	border-radius: 2px;
	margin: 0 10px;
}
.frc {
    font-weight: 400;
}
.btn.btn-click {
    background: #b2dcfc;
    color: #092235;
    border-radius: 2px;
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
}
.resume-time .to-head {
    padding-left: 2%;
}
.btn {
    width: 120px;
}
.btn.btn-blue {
    background: #008bf7;
    color: #fff;
}
.fr {
    float: right;
}
.active{background: #b2dcfc!important;}
.activ{background: #cce8fd!important;}
.acti{background: #cce8fd!important;}
</style>
