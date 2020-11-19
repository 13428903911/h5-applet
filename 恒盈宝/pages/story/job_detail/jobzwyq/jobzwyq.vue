<template>
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
			 <p class="name">{{occupation.hiring_type}}</p> <p class="desc"> 雇用时长一般在6个月以上</p></li> <li class="item"><i class="icon iconfont"></i> 
				<view class="icon-group cl"><i class="icon iconfont icon-longtime"></i></view> <p class="name">短期雇用</p> <p class="desc">雇用时长一般在6个月以内 </p></li> <li class="item"><i class="icon iconfont"></i> 
				<view class="icon-group cl"><i class="icon iconfont icon-shou"></i></view> <p class="name">一次性工作</p> <p class="desc">一次性完成工作并结算</p></li>
				<view style="clear: both;"></view>
			</ul>
			<h4 class="yuncheng">投递者需要满足的条件：</h4>
			<ul class="requirement">
				
				<view style="clear: both;"></view></li><li class="cl"><i class="icon iconfont icon-location fl"></i> <p class="fl">国家或地区要求：{{occupation.city}}</p><view style="clear: both;"></view></li>
				<view style="clear: both;"></view>
			</ul>	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			occupation:{}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
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
