<template>
	<view>
		<Adminheader></Adminheader>
		<Adminheaders></Adminheaders>
		<view class="resume w700 fixed-ft container">
			<view class="mod">
				<view class="mod-hd cl">
					<h3 class="title fl">简历信息</h3>
					<view class="link fr">
						<a @click="cktxjy()">查看填写建议</a>
						<!-- <span>|</span> -->
						<!-- <a @click="ckjlyl()">查看简历预览</a> -->
					</view>
					<view style="clear: both;"></view>
				</view>
				
				<view class="mod-bd">
					<view class="list">
						<view class="item cl">
							<view class="name fl"><span class="fl">1. 工作类型</span> 
								<i class="icon iconfont fl" v-if="userEvaluateStatus == 1">&#xe624;</i>
								<span class="st fl" v-else>未完成</span>
							</view>
							<a class="btn-edit fr" @click="gzlx()"><i class="icon iconfont">&#xe668;</i>编辑</a>
						</view>
						<view class="item cl">
							<view class="name fl">
								<span class="fl">2. 能力描述</span> 
							<i class="icon iconfont fl" v-if="userEvaluateStatus == 1">&#xe624;</i>
							<span class="st fl" v-else>未完成</span>
							</view> 
							<a class="btn-edit fr" @click="gznljy()"><i class="icon iconfont">&#xe668;</i>编辑</a>
						</view>
						<view class="item cl">
							<view class="name fl">
								<span class="fl">3. 预期时薪及可支配时间</span> 
								<i class="icon iconfont fl" v-if="jobMimeStaus == 1">&#xe624;</i>
								<span class="st fl" v-else>未完成</span>
							</view> <a @click="yjsx()" class="btn-edit fr"><i class="icon iconfont">&#xe668;</i>编辑</a></view>
						<view class="item cl">
							<view class="name fl">
								<span class="fl">4. 工作经历</span> 
								<i class="icon iconfont fl" v-if="jobStatus == 1">&#xe624;</i>
								<span class="st fl" v-else>未完成</span>
							</view> 
							<a @click="gzjl()" class="btn-edit fr"><i class="icon iconfont">&#xe668;</i>编辑</a>
						</view>
						<view class="item cl">
							<view class="name fl">
								<span class="fl">5. 项目经验</span> 
								<i class="icon iconfont fl" v-if="itemStaus == 1">&#xe624;</i>
								<span class="st fl"  v-else>未完成</span>
							</view> 
							<a @click="xmjy()" class="btn-edit fr"><i class="icon iconfont">&#xe668;</i>编辑</a>
						</view>
						<view class="item cl">
							<view class="name fl">
								<span class="fl">6. 教育信息</span> 
								<i class="icon iconfont fl" v-if="educationStaus == 1">&#xe624;</i>
								<span class="st fl" v-else>未完成</span>
							</view> 
							<a @click="jyxx()" class="btn-edit fr"><i class="icon iconfont">&#xe668;</i>编辑</a>
						</view>	
					</view>
				</view>
			</view>
		<!-- 	<view class="mod" style="margin-top: 30px;">
				<view class="mod-hd cl">
					<h3 class="title">平台资料</h3>
				</view>
				<view class="mod-bd">
					<view class="list">
						<view class="item cl">
							<view class="name fl">
								<span class="fl">1. 个人基本信息</span> 
								<span class="st fl">未完成</span>
							</view> 
							<a class="btn-edit fr"><i class="icon iconfont">&#xe668;</i>编辑</a>
						</view>
					</view>
					<view class="list">
						<view class="item cl">
							<view class="name fl">
								<span class="fl">2. 实名认证</span> 
								<span class="st fl">未完成</span>
							</view> 
							<a class="btn-edit fr"><i class="icon iconfont">&#xe668;</i>编辑</a>
						</view>
					</view>
					<view class="list">
						<view class="item cl">
							<view class="name fl">
								<span class="fl">3. 微信绑定</span> 
								<span class="st fl">未完成</span>
							</view> 
							<a class="btn-edit fr"><i class="icon iconfont">&#xe668;</i>编辑</a>
						</view>
					</view>
				</view>
			</view> -->
		</view>
		<view class="ft-wrap">
			<view class="w700 mcenter">
				<span class="text">审核通过后，即可投递职位</span> 
				<span class="btn-group"><span class="btn btn-disabled">提交审核</span></span>
			</view>
		</view>
	</view>
</template>

<script>
	import Adminheader from '../admin_header/admin_header.vue'
	import Adminheaders from '../admin_header/admin_headers.vue'
	export default {
		data() {
			return {
				jobStatus:'',//工作经历状态
				educationStaus:'',//教育信息状态
				itemStaus:'',//项目经验状态
				jobMimeStaus:'',//工作时间状态
				userEvaluateStatus:'',//个人评价状态
				jobTypeStatus:''//工作类型状态
			}
		},
		mounted() {
			uni.getStorage({key: 'jobStatus', success:(res) => {if(res.data == 1){this.jobStatus = res.data}},})//取出存储的工作经历状态
			uni.getStorage({key: 'educationStaus', success:(res) => {if(res.data == 1){this.educationStaus = res.data}},})//取出存储的教育信息状态
			uni.getStorage({key: 'itemStaus', success:(res) => {if(res.data == 1){this.itemStaus = res.data}},})//取出存储的项目经验状态
			uni.getStorage({key: 'jobMimeStaus', success:(res) => {if(res.data == 1){this.jobMimeStaus = res.data}},})//取出存储的工作时间状态
			uni.getStorage({key: 'userEvaluateStatus', success:(res) => {if(res.data == 1){this.userEvaluateStatus = res.data}},})//取出存储的个人评价状态
			uni.getStorage({key: 'jobTypeStatus', success:(res) => {if(res.data == 1){this.jobTypeStatus = res.data}},})//取出存储的工作类型状态
			},
		methods: {
			cktxjy(){
				wx.navigateTo({
					url:'/admin/admin_data/admin_guide/admin_guide'
				})
			},
			ckjlyl(){
				wx.navigateTo({
					url:'/admin/admin_data/admin_guide/admin_resumes'
				})
			},
			gzlx(){
				wx.navigateTo({
					url:'/admin/admin_data/admin_guide/admin_industry'
				})
			},
			gznljy(){
				wx.navigateTo({
					url:'/admin/admin_data/admin_guide/admin_skill'
				})
			},
			yjsx(){
				wx.navigateTo({
					url:'/admin/admin_data/admin_guide/admin_time'
				})
			},
			gzjl(){
				wx.navigateTo({
					url:'/admin/admin_data/admin_guide/admin_work'
				})
			},
			xmjy(){
				wx.navigateTo({
					url:'/admin/admin_data/admin_guide/admin_project'
				})
			},
			jyxx(){
				wx.navigateTo({
					url:'/admin/admin_data/admin_guide/admin_education'
				})
			}
		},
		components:{
			Adminheader,
			Adminheaders
		}
	}
</script>

<style scoped lang="scss">
a {
	color: #008bf7;
}
.container.fixed-ft {
    padding-bottom: 100px;
	position: relative;
	z-index: 111;
	background: #fff;
}
.resume {
    line-height: 24px;
}
.container {
    margin-left: auto;
    margin-right: auto;
    padding: 20px 15px;
    box-sizing: border-box;
	
	.mod-hd{
		.fl {
		    float: left;
		}
		.fr {
		    float: right;
		}
	}
	.mod-hd .title {
	    font-size: 20px;
	    line-height: 30px;
	}
	.mod-hd .link {
	    margin-top: 6px;
		a{
		    display: inline-block;
		    font-size: 14px;
		    line-height: 24px;
		}
		span {
		    margin: 0 10px;
		    color: #edf1f4;
		}
	}
	
	.mod-bd {
	    margin-top: 10px;
		.item {
		    padding: 20px 0 41px 0;
		    border-bottom: 1px solid #edf1f4;
			.fl {
			    float: left;
			}
			.icon {
			    margin-left: 20px;
			    color: #008bf7;
			    font-size: 20px;
			}
			.fr {
			    float: right;
			}
			.btn-edit .icon {
			    margin-right: 10px;
				font-size: 25px;
				vertical-align: bottom;
			}
			.st {
			    margin-left: 20px;
			    color: #9ca6ae;
			}
		}
	}
}
.ft-wrap {
	    padding: 10px 15px;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #fff;
		box-shadow: 0 0 10px 0 rgba(0,0,0,.05);
		box-sizing: border-box;
		z-index: 115;
		text-align: center;
		.text {
		    display: block;
		    margin: 0;
		    line-height: 20px;
			color: #9ca6ae;
		}
		.btn-group {
		    display: block;
		    margin-top: 10px;
		}
		.btn {
		    display: inline-block;
		    width: 100%;
		    height: 50px;
		    line-height: 50px;
		    text-align: center;
		    border: none;
		    border-radius: 2px;
		    color: #fff;
		    cursor: pointer;
		    box-sizing: border-box;
		}
		.btn.btn-disabled {
		    background: #f6f8f9;
		    color: #9ca6ae;
		    cursor: not-allowed;
		}
	}
</style>
