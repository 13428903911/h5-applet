<template>
	<view class="job">
		<Header></Header>
		<!-- 头部 -->
		<view class="page-hd">
			 <h2 class="title">{{Detailsll.name}}</h2>
			<view class="meta cl">
				<span class="fl"><em>所属领域</em>:{{Detailsll.position}}</span>
				<span class="fl"><em>雇主在线时间</em>：{{Detailsll.publisher}}</span>
			</view>
		</view>	
		
		
		<!-- 收入 -->
		<!-- 预计月薪 -->
		<view class="mod" v-if="Detailsll.income_method == '预计月薪'">
			<view class="hd cl">
				<h3 class="title">{{Detailsll.income_method}}</h3>
			</view>
			<view class="bd">
				<ul class="salary cl">
					<li class="fl">
						<p>每小时收入</p>
						 <p class="num">{{Detailsll.price}}</p>
					</li> 
					<li class="fl">
						<p>预计每月收入</p> 
						<p class="num">{{Detailsll.expect_month}}</p>
					</li> 
					<li class="fl">
						<p>每日工作时长</p> 
						<p class="num">{{Detailsll.working_hours}}</p>
					</li>
					<view style="clear: both;"></view>
				</ul> 
				<ul class="desc"> 
					<li>
						<i class="icon iconfont icon-riqiqishu fl"></i> 
						<p><em>雇佣周期：</em>{{Detailsll.hiring_cycle}}</p>
					</li> 
					<li><i class="icon iconfont icon-jiesuanfangshishoufutaizhang fl"></i> <p><em>结算方式：</em>{{Detailsll.payment_type}}</p></li>
				</ul>
			</view>
		</view>
		<!-- 项目预算 -->
		<view class="mod" v-else>
			<view class="hd cl" >
				<h3 class="title">{{Detailsll.income_method}}</h3>
				 <p class="num" style="font-weight: 700;font-size: 20px;color: #008bf7;">{{Detailsll.budget}}</p>
			</view>
			<view class="bd">
				<ul class="desc">
					<li>
						<i class="icon iconfont icon-riqiqishu fl"></i> 
						<p><em>雇佣周期：</em>{{Detailsll.hiring_cycle}}</p>
					</li> 
					<li><i class="icon iconfont icon-jiesuanfangshishoufutaizhang fl"></i> <p><em>结算方式：</em>{{Detailsll.payment_type}}</p></li>
				</ul>
			</view>
		</view>
		
		<!-- 职位信息 -->
		<view class="mod">
					<view class="hd cl">
						<h3 class="title">职位信息</h3>
					</view>
					<view class="bd"><view><pre>{{Detailsll.description}}</pre><!--  -->
					</view>
					 <view class="quota">
						 <i class="icon iconfont icon-rencai1 fl"></i>本职位招聘<text class="text">{{Detailsll.people_limit}}名</text>人才
					 </view></view>
				</view>
				
				
		<!-- 职位要求、雇佣时长 -->
		<view class="mod">
			<view class="hd cl"><h3 class="title">职位要求</h3></view>
			<view class="bd">
				<h4>投递者所属职业：</h4>                     
				<view class="tags"><view class="inner cl"><span>{{Detailsll.occupate}}</span></view></view>
				<h4 style="margin-top:10px">投递者需要具备的专业技能：</h4>
				<view class="tags"><view class="inner cl" v-for="item in Detailsll.skill" :key="item.id"><text style="display: inline-block;">{{item}}</text> </view></view> 
				<h4>投递者需要达到的技能等级：</h4>
				<ul class="types types-bg cl"><li class="item"><i class="icon iconfont icon-16"></i> <view class="icon-group cl"><i class="icon iconfont iconlevel-price"></i></view> <p class="name">普通级</p> <p class="desc">工作经验 0-3 年        
				<br>适合清晰/简单的工作任务</p></li> <li class="item cur"><i class="icon iconfont icon-dui1"></i> <view class="icon-group cl"><i class="icon iconfont icon-16"></i> <i class="icon iconfont icon-16"></i></view> <p class="name zishen">{{Detailsll.skill_grade}}</p> <p class="desc">工作经验 3-5 年
				<br>适合难度适中的工作任务</p></li> <li class="item"> <view class="icon-group cl"><i class="icon iconfont icon-16"></i> <i class="icon iconfont icon-16"></i> <i class="icon iconfont icon-16"></i></view> <p class="name zishen">专家级</p> <p class="desc">工作经验 5 年以上
				<br>适合有一定门槛的工作任务</p></li><view style="clear: both;"></view></ul>
				<h4 class="yuncheng">远程雇佣方式：</h4>
				
				<ul class="types cl" v-if="Detailsll.hiring_type == '长期雇佣'"><li class="item cur"><i class="icon iconfont icon-dui1"></i> <view class="icon-group cl"><i class="icon iconfont icon-duanqi"></i></view>
				 <p class="name">{{Detailsll.hiring_type}}</p> <p class="desc"> 雇用时长一般在6个月以上</p></li> <li class="item"><i class="icon iconfont"></i>
					<view class="icon-group cl"><i class="icon iconfont icon-longtime"></i></view> <p class="name">短期雇用</p> <p class="desc">雇用时长一般在6个月以内 </p></li> <li class="item"><i class="icon iconfont"></i> 
					<view class="icon-group cl"><i class="icon iconfont icon-shou"></i></view> <p class="name">一次性工作</p> <p class="desc">一次性完成工作并结算</p></li>
					<view style="clear: both;"></view>
				</ul>
				
				<ul class="types cl" v-else if="Detailsll.hiring_type == '一次性工作'"><li class="item cur"><i class="icon iconfont icon-dui1"></i> <view class="icon-group cl"><i class="icon iconfont icon-duanqi"></i></view>
				 <p class="name">{{Detailsll.hiring_type}}</p> <p class="desc">一次性完成工作并结算</p></li> <li class="item"><i class="icon iconfont"></i>
					<view class="icon-group cl"><i class="icon iconfont icon-longtime"></i></view> <p class="name">短期雇用</p> <p class="desc">雇用时长一般在6个月以内 </p></li> <li class="item"><i class="icon iconfont"></i> 
					<view class="icon-group cl"><i class="icon iconfont icon-shou"></i></view> <p class="name">长期雇佣</p> <p class="desc">雇用时长一般在6个月以上</p></li>
					<view style="clear: both;"></view>
				</ul>
				
				<h4 class="yuncheng">投递者需要满足的条件：</h4>
					<view style="clear: both;"></view></li><li class="cl" style="display: flex;"><i class="icon iconfont icon-location fl" style="padding-right: 5px;"></i> <p class="fl">国家或地区要求：{{Detailsll.city }}</p><view style="clear: both;"></view></li>
					<view style="clear: both;"></view>                                                                                                 
			</view>
		</view>
	
		
		<Jobzyet></Jobzyet>
		<Jobgzbz></Jobgzbz>
		<!-- 职位推荐 -->
			<view class="mod mod-jobs hide-jobs" v-for="(item,index) in RedJow" :key="item.id" @click="details(item)">
				<view class="hd cl"><h3 class="title">{{item.income_method}}</h3></view>
				<view class="bd">
					<view class="hot-list">
						<!-- 第一个 -->
						<view class="item cl">
							<a>
								<view class="item-side fl">
									<p class="num">{{item.price}}</p> 
									<p class="t-gray">{{item.income_method}}</p>
								</view> 
								<view class="item-main">
									<h3 class="t-default"><!---->{{item.name}}</h3>
									 <p class="t-gray"><span style="padding-right: 15px;">{{item.hiring_type}}</span> <span>{{item.working_hours}}</span><!----></p> 
									 <view class="tags">
										 <view style="display: inline-block;" class="inner cl t-gray" v-for="items in item.skill"><span>{{items}}</span>
										 </view>
									 </view> 
								<view class="meta"></view></view></a>
						</view>
					</view>
				</view>
			</view>
			<view class="mod mod-more"><span class="btn-text">点击查看更多</span></view>
		<!-- <Jofooter></Jofooter>
		<Jobanniu></Jobanniu>-->
		<view class="footer">
			 <el-button type="primary" class="btn" @tap="deliveryPosition" v-if="is_send == 0">投递职位</el-button>
			 <el-button type="primary" class="btn noDeliveryPosition" @tap="deliveryPosition" v-else disabled>已投递</el-button>
		</view>
	</view>
</template>

<script>
	import Header from '@/pages/header/header.vue'
	import Jobzyet from './jobzyet/jobzyet.vue'
	import Jobgzbz from './jobgzbz/jobgzbz.vue'
	// import Jobzwtj from './jobzwtj/jobzwtj.vue'
	// import Jofooter from './jobfooter/jobfooter.vue'
	// import Jobanniu from './jobanniu/jobanniu.vue'
	export default {
		data() {
			return {
				RedJow:[],//推荐职位数据
				Detailsll:{},
				task_id:'',
				id: '',//任务id
				is_send:'',//是否已投递过简历  0未投递过  1已投递过
				dqitem:{}
			}
		},
		
		methods: {
			//详情
			detail(income_method){
				console.log(this.task_id)
				 this.$http.post('public/index.php/api/Work/getWorkInfo',{
					task_id:this.task_id
				 }).then(res => {
					this.Detailsll = res.data.data
					console.log(this.Detailsll)
				 })	
			},
			postRed() {//查询
				this.$http.post('/public/index.php/api/Work/positionRecommend',{
					task_id:this.task_id,
					page:1,
					limit:15
				}).then(res => {
					this.RedJow = res.data.data.row
				})
			},
			details(item) {//item当前页那一项数据
			wx.navigateTo({url:'/pages/job_detail/job_detail?id='+item.id})
				this.Detailsll = item
				
			},
			deliveryPosition() {//投递职位
				this.$http.post('/public/index.php/api/Work/sendResume',{
					task_id:this.task_id,
					user_id:this.$store.state.userInfo.user_id,
					expand_content:''
				}).then(res => {
					if(res.data.code == 1){
						let optionObj = JSON.stringify(this.RedJow)
						uni.reLaunch({url: '/pages/job_tdzw/job_tdzw?optionObj='+optionObj})
					}
				})
			},
			queryTask(){//查看任务是否投递
				this.$http.post('/public/index.php/api/Work/checkIsSend',{
					task_id:this.task_id,
					user_id:this.$store.state.userInfo.user_id,
				}).then(res => {
					this.is_send = res.data.data.is_send
				})
			}
		},
		onLoad(options) {
			
			// this.dqitem = JSON.parse(options.option)
			// this.task_id = this.dqite.id
			this.task_id = options.id
			this.postRed()
			this.detail()
			this.queryTask()	
			
			
			
		},
		components:{
			Header,
			Jobzyet,
			Jobgzbz,
			// Jobzwtj,
			// Jofooter,
			// Jobanniu
		}
	}
</script>

<style lang="scss" scoped >
.job{
	font-size:28rpx;
	margin-top: 50px;
}
/* 头部样式 */
.page-hd {
		padding: 0rpx 40rpx;
		.title {
		    font-size: 24px;
			font-weight: 700;
		}
		.meta {
			padding-bottom: 10px;
		    margin-top: 10px;
		    line-height: 24px;
			span {
			    margin-right: 20px;
			    font-size: 14px;
				em {
				    font-weight: 700;
					font-style: normal;
				}
			}
		}
	}
	
	
/* 收入 */
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
			margin-top: 20px;
			display:flex;
			justify-content: space-between;
			li {
				
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
}




/* 职位信息 */
.mod:not(:first-child) {
		border-top: 1px solid #edf1f4;
	}
	.mod{
		line-height: 24px;
		padding: 20px;
		.title {
		    font-size: 18px;
		    line-height: 28px;
		}
		}
		.bd {
		    margin-top: 20px;
			  pre {
				white-space: pre-wrap;
				word-wrap: break-word;
				font-family: inherit;
				word-break: break-all;
				font-size: 13px;
				.quota {
					margin: 20px 0;
					font-weight: 700;
					
				}
			}
			.quota .icon{
				margin-right: 10px;
				font-size: 20px;
				vertical-align: middle;
			}
			.quota .text{
			    margin: 0 5px;
			    color: #008bf7;
			    font-weight: 700;
				font-style: normal;
			}
	}
	
	
	
	/* 职位要求，雇佣时长 */
	.mod:not(:first-child) {
		border-top: 1px solid #edf1f4;
	}
	.mod{
		line-height: 24px;
		padding: 20px;
		.title {
		    font-size: 18px;
		    line-height: 28px;
		}
		.bd {
		    margin-top: 20px;
			.salary {
			    margin-top: -20px;
				li {
				    // margin: 20px 32px 0 0;
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
				display: inline-block;
			    white-space: nowrap;
			    overflow-x: auto;
			    overflow-y: hidden;
				padding-right: 10px;
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
	
	
	
	/* 职位推荐 */
	a{
		text-decoration: none;
		color: #008bf7;
	}
	.mod:not(:first-child) {
			border-top: 1px solid #edf1f4;
		}
		.mod{
			line-height: 24px;
			padding: 20px;
			.title {
			    font-size: 18px;
			    line-height: 28px;
			}
			.bd {
			    margin-top: 20px;
				.salary {
				    margin-top: -20px;
					li {
					    // margin: 20px 32px 0 0;
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
	
				.hot-list{
					overflow: hidden;
					position: relative;
					line-height: 24px;
					margin-top: -10px;
					.item {
					    border-top: 1px solid #edf1f4;
					    border-bottom: none;
						a {
						    padding: 20px 0;
							margin: 0;
							display: block;
						}
						.item-side {
						    margin-right: 10px;
							width: 100px;
							.t-gray {
							    color: #9ca6ae;
							}
						}
						.fl {
						    float: left;
						}
						.item-main {
						    padding: 0;
							position: relative;
							overflow: hidden;
							.t-default {
							    color: #092235;
							}
							.t-gray {
							    color: #9ca6ae;
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
					}
					.item:first-child {
					    border-top: none;
					}
				}
			}
		}
		.mod-more {
		    text-align: center;
			margin-bottom:80px;
			border-bottom: 1px solid #edf1f4;
			.btn-text {
			    display: inline-block;
			    text-align: center;
			    color: #008bf7;
			    cursor: pointer;
			    line-height: 20px;
				
			}
		}
		.mod {
		    border-top: 1px solid #edf1f4;
		}
		.mod.mod-about {
		    padding-top: 30px;
		    border-top: 1px solid #edf1f4;
		}
		.footer{
			background-color: #FFFFFF;
			width: 89%;
			padding: 20px;
			position: fixed;
			bottom: 0;
			.btn{
				width: 100%;
			}
			
		}
		.noDeliveryPosition{
			background-color: #F6F8F9;
			color: #9CA6AE;
			border:none;
		}
</style>
