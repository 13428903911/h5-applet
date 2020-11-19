<template>
	<view class="mod">
		<view class="hd cl"><h3 class="title">工作保障</h3></view>
		<view class="bd">
			<view class="indemnification cl">
				<img src="@/static/images/ptbz.png" class="fl"> 
				<ul class="list fl">
					<li class="cl">
						<i class="icon iconfont icon-dui1 fl"></i> 
						<view class="text">
							<p class="fl"><em>金斗云工作管理工具</em></p> 
							<p class="remark fl">记录工作点滴，记录每一分努力去了解</p>
						</view>
					</li> 
					<li class="cl">
						<i class="icon iconfont icon-dui1 fl"></i> 
						<view class="text">
							<p class="fl"><em>金斗云资金支付工具</em></p>
							<p class="remark fl">您可实时申请结算，雇主审核后工资实时到账</p>
						</view>
					</li> 
					<li class="cl">
						<i class="icon iconfont icon-dui1 fl"></i> 
						<view class="text">
						 <p class="fl"><em>金斗云沟通管理工具</em></p>
						 <p class="remark fl">记录您与雇主的约定，保障双方权益</p>
						</view>
					</li>
				</ul>
				<view style="clear: both;"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
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
			.indemnification {
			    margin-top: 10px;
			    background: #f6f8f9;
			    padding: 30px;
			    border-radius: 2px;
				img {
				    width: 100px;
				    height: 100px;
				    margin-right: 30px;
				}
				.list {
				    margin-top: 20px;
					li {
					    margin-top: 10px;
						.icon {
						    margin-right: 10px;
						    font-size: 20px;
						    color: #008bf7;
						}
						.text {
						    overflow: hidden;
							em{
								font-weight: 700;
								font-style: normal;
							}
							.remark {
							    color: #9ca6ae;
							}
						}
					}
				}
				.fl {
				    float: left;
				}
			}
		}
	}
</style>
