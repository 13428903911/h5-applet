<template>
	<view>
		<nav-component></nav-component>
		<view class="dialog">
			<el-dialog  :visible.sync="centerDialogVisible" width="100%" center fullscreen :modal="false">
			  <view class="dialog_img">
				  <p><img src="../../static/images/my_dialogue1.png" width="130"/></p>
				  <p class="text">请在电脑网页或微信客户端打开</p>
				   <el-button type="primary" @click="centerDialogVisible = false" style="width: 100%; height: 50px;">我知道了</el-button>
			  </view>
			</el-dialog>
		</view>

		<view>
			<h2 class="title">全部会话（0）</h2>
		</view>
		<view class="main">
			<view class="main_img_text" @click="inform()">
				<view><img src="../../static/images/my_dialogue2.png" width="48"/></view>
				<view class="main_text">
					<view>系统通知</view>
					<view class="time">刚刚</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navComponent from './navComponent.vue'
	export default {
		data(){
			return{
				 centerDialogVisible: true
			}
		},
		methods:{
			inform(){
				this.$router.push('./admin_inform')
			}
		},
		mounted(){
			
		},
		components:{
			navComponent,
	   },
   }
</script>

<style lang="less" scoped>
	.dialog_img{
		padding: 66px 0px 100px 0px;
		text-align: center;
		.text{
			margin: 30px 0;
			font-size: 16px;
			font-weight: bold;
		}
	}
/deep/ .el-dialog__headerbtn .el-dialog__close {
		font-size: 24px;
	}
	.title{
		height: 60px;
		line-height: 60px;
		padding: 0 20px;
		font-size: 16px;
		font-weight: 700;
	}
	 .main{
		 border-top:1px solid #edf1f4;
		 border-bottom: 1px solid #edf1f4;
		 padding:20px;
		 .main_img_text{
			 display: flex;
			 img{
			 	border-radius: 50%;
				margin-right: 10px;
			 }
			 .main_text{
				 width: 100%;
				 display:flex;
				 align-items: center;
				 justify-content: space-between;
				 .time{
					 font-size: 12px;
					  color: rgba(9,34,53,.5)
				 }
			 }
		 }
		 
	 } 
</style>
