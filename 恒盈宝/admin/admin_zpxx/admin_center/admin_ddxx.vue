<template>
	<view class="box box-order">
		<view class="steps">
			<view class="fl done">
				<view class="num"><i class="icon iconfont">&#xe625;</i></view>
				<p class="text">签约</p>
			</view>
			<!-- <view class="fl done">
				<view class="num"><i class="icon iconfont">&#xe625;</i></view>
				<p class="text">预付款</p>
			</view> -->
			<view class="fl done">
				<view class="num"><i class="icon iconfont">&#xe625;</i></view>
				<p class="text">人才工作</p>
			</view>
			<view class="fl done">
				<view class="num"><i class="icon iconfont">&#xe625;</i></view>
				<p class="text">结算</p>
			</view>
			<view class="fl done cur">
				<view class="num"><i class="icon iconfont">&#xe625;</i></view>
				<p class="text">完成</p>
			</view>
			<view style="clear: both;"></view>
		</view>
		<view class="mod">
			<view class="mod-hd"><h2 class="title">订单信息</h2></view>
			<view class="mod-bd flex">
				<view class="cont">
					<!-- <dl class="cl"><dt class="fl">订单编号：</dt> <dd>2020110417452405072</dd></dl> -->
					<dl class="cl"><dt class="fl">创建时间：</dt> <dd>{{aimMsge.create_time}}</dd></dl>
					<dl class="cl"><dt class="fl">雇主：</dt> <dd>{{aimMsge.publisher}}</dd></dl>
				</view>
			</view>
		</view>
		<view class="mod">
			<view class="mod-hd"><h2 class="title">合同信息</h2></view>
			<view class="mod-bd flex">
				<view class="cont">
					<dl class="cl">
						<dt class="fl">合同类型：</dt> 
						<dd>{{aimMsge.income_method}}</dd>
					</dl> 
					<dl class="cl">
						<dt class="fl">合同金额：</dt>
						<dd>{{aimMsge.price}}</dd>
					</dl> 
					<dl class="cl">
						<dt class="fl">每周时长限制：</dt> 
						<dd>{{aimMsge.working_hours}}</dd>
					</dl>
				</view> 
			<!-- <view class="btn-group">
				<span class="btn-text">查看合同</span>
			</view> -->
		</view>
		</view>
		
		
		<view class="mod">
			<view class="mod-hd"><h2 class="title">预付信息</h2></view>
			<view class="mod-bd flex">
				<div class="cont">
					<view class="oul">
						<li><view><p class="num">¥ 0</p> <p class="text">已结算金额</p></view></li> 
						<li><view><p class="num">¥ 0</p> <p class="text">待结算金额</p></view></li>
					</view>
				</div>
			<div class="btn-group"><a @click="ckgz" class="btn-text">查看工作</a></div>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				apply_id:this.appId,
				aimMsge:{}
			}
		},
		props:{
			appId:''
		},
		mounted() {
			this.indentDetails()
		},
		methods: {
			ckgz(){
				wx.navigateTo({url:'/admin/admin_log/admin_log?apply_id='+this.apply_id})
			},
			indentDetails(){
				this.$http.post('/public/index.php/api/Work/getOrderInfo',{
					apply_id:this.apply_id
				}).then(res => {
					if(res.data.code == 1){
						this.aimMsge = res.data.data
						console.log(this.aimMsge)
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">

.box {
    padding: 30px 1rem;
	background: #fff;
}

.box-order{
	.steps {
	    margin-bottom: 30px;
	    text-align: center;
		.done{
			position: relative;
			padding: 0 .42rem!important;
			text-align: center;
			color: #9ca6ae;
			.num {
			    background: #bfe2fd;
			    color: #008bf7;
				position: relative;
				width: 40px;
				height: 40px;
				margin: 0 auto;
				line-height: 40px;
				border-radius: 40px;
				font-family: Montserrat-Regular;
				z-index: 1;
				.icon {
				    font-size: 20px;
					font-weight: 400;
				}
			}
			.text {
			    margin-top: 10px;
			}
		}
		.done:not(:first-child):before {
		    content: "";
		    position: absolute;
		    top: 20px;
		    width: 100%;
		    right: 50%;
		    border-top: 1px solid #edf1f4;
		}
		.done:before {
		    border: 1px solid #008bf7;
		}
		.cur:before {
		    border: 1px solid #008bf7;
			 
		}
		.cur .num {
			    background: #008bf7;
			    color: #fff;
			}
		.fl {
		    float: left;
		}
	}
	.mod {
	    padding: 20px 0px;
		border-top: 1px solid #edf1f4;
		.mod-hd .title {
		    font-size: 16px;
		    line-height: 26px;
			font-weight: 700;
		}
		.mod-bd {
		    margin-top: 20px;
			.cont dl dt {
			    width: 100px;
			    margin-right: 10px;
			    color: #9ca6ae;
			}
			.cont dl dd {
			    overflow: hidden;
			}
			.cont dl:not(:first-child) {
			    margin-top: 10px;
			}
			.cont .oul{
				display: flex;
				justify-content: space-between;
				 li {
				    display: -ms-flexbox;
				    display: flex;
				    -ms-flex-pack: center;
				    justify-content: center;
				    -ms-flex-align: center;
				    align-items: center;
				    height: 110px;
				    background: #f6f8f9;
				    border-radius: 4px;
				    text-align: center;
					width: 48%;
					margin: 0;
					.num {
					    font-size: 16px;
					    font-family: Montserrat-Regular;
					    font-weight: 700;
					}
					.text {
					    color: rgba(9,34,53,.5);
					}
				}
			}
			.fl {
			    float: left;
			}
			.btn-group {
			    width: 100%;
			    margin-top: 20px;
			    padding-top: 20px;
			    border-top: 1px dotted #edf1f4;
			    text-align: right;
				margin-right: 70px;
				.btn-text {
				    width: 80px;
				    line-height: 20px;
					display: inline-block;
					text-align: center;
					color: #008bf7;
					cursor: pointer;
				}
			}
		}
		.flex {
		    display: block;
		}
	}
}

</style>
