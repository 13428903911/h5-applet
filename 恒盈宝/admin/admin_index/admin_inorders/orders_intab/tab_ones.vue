<template>
	<!-- <view class="data-empty">
		<img src="/static/images/order_a.png"> 
		<p>您还没有合同订单</p>
	</view> -->
	<view class="item">
		<view class="item-hd cl">
			<view class="fl">
				<span class="date fl">2020-11-04</span> 
				<!-- <span class="id fl t-gray">订单编号：2020110417452405072</span> -->
			</view> 
			<view class="fr">
				<span class="name fl"><span class="t-gray">雇主：</span>qiRGFToV</span> 
				<!-- <a class="btn-text btn-im fl">在线沟通</a> -->
				<view style="clear: both;"></view>
			</view>
		</view>
		<view class="item-bd">
			<view class="table">
				<view class="cell contract" style="padding: 0px;">
					<view class="inner" style="padding: 20px;">
						<p class="title">
							<a @click="zpxx">招远程UI设计，APP UI设计</a>
						</p> 
						<p class="t-gray">按时计费：1 元/小时</p>
					</view>
					<!-- <view class="cell status fl">
						<view class="inner">
							<span>待评价</span> 
							<a class="btn btn-blue">去评价</a>
						</view>
					</view> -->
					<view style="clear: both;"></view>
				</view>
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
			zpxx(){
				wx.navigateTo({
					url:'/admin/admin_zpxx/admin_zpxx'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.data-empty {
    padding: 100px 0;
    text-align: center;
	img {
	    width: 120px;
	}
	p {
	    margin-top: 10px;
	}
}
.item {
    margin-top: 20px;
	.item-hd {
	    height: 40px;
	    background: #edf1f4;
	    padding: 8px 20px;
	    line-height: 24px;
	    box-sizing: border-box;
		.fl {
		    float: left;
		}
		.fr {
		    float: right;
		}
		.name {
		    max-width: 100px;
		    text-overflow: ellipsis;
		    overflow: hidden;
		    white-space: nowrap;
		}
		.btn-im {
		    margin-left: 10px;
			height: 24px;
			padding-left: 26px;
			background: url(/static/images/im-icon.gif) no-repeat 0 0;
			background-size: 24px 24px;
			line-height: 24px;
		}
		.btn-text {
		    display: inline-block;
		    text-align: center;
		    color: #008bf7;
		    cursor: pointer;
		}
	}
	.item-bd {
	    border: 1px solid #edf1f4;
		.cell {
		    display: block;
		    width: 100%;
		    height: auto;
		    padding: 20px;
		    box-sizing: border-box;
			.inner {
				.t-gray {
				    color: #9ca6ae;
				}
				.btn {
					width: 100px;
					margin-left: 20px;
				    display: inline-block;
				    height: 40px;
				    margin-top: 10px;
				    line-height: 40px;
				    text-align: center;
				    border: none;
				    border-radius: 2px;
				    cursor: pointer;
				    box-sizing: border-box;
				}
				.btn.btn-blue {
				    background: #008bf7;
				    color: #fff;
				}
			}
		}
		.cell:not(:first-child) {
		    border-left: none;
		    border-top: 1px solid #edf1f4;
		}
		.contract {
		    text-align: left;
			a {
			    color: #092235;
			}
		}
		.fl {
		    float: left;
		}
		.status {
		    text-align: right;
		}
	}
}
</style>
