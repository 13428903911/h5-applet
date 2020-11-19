<template>
	<view>
		<Header></Header>
		<view class="detailsBox">
			<view class="detailsText">
				<h2 class="title">金斗云·双11丨雇佣远程兼职员工，消费满1000送1000！</h2>
				<view class="title_date">
					金斗云远程工作<span>|</span>2020年10月29日
				</view>
				<view class="details_main">
					<img src="../../../static/images/story1.png"/>
					<p>2020 双十一即将到来，金斗云远程工作平台推出双十一特惠福利活动！ 满足参与条件即可领取优惠礼包！</p>
					<h1>【注册福利】</h1>
					<p>活动时间：2020年11月01日至2020年11月11日</p>
					<p>参与要求：活动时间内注册成为金斗云招聘账户并发布职位</p>
					<p>福利介绍：注册发布职位需求即送100元福利</p>
					<p>领取方式：活动期间进入优惠券-领券中心即可领取</p>
					<h1>【消费福利】</h1>
					<p>活动时间：2020年11月01日至2020年11月30日</p>
					<p>参与要求：活动时间内注册成为金斗云招聘账户并发布职位</p>
					<p>福利介绍：消费满1000元返1000元</p>
					<p>领取方式：活动结束后发放至金斗云账户</p>
					<p><br/></p>
					<h1>找远程工作，就来金斗云！</h1>
					<h1 style="color:#82b64a">免费招聘</h1>
					<h1 style="color:#82b64a">成为金斗云</h1>
					<p><br/></p>
					<p>金斗云是国内领先的自由职业者远程工作平台，
					提供人才匹配、工作管理、支付结算等服务，
					为企业减轻人力成本，解决人力困扰，
					让更多上班族和自由职业者实现财务自由。</p>
					<p>金斗云系统上线后，共发布职位5000+个，
					累计注册服务商超过50000人，累计工作时长
					超过160000+小时，最快3小时为客户匹配到
					合适的人才进入工作阶段。</p>
				</view>
			</view>
			<!-- 底部 -->
			<Jobfooter></Jobfooter>
		</view>
	</view>
	
</template>

<script>
	import Header from '@/pages/header/header.vue'
	import Jobfooter from '@/pages/job_detail/jobfooter/jobfooter.vue'
	export default {
		data() {
			return{}
		},
		components:{
			Header,
			Jobfooter
		}
	}
</script>

<style lang="scss" scoped>
	.detailsBox{
		padding:20px 15px;
		.detailsText{
			padding:30px 5px;
			.title{
				font-size: 24px;
				font-weight: bold;
			}
			.title_date{
				margin-top: 10px;
				color: #9ca6ae;
				text-align: center;
				span{
					padding:0 10px;
				}
			}
			.details_main{
				margin-top: 30px;
				font-size: 0px;
				img{
					width: 100%;
					height: 147px;
				}
				p{
					font-size: 16px;
					line-height: 2;
					word-wrap: break-word;
					margin: 32px 0;
					text-align: justify;
				}
				h1{
					font-size: 24px;
					text-align:center;
					margin-bottom: 20px;
				}
			}
		}
	}
</style>
