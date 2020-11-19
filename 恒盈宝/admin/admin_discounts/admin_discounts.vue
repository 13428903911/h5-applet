<template>
	<view>
		<Adminheader></Adminheader>
		<Adminheaders></Adminheaders>
		<view class="discounts_main">
			<h2>优惠券</h2>
			<view class="discounts_box">
				<view class="my_coupon">
					<view class="inne">
						<view class="titel">领劵中心</view>
						<view class="titel">我的优惠劵</view>
					</view>
				</view>
			</view>
			<view class="img">
				<img src="../../static/images/discounts1.png" width="120"/>
				<p>暂无优惠券</p>
			</view>
		</view>
		<!-- 底部 -->
		<Jobfooter></Jobfooter>
	</view>
</template>

<script>
	import Adminheader from '../admin_header/admin_header.vue'
	import Adminheaders from '../admin_header/admin_headers.vue'
	import Jobfooter from '../../pages/job_detail/jobfooter/jobfooter.vue'
	export default {
		components:{Adminheader,Jobfooter,Adminheaders}
	}
	
</script>

<style lang="less" scoped>
	.discounts_main{
		padding: 90px 20px 20px 20px;
		h2{
			font-size: 16px;
		}
		.my_coupon{
			border-bottom: 1px solid #edf1f4;
			color: #9ca6ae;
			margin-bottom: -1px;
			overflow-x: auto;
			overflow-y: hidden;
			.inne{
				display: flex;
				.titel{
					margin-right: 20px;
					padding: 30px 0px 10px 0;
					
				}
				.titel:hover{
					color: #008bf7;
					border-bottom: 1px solid #008bf7;
				}
			}
		}
		.img{
			padding:100px 0;
			text-align: center
		}
	}
		
</style>
