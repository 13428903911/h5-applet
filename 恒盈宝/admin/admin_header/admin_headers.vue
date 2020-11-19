<template>
	<view>
		
		<view class="navBox" :class="active? 'add_class' : ''">
			<!-- <uni-drawer :visible="true" :mask="false" ref="drawer"> -->
				 <i class="icon iconfont" style="font-size: 30px;color:#008bf7;margin-top: 21px;" id="iconNav" @click="drawerChang(1)">&#xe62e;</i>
			      <view @click="gaiyao()" class="admin_nbr" style="padding-top: 40px;">
					  <span class="left"><i class="icon iconfont" style="margin-top:15px;font-size: 22px;color:#9ca6ae">&#xe606;</i></span>
					  <span class="center">概要</span>
					  <span class="right"><i class="icon iconfont">&#xe605;</i></span>
				  </view>
				 
				 <view @click="zwgl()" class="admin_nbr">
				  		<view class="left"><i class="icon iconfont" style="margin-top:15px;font-size: 22px;color:#9ca6ae">&#xe6d0;</i></view>
				  		<view class="center">职位管理</view>
				  	    <view class="right"><i class="icon iconfont">&#xe605;</i></view>
				  </view>
				
					<view @click="htdd()" class="admin_nbr">
							<view class="left"><i class="icon iconfont" style="margin-top:15px;font-size: 22px;color:#9ca6ae">&#xe6f8;</i></view>
							<view class="center">合同订单</view>
						    <view class="right"><i class="icon iconfont">&#xe605;</i></view>
					</view>
					<view @click="gzgl()" class="admin_nbr">
							<view class="left"><i class="icon iconfont" style="margin-top:15px;font-size: 22px;color:#9ca6ae">&#xe638;</i></view>
							<view class="center">工作管理</view>
						    <view class="right"><i class="icon iconfont">&#xe605;</i></view>
					</view>
					<view @click="zijin()" class="admin_nbr">
							<view class="left"><i class="icon iconfont" style="margin-top:15px;font-size: 22px;color:#9ca6ae">&#xe77f;</i></view>
							<view class="center">资金</view>
						    <view class="right"><i class="icon iconfont">&#xe605;</i></view>
					</view>
					<!-- <view @click="evaluate()" class="admin_nbr">
							<view class="left"><i class="icon iconfont" style="margin-top:15px;font-size: 22px;color:#9ca6ae">&#xe637;</i></view>
							<view class="center">评价</view>
						    <view class="right"><i class="icon iconfont">&#xe605;</i></view>
					</view>
					<view @click="discounts()" class="admin_nbr">
							<view class="left"><i class="icon iconfont" style="margin-top:15px;font-size: 22px;color:#9ca6ae">&#xed0b;</i></view>
							<view class="center">优惠劵</view>
						    <view class="right"><i class="icon iconfont">&#xe605;</i></view>
					</view>
					<view @click="download()" class="admin_nbr">
							<view class="left"><i class="icon iconfont" style="margin-top:15px;font-size: 22px;color:#9ca6ae">&#xe603;</i></view>
							<view class="center">下载效率管理工具</view>
						    <view class="right"><i class="icon iconfont">&#xe605;</i></view>
					</view> -->
			<!-- </uni-drawer> -->
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active:false
			}
		},
		methods: {
			drawerChang: function(index) {
				this.active = !this.active
			},
			gaiyao(){
				wx.navigateTo({
					url:'/admin/admin_index/admin_index'
				})
			},
			zwgl(){
				wx.navigateTo({
					url:'/admin/admin_jobs/admin_jobs'
				})
			},
			htdd(){
				wx.navigateTo({
					url:'/admin/admin_orders/admin_orders'
				})
			},
			gzgl(){
				wx.navigateTo({
					url:'/admin/admin_management/admin_management'
				})
			},
			
			zijin(){
				wx.navigateTo({
					url:'/admin/admin_funds/admin_funds'
				})
			},
			evaluate(){
				wx.navigateTo({
					url:'/admin/admin_evaluate/admin_evaluate'
				})
			},
			download(){
				wx.navigateTo({
					url:'/admin/admin_download/admin_download'
				})
			},
			discounts(){
				wx.navigateTo({
					url:'/admin/admin_discounts/admin_discounts'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
/deep/ .navBox{
		    position: fixed;
		    top: 43px;
			left: -220px;
		    width: 220px;
		    bottom: 0;
			z-index: 99;
		    background-color: #ffffff;
			box-shadow: 0 0 10px 0 rgba(9,34,53,.05);
		    -webkit-transition: -webkit-transform 0.3s ease;
		    transition: -webkit-transform 0.3s ease;
		    transition: transform 0.3s ease;
		    transition: transform 0.3s ease, -webkit-transform 0.3s ease;
	}
    /deep/ .add_class{
		left:0 !important;
	}
	#iconNav{
		display: block;
		 position: absolute;
		 top:0;
		 right:0;
		 margin-right: -31px;
	}
	.navBox{

	}
	.admin_nbr{
		display: flex;
		justify-content: space-between;
		padding:20px;
		font-size: 14px;
		color: #092235;
		.left{
			flex:3;
		}
		.center{
			flex:10;
		}
		.right{
			flex:0;
		}
	}
.bg-gray{
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		line-height: 70px;
		box-sizing: border-box;
		z-index: 999;
		height: 50px;
		line-height: 50px;
		padding: 0 15px;
		background: #fff;
		.fl {
		    float: left;
		}
		.logo{
			img{width: 109px;height: 32px;}
			.icon {
			    margin-left: 9px;
			    color: #fff;
			    vertical-align: super;
			    font-size: 24px;
				color: #9ca6ae;
			}
		  }
		.btn-group {
		    margin-top: 10px;
			.btn {
			    width: auto;
			    height: 30px;
			    padding: 0 10px;
			    line-height: 30px;
			    font-size: 14px;
				cursor: pointer;
				box-sizing: border-box;
				text-align: center;
				border: none;
				border-radius: 2px;
				display: inline-block;
			}
			.btn.btn-blue {
			    background: #008bf7;
			    color: #fff;  
				margin-right: 10px;
			}
			.btn.btn-green {
			    background: #2ed573;
				color: #fff;
				
			}
		}
		.fr {
		    float: right;
		}
		.header-drawer {
		    display: none;
		    width: 100%;
		    box-sizing: border-box;
		    overflow-y: auto;
			position: absolute;
			top: 44px;
			left: 0;
			background: #FFFFFF;
			.nav{
				padding: 0 20px;
				li {
				    height: 30px;
				    margin: 20px 0;
				    line-height: 30px;
				    font-size: 16px;
					position: relative;
					cursor: pointer;
					a {
					    color: #092235;
						font-size: 16px;
					}
				}
				li.cur a {
				    color: #008bf7;
				}
				li.hr {
				    height: 0;
				    margin: 20px 0;
				    border-top: 1px solid #eee;
				}
			}
		}
		.active{display: block;padding: 0px 0 405px;}
	}
	.header.switch {
	    // background: #fff;
	    box-shadow: 0 0 10px 0 rgba(9,34,53,.05);
	    transition: all .5s;
	}
}	
</style>
