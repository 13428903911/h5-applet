<template>
	<view>
		<Adminheader></Adminheader>
		<Adminheaders></Adminheaders>
		<view class="discounts_main">
			<h2>下载工作台</h2>
			<p>效率管理工具是一款远程工作的辅助工具，主要通过计时+截屏的方式，记录工作时长，工作内容和工作强度。<br/><br/>
			安装前建议您先阅读<a href="#">安装说明</a></p>
			<view class="img">
				<img src="../../static/images/download1.png" width="345" height="190"/>
			</view>
			<!-- 底部 -->
			<view class="footer">
				<a href="#"><i class="icon iconfont" style="font-size: 20px;color:#FFFFFF">&#xe607;<span style="margin-left:10px;font-size: 16px;">Android下载</span></i></a>
			</view>
		</view>
		
	</view>
</template>

<script>
	import Adminheader from '../admin_header/admin_header.vue'
	import Adminheaders from '../admin_header/admin_headers.vue'
	export default {
		components:{Adminheader,Adminheaders}
	}
	
</script>

<style lang="less" scoped>
	.discounts_main{
		padding: 90px 20px 20px 20px;
		h2{
			font-size: 30px;
		}
		p{
			margin-top: 20px;
		}
		
		.img{
			padding: 30px 0 160px 0;
			text-align: center
		}
		.footer{
				height: 50px;
				text-align: center;
				line-height: 50px;
				border-radius: 3px;
				background-color: #2ed573;
			}
	}
	
		
</style>
