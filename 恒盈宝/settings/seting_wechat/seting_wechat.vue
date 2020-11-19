<template>
	<view class="header">
		<Adminheader></Adminheader>
		<Settings></Settings>
		<view class="box box-wechat">
			<view class="box-hd"><h2 class="title">绑定微信</h2></view>
		<!-- 	<view class="box-bd">
				<view class="bind-none">
					<view class="wrap-pc">
						<h3 class="title">微信扫码完成绑定</h3> 
						<view class="code">
							<img src="/static/img/qrcode-disabled.34879b6.png">
						</view> 
						<view class="step">
							<li class="li"><i class="icon iconfont iconlogin-scan"></i>微信扫码</li> 
							<li class="li"><i class="icon iconfont iconlogin-follow"></i>关注公众号</li> 
							<li class="li"><i class="icon iconfont iconstep-complete"></i>完成绑定</li>
						</view>
					</view>
				</view>
			</view> -->
			<div class="wrap-mb"><img src="/static/images/tips-open-in.png"> <p class="text">请在电脑网页或微信客户端打开</p></div>
		</view>
	</view>
</template>

<script>
	import Settings from '../settings.vue'
	import Adminheader from '../../admin/admin_header/admin_header'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			Settings,
			Adminheader
		}
	}
</script>

<style lang="scss" scoped>
.header{
	background: #f6f8f9;
	min-height: 83.2vh;
	padding-top: 80px;
}
.box {
    padding: 30px;
	background: #FFFFFF;
	.box-hd {
	    display: -ms-flexbox;
	    display: flex;
	    -ms-flex-pack: justify;
	    justify-content: space-between;
	    -ms-flex-align: end;
	    align-items: flex-end;
	    line-height: 26px;
		.title {
		    font-weight: 700;
		    font-size: 20px;
		}
	}
	.box-bd {
	    margin-top: 10px;
		.bind-none {
		    text-align: center;
			.wrap-pc {
			    margin: 50px 0 20px;
				.title {
				    font-size: 16px;
				    font-weight: 700;
				}
				
			}
			.code {
			    margin-top: 20px;
				img {
				    width: 160px;
				    height: 160px;
				}
			}
			.step {
			    margin-top: 30px;
			    text-align: center;
				.li {
				    display: inline-block;
					.icon {
					    margin-right: 10px;
					    font-size: 20px;
					    color: #9ca6ae;
					    vertical-align: middle;
					}
				}
			}
		}
	}
}
.wrap-mb {
    display: block;
    margin-top: 40px;
    text-align: center;
	img {
	    width: 130px;
	}
	.text {
	    margin-top: 30px;
	    font-size: 16px;
	    font-weight: 700;
	}
}
</style>
