<template>
	<view class="mod">
				<view class="hd cl">
					<h3 class="title">职位信息</h3>
				</view>
				<view class="bd"><view><pre>工作职责：
	{{jowDuty.description}}</pre>
				</view>
				 <view class="quota">
					 <i class="icon iconfont icon-rencai1 fl"></i>本职位招聘<text class="text">{{jowDuty.people_limit}}名</text>人才
				 </view></view>
			</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			jowDuty:{
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
</style>
