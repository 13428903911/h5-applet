<template>
	<view>
		<Adminheader></Adminheader>
		<Adminheaders></Adminheaders>
		<view class="discounts_main">
			<h2>评价</h2>
			<Evaluatea></Evaluatea>
			<!-- <view class="img">
				<img src="../../static/images/evaluate1.png" width="120"/>
				<p>您还没有收到过评价</p>
			</view> -->
		</view>
		<!-- 底部 -->
		<Jobfooter></Jobfooter>
	</view>
</template>

<script>
	import Adminheader from '../admin_header/admin_header.vue'
	import Adminheaders from '../admin_header/admin_headers.vue'
	import Evaluatea from './evaluate_a.vue'
	import Jobfooter from '../../pages/job_detail/jobfooter/jobfooter.vue'
	export default {
		components:{Adminheader,Jobfooter,Evaluatea,Adminheaders}
	}
	
</script>

<style lang="less" scoped>
	.discounts_main{
		padding: 90px 20px 20px 20px;
		h2{
			font-size: 16px;
		}
		
		.img{
			padding:100px 0;
			text-align: center
		}
	}
		
</style>