<template>
	<view class="job">
		<Header></Header>
		<Jobheader :header="header"></Jobheader>
	<view class="mod">
		<view class="hd cl">
			<h3 class="title">{{Jobxsjs.income_method}}</h3>
			 <p class="num">{{Jobxsjs.budget}}</p>
		</view>
		<view class="bd">
			<!-- <ul class="salary cl">
				<li class="fl">
					<p>每小时收入</p>
					 <p class="num">{{Jobxsjs.price}}</p>
				</li> 
				<li class="fl">
					<p>预计每月收入</p> 
					<p class="num">{{Jobxsjs.expect_month}}</p>
				</li> 
				<li class="fl">
					<p>每日工作时长</p> 
					<p class="num">{{Jobxsjs.working_hours}}</p>
				</li>
				<view style="clear: both;"></view>
			</ul> -->
			<ul class="desc">
				 
				<li>
					<i class="icon iconfont icon-riqiqishu fl"></i> 
					<p><em>雇佣周期：</em>{{Jobxsjs.hiring_cycle}}</p>
				</li> 
				<li><i class="icon iconfont icon-jiesuanfangshishoufutaizhang fl"></i> <p><em>结算方式：</em>{{Jobxsjs.payment_type}}</p></li>
			</ul>
		</view>
	</view>
		<Jobzwxx :jowDuty="jowDuty"></Jobzwxx>
		<view class="mod">
			<view class="hd cl"><h3 class="title">职位要求</h3></view>
			<view class="bd">
				<h4>投递者所属职业：</h4>
				<view class="tags"><view class="inner cl"><span>{{occupation.occupate}}</span></view></view>
				<h4 style="margin-top:10px">投递者需要具备的专业技能：</h4>
				<view class="tags"><view class="inner cl" v-for="item in occupation.skill" :key="item.id"><text>{{item}}</text> </view></view>
				<h4>投递者需要达到的技能等级：</h4>
				<ul class="types types-bg cl"><li class="item"><i class="icon iconfont icon-16"></i> <view class="icon-group cl"><i class="icon iconfont iconlevel-price"></i></view> <p class="name">普通级</p> <p class="desc">工作经验 0-3 年
				<br>适合清晰/简单的工作任务</p></li> <li class="item cur"><i class="icon iconfont icon-dui1"></i> <view class="icon-group cl"><i class="icon iconfont icon-16"></i> <i class="icon iconfont icon-16"></i></view> <p class="name zishen">{{occupation.skill_grade}}</p> <p class="desc">工作经验 3-5 年
				<br>适合难度适中的工作任务</p></li> <li class="item"> <view class="icon-group cl"><i class="icon iconfont icon-16"></i> <i class="icon iconfont icon-16"></i> <i class="icon iconfont icon-16"></i></view> <p class="name zishen">专家级</p> <p class="desc">工作经验 5 年以上
				<br>适合有一定门槛的工作任务</p></li><view style="clear: both;"></view></ul>
				<h4 class="yuncheng">远程雇佣方式：</h4>
				<ul class="types cl"><li class="item cur"><i class="icon iconfont icon-dui1"></i> <view class="icon-group cl"><i class="icon iconfont icon-duanqi"></i></view>
				 <p class="name">{{occupation.hiring_type}}</p> <p class="desc"> 一次性完成工作并结算</p></li> <li class="item"><i class="icon iconfont"></i> 
					<view class="icon-group cl"><i class="icon iconfont icon-longtime"></i></view> <p class="name">短期雇用</p> <p class="desc">雇用时长一般在6个月以内 </p></li> <li class="item"><i class="icon iconfont"></i> 
					<view class="icon-group cl"><i class="icon iconfont icon-shou"></i></view> <p class="name">长期雇用</p> <p class="desc"> 雇用时长一般在6个月以上</p></li>
					<view style="clear: both;"></view>
				</ul>
				<h4 class="yuncheng">投递者需要满足的条件：</h4>
				<ul class="requirement">
					
					<view style="clear: both;"></view></li><li class="cl"><i class="icon iconfont icon-location fl"></i> <p class="fl">国家或地区要求：{{occupation.city}}</p><view style="clear: both;"></view></li>
					<view style="clear: both;"></view>
				</ul>	
			</view>
		</view>
		
	    <Jobzyet></Jobzyet>
		<Jobgzbz></Jobgzbz>
		<Jobzwtj></Jobzwtj> 
		
	</view>
</template>

<script>
	import Header from '@/pages/header/header.vue'
	import Jobheader from './job_header/job_header.vue'
	import Jobzwxx from './jobzwxx/jobzwxx.vue'
	// import Jobzwyq from './jobzwyq/jobzwyq.vue'
	import Jobzyet from './jobzyet/jobzyet.vue'
	import Jobgzbz from './jobgzbz/jobgzbz.vue'
	import Jobzwtj from './jobzwtj/jobzwtj.vue'
	// import Jofooter from './jobfooter/jobfooter.vue'
	// import Jobanniu from './jobanniu/jobanniu.vue'
	export default {
		data() {
			return {
				Detailsll:{},
				task_id:'',
				"id": '',//任务id
				header:{
					name: "",//任务名称
					position:'',//所属领域
					publisher: "",//关于雇主
				},
				Jobxsjs:{
				    "income_method": "",//收入计算方式
					budget:'',
					"expect_month": "",//预计每月收入
					"working_hours": '',//每日工作时长
					"hiring_cycle": "",//雇佣周期
					"payment_type": "",//结算方式
				},
				jowDuty:{
					description:'',
					"people_limit": '',//本职位招聘人数
				},
				occupation:{
					occupate:'',//投递者所属职业
					skill:[],//投递者需要具备的专业技能
					skill_grade:'',//投递者需要达到的技能等级
					"hiring_type": "",//雇佣方式
					city:'',//地区
				},
				
				"income_method": "",//收入计算方式
				"budget": "",//项目预算
				"category_first": '',
				"category_second": '',
				
				"description": "",  //职位信息
				
				
			
			
				
				
			}
		},
		
		methods: {
			//详情
			detail(income_method){
				 this.$http.post('public/index.php/api/Work/getWorkInfo',{
					task_id:this.task_id
				 }).then(res => {
					this.Detailsll = res.data.data
					this.id = this.Detailsll.id
					this.header.name = this.Detailsll.name
					this.header.publisher = this.Detailsll.publisher
					this.Jobxsjs.income_method = this.Detailsll.income_method
					this.budget = this.Detailsll.budget
					this.Jobxsjs.budget = this.Detailsll.budget
					this.Jobxsjs.expect_month = this.Detailsll.expect_month
					this.Jobxsjs.working_hours = this.Detailsll.working_hours
					this.category_first = this.Detailsll.category_first
					this.category_second = this.Detailsll.category_second
					this.Jobxsjs.payment_type = this.Detailsll.payment_type
					this.occupation.hiring_type = this.Detailsll.hiring_type
					this.Jobxsjs.hiring_cycle = this.Detailsll.hiring_cycle
					this.jowDuty.description = this.Detailsll.description
					this.jowDuty.people_limit = this.Detailsll.people_limit
					this.occupation.skill = this.Detailsll.skill
					this.occupation.skill_grade = this.Detailsll.skill_grade
					this.occupation.city = this.Detailsll.city
					this.header.position = this.Detailsll.position
					this.occupation.occupate = this.Detailsll.occupate
				 })	
			},
		},
		onLoad(options) {
			this.task_id = options.id
			this.detail()
		},
		components:{
			Header,
			Jobheader,
			Jobzwxx,
			// Jobzwyq,
			Jobzyet,
			Jobgzbz,
			Jobzwtj,
			// Jofooter,
			// Jobanniu
		}
	}
</script>

<style lang="scss" scoped>
.job{
	font-size:28rpx;
	margin-top: 50px;
}
.mod:not(:first-child) {
		border-top: 1px solid #edf1f4;
	}
.mod{
	line-height: 24px;
	padding: 20px 20px;
	.title {
		font-size: 18px;
		line-height: 28px;
	}
	.num {
		line-height: 30px;
		font-weight: 700;
		font-size: 20px;
		color: #008bf7;
	}
	.bd {
		.desc{
			margin-top: 25px;
			li{
				margin-top: 2px;
				padding: 20px;
				background: #f6f8f9;
				border-radius: 2px;
				.icon{
					width: 20px;
					height: 24px;
					margin-right: 20px;
					font-size: 20px;
				}
				.fl {
				    float: left;
				}
				p{
					overflow: hidden;
					em{
						  font-weight: 700;
						  font-style: normal;
					}
				}
			}
		}
		
	}
	
}


.mod:not(:first-child) {
		border-top: 1px solid #edf1f4;
	}
	.mod{
		line-height: 24px;
		padding: 20px 20px;
		.title {
		    font-size: 18px;
		    line-height: 28px;
		}
		.bd {
		    margin-top: 20px;
			.salary {
			    margin-top: -20px;
				li {
				    margin: 20px 32px 0 0;
					.num {
					    line-height: 30px;
					    font-weight: 700;
					    font-size: 20px;
					    color: #008bf7;
					}
				}
				li.fl {
				    float: left;
				}
				
			}
			.desc{
				margin-top: 25px;
				li{
					margin-top: 2px;
					padding: 20px;
					background: #f6f8f9;
					border-radius: 2px;
					.icon{
						width: 20px;
						height: 24px;
						margin-right: 20px;
						font-size: 20px;
					}
					.fl {
					    float: left;
					}
					p{
						overflow: hidden;
						em{
							  font-weight: 700;
							  font-style: normal;
						}
					}
				}
			}
		}
		.tags {
			position: relative;
			margin-top: 4px;
			font-size: 0;
			line-height: 0;
			width: 100%;
			white-space: nowrap;
			overflow-x: auto;
			overflow-y: hidden;
			.inner {
			    white-space: nowrap;
			    overflow-x: auto;
			    overflow-y: hidden;
				margin: 0;
				span {
				    height: 24px;
				    line-height: 24px;
				    font-size: 12px;
				    margin: 5px 5px 0 0;
					display: inline-block;
					padding: 0 8px;
					background: #edf1f4;
					border-radius: 1px;
				}
			}
		}
		
	}
	.mod .bd .tags .inner text {
	    display: inline-block;
	    height: 28px;
	    padding: 0 8px;
	    margin: 5px;
	    line-height: 28px;
	    background: #edf1f4;
	    border-radius: 1px;
	    font-size: 14px;
		margin: 8px 0px;
	}
	.mod .bd .types {
		margin: 0;
		.item {
		    width: 100%;
		    height: auto;
		    margin: 10px 0 0;
		    padding: 20px;
		    text-align: left;
		    box-sizing: border-box;
			position: relative;
			float: left;
			background: #f6f8f9;
			border-radius: 2px;
			line-height: 20px;
			.icon-group {
			    font-size: 0;
			    line-height: 0;
			}
			.icon {
			    display: inline-block;
			    width: auto;
			    height: 10px;
			    margin-top: 0px;
			    font-size: 30px;
			    text-align: center;
			    line-height: 10px;
			}
			.name {
			    font-weight: 700;
			}
			.zishen{
				margin-top: 15px;
			}
			.desc{
				margin-top: 0;
			}
			.icon-dui1{
				position: absolute;
				top: 10px;
				right: 10px;
				font-size: 20px;
				color: #008bf7;
				display: block;
			}
			.desc {
			    color: rgba(9,34,53,.5);
			}
		}
		.item.cur {
		    background: #cce8fd;
		}
	}
	.mod .bd .yuncheng{
		margin-top: 20px;
	}
	.mod .bd .types i.icon-duanqi{
		margin: 10px 0 20px 0px;
		padding-top: 20px;
	}
	.mod .bd .types i.icon-longtime{
		margin: 10px 0 20px 0px;
		
	}
	.mod .bd .types i.icon-shou{
		margin: 10px 0 20px 0px;
	}
	.mod .requirement{
		 li {
		    margin-top: 10px;
			.icon {
			    margin-right: 10px;
			}
			.fl {
			    float: left;
			}
		}
	}
</style>
