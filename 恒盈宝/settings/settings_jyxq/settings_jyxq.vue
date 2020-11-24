<template>
	<view class="header">
		<view class="header_top">
			<view class="top">
				<img src="/static/images/yuan.jpg" alt="">
				<span>6228****4277</span>
			</view>
			<view class="bottoms">
				<span class="fl">交易金额</span>
				<span class="fr">+500.00</span>
			</view>
			<view style="clear: both;"></view>
		</view>
		<view class="xian"></view>
		<view class="header_center">
			<view class="bottoms">
				<span class="fl">交易时间</span>
				<span class="fr">2017-10-04</span>
				<view style="clear: both;"></view>
			</view>
			<view class="bottoms">
				<span class="fl">付款方</span>
				<span class="fr">深圳市锐思华创技术有限公司</span>
				<view style="clear: both;"></view>
			</view>
			<view class="bottoms">
				<span class="fl">付款账户</span>
				<span class="fr">559895664568</span>
				<view style="clear: both;"></view>
			</view>
			<view class="bottoms">
				<span class="fl">交易类型</span>
				<span class="fr">转账</span>
				<view style="clear: both;"></view>
			</view>
			<view class="bottoms">
				<span class="fl">本次余额</span>
				<span class="fr">4556</span>
				<view style="clear: both;"></view>
			</view>
			<view class="bottoms">
				<span class="fl">交易附言</span>
				<span class="fr">网上代发代扣</span>
				<view style="clear: both;"></view>
			</view>
		</view>
		<view class="" style="text-align: right;">
			<el-button @click="fanhui" type="primary">返回</el-button>
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
			fanhui(){
				 uni.reLaunch({url: '/settings/settings_jyzd/settings_jyzd'})
			}
		}
	}
</script>

<style scoped lang="scss">
/deep/ .el-button--primary{
	margin-top: 80px;
}	
.header{
	padding: 0 20px;
	margin-top: -20px;
	.header_top{
		.top{
			img{
				width: 6%;
				vertical-align: bottom;
			}
			span{
				margin-left: 10px;
			}
		}
		.bottom{
			margin-top: 15px;
			.fl{
				float: left;
			}
			.fr{
				float: right;
				font-size: 24px;
				color: yellowgreen;
				margin-top: -6px;
			}
		}
	}
	.xian{
		height: 10px;
		background: #4f81bd;
		margin-top: 15px;
	}
	.bottoms{
		margin-top: 15px;
		.fl{
			float: left;
		}
		.fr{
			float: right;
		}
	}
}
</style>
