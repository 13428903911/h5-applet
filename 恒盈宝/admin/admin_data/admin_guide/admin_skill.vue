<template>
	<view>
	  <Adminheader></Adminheader>
	  <view class="resume-skill fixed-ft container">
	   <el-form class="form-wrap w700 mcenter" :model="ruleForm" ref="ruleForm" :rules="rules">
	    <view class="form-group-hd"><h2 class="title">您的工作能力和经验</h2></view>
	    <view class="form-group">
	     <view class="subtitle">
	      <label>一句话描述您的工作能力</label>
	     </view> 
	     <el-form-item class="content" prop="ability">
	      <el-input v-model="ruleForm.ability" type="text" placeholder="请输入您的工作能力，如多平台产品交互及UI设计" 
		  class="ipt-text" data-vv-scope="__global__" aria-required="true" aria-invalid="false"></el-input>
	     </el-form-item> 
	     <p class="tips-error" style="display: none;"></p > 
	     <p style="margin-top: 10px;">
	      <i class="icon iconfont" style="font-size: 14px;">&#xe634;</i>
	      <span style="padding: 6px;">看看别人怎么写</span>
	     </p >
	    </view>
	    <view class="form-group">
	     <view class="demo">
	      <img src="/static/images/avatar-1.png" class="round_icon"> 
	      <view style="margin-left: 10px; margin-top: 5px; font-weight: bold;">&nbsp;&nbsp;电商平台促销活动策划</view> 
	      <view style="float: right; margin-right: 10px; margin-top: -36px;">
	       <i class="icon iconfont" style="color: rgb(0, 139, 247);vertical-align: middle;margin-right: 5px;">&#xe614;</i>&nbsp;&nbsp;换一个
	      </view>
	     </view>
	    </view>
		<view class="form-group">
		     <view class="subtitle">
		      <label>为您的工作能力做一些补充</label>
		     </view> 
		     <view class="label">
		      <label>以下是一些供您参考的提示：</label>
		     </view> 
		     <span style="line-height: 24px;"> 1. 描述您的优势和技能 <br></span> 
		     <span style="line-height: 24px;"> 2. 突出您做过的项目，以及所获得的成绩 <br></span> 
		     <span style="line-height: 24px;"> 3. 简短扼要，保证描述内容准确无误 <br></span> 
		     <el-form-item class="content suggest-wrap"  prop="ability_supple">
		      <textarea v-model="ruleForm.ability_supple" maxlength="1000" id="textarea" class="ipt-area" @input = "descInput" />
		     </el-form-item> 
		     <p class="tips-error" style="display: none;"></p > 
		     <p style="margin-top: 10px;">
		      <i class="icon iconfont" style="font-size: 14px;">&#xe634;</i>
		      <span style="padding: 10px;">看看别人怎么写</span>
		     </p >
		    </view>
			<view class="form-group">
			     <view class="demo">
			      <img src="/static/images/avatar-1.png" class="round_icon"> 
			      <view style="float: right; margin-right: 10px; top: 20%;">
			       <i class="icon iconfont" style="color: rgb(0, 139, 247);">&#xe614;</i>&nbsp;&nbsp;换一个
			      </view> 
			      <view style="margin-left: 20px; margin-top: 50px; margin-right: 20px; font-weight: normal; line-height: 22px; padding: 0px;">10年以上互联网运营经验，先后任职新浪微博、阿里巴巴、美团等大型互联网公司，对用户运营、产品运营、新媒体运营有丰富的实操经验，擅长微信生态社群营销推广及裂变增长。</view>
			     </view>
			    </view>
			    <view class="form-group form-group-select">
			     <view class="subtitle"><label>工作经验</label></view> 
			     <el-form-item class="content" style="border: 0px solid #9ca6ae;" prop="experience">
			      <el-select v-model="ruleForm.experience" placeholder="请选择">
			          <el-option
			            v-for="item in options"
			            :key="item.value"
			            :value="item.value">
			          </el-option>
			        </el-select>
			      
			     </el-form-item> 
			     <p class="tips-error" style="display: none;"></p >
			    </view>
			    <view class="ft-wrap">
			     <view class="w700 mcenter cl">
			      <span class="to-head fl-li-co" @click="fanhui()">
			       <i style="font-size: 24px;margin-right: 5px;vertical-align: bottom;" class="icon iconfont">&#xe60b;</i>&nbsp;返回
			             </span> 
			       <span class="btn btn-blue fr" @click="onSubmit('ruleForm')">下一步</span>
			     </view>
			    </view>
			   </el-form>
			  </view>
			 </view>
</template>


<script>
 import Adminheader from '../../admin_header/admin_header.vue'
 export default {
  data() {
   return {
    remnant:0,
      options: [{
              value: '一年以下'
           
            }, {
              value: '1-3年'
          
            }, {
              value: '3-5年'
             
            }, {
              value: '5-10年'
          
            }, {
              value: '10年以上'
             
            }],
            value: '',
    ruleForm:{
     ability:"",
     ability_supple:"",
     experience:"",
      user_id:this.$store.state.userInfo.user_id
    },
    rules: {
            ability: [
              { required: true, message: '工作能力不能为空', trigger: 'blur' },
            ],
            ability_supple: [
              { required: true, message: '描述内容不能为空', trigger: 'blur' }
            ],
            experience: [
              { required: true, message: '工作经验不能为空', trigger: 'blur' }
            ]
          }
    
   }
  },
  methods: {
   descInput(e){
    this.remnant = e.detail.value.length
    },
   fanhui(){
    uni.reLaunch({url: '/admin/admin_data/admin_data'})
   },
    onSubmit(formName) {
		this.$refs[formName].validate((valid) => {
		        if (valid) {
					this.$http.post('/public/index.php/api/Position/saveAbility',this.ruleForm).then(res => {
						if(res.data.code == 1){
							uni.showToast({icon: 'none',title: '保存成功'})
							uni.reLaunch({url: '/admin/admin_data/admin_data'})		
						}
					})
		        } else {
		          return false;
		        }
		      });
     },
	 powerQuery(){//查询
		
				this.$http.post('/public/index.php/api/Position/getAbility',{user_id:this.$store.state.userInfo.user_id}).then(res => {
					if(res.data.data.length<0){}
					      else{this.ruleForm = res.data.data}
							
				})
			
		}
	 
  },
  components:{
   Adminheader
  },
  onLoad() {
   this.powerQuery()
  
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
	.form-group-hd {
	    margin-bottom: 32px;
		.title {
		    font-size: 24px;
		    line-height: 32px;
			font-weight: 700;
		}
	}
	.form-wrap .form-group {
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
			select, textarea {
			    *font-size: 100%;
			    line-height: 1.2;
			    color: inherit;
				outline: 0;
				 border: 1px solid #9ca6ae;
			}
			.ipt-select {
			    width: 100%;
			    background: none;
			    border: none;
			    height: 48px;
			    padding: 0 20px;
			    appearance: none;
			    -webkit-appearance: none;
			    margin-right: -36px;
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
	}
	 .demo {
	    position: relative;
	    background: #f6f8f9;
	    display: inline-block;
	    width: 100%;
	    height: auto;
	    min-height: 48px;
	    line-height: 35px;
	    text-align: left;
	    border-radius: 2px;
	    cursor: pointer;
	    box-sizing: border-box;
	    border: 1px solid #edf1f4;
	}
	.round_icon {
	    width: 30px;
	    margin-top: 7px;
	    margin-left: 20px;
	    float: left;
	    height: 30px;
	    display: -ms-flexbox;
	    display: flex;
	    border-radius: 50%;
	    -ms-flex-align: center;
	    align-items: center;
	    -ms-flex-pack: center;
	    justify-content: center;
	    overflow: hidden;
		margin-right: 10px;
	}
}
.container.fixed-ft {
    padding-bottom: 100px;
}
.form-wrap .form-group .label label {
    display: block;
    font-weight: 700;
}
.resume-skill .text-span {
    position: absolute;
    right: 10px;
    top: 85%;
    color: #969896;
}
.ipt-area {
    display: block;
    width: 100%;
    height: 152px;
    padding: 12px 20px;
    line-height: 24px;
    border: none;
    box-sizing: border-box;
    resize: vertical;
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
.to-head {
    color: #008bf7;
    line-height: 50px;
    padding-left: 2%;
}
.fl-li-co {
    float: left;
}
.btn {
    display: inline-block;
	width: 120px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: none;
    border-radius: 2px;
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
</style>
