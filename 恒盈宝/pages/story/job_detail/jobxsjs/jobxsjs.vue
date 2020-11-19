<template>
	<view class="mod">
		<view class="hd cl">
			<h3 class="title">{{Jobxsjs.income_method}}</h3>
		</view>
		<view class="bd">
			<ul class="salary cl">
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
			</ul> 
			<ul class="desc">
				 
				<li>
					<i class="icon iconfont icon-riqiqishu fl"></i> 
					<p><em>雇佣周期：</em>{{Jobxsjs.hiring_cycle}}</p>
				</li> 
				<li><i class="icon iconfont icon-jiesuanfangshishoufutaizhang fl"></i> <p><em>结算方式：</em>{{Jobxsjs.payment_type}}</p></li>
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
			Jobxsjs:{
				type:Object,
			}
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
}
</style>
