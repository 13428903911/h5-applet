<template>
	<view class="header">
		<Adminheader></Adminheader>
		<Settings></Settings>
		<view class="box box-email">
			<view class="w520">
				<view class="box-hd"><h2 class="title">绑定邮箱</h2></view>
				<view class="desc cl">
					<view class="text fl">
						<p class="t-gray">温馨提示：</p> 
						<p>绑定邮箱后可获取「每周项目进度」邮件通知，建议填写企业邮箱地址。</p>
					</view> 
					<img src="/static/images/mail-weekly.png" class="fr">
					<view style="clear: both;"></view>
				</view>
				<view class="info" v-show="showUpImg">
					<dl class="cl">
						<dt class="fl t-gray">已绑定邮箱：</dt> 
						<dd>1316462066@qq.com</dd>
					</dl> 
					<view class="btn-group"><span  @click="changeImg" class="btn btn-default">更换邮箱</span></view>
				</view>
				<form class="form-wrap" v-show="!showUpImg">
					<view class="form-group">
						<view class="label"><label>邮箱地址</label></view> 
						<view class="content">
							<input type="text" name="email" placeholder="输入邮箱地址" class="ipt-text" data-vv-scope="__global__" aria-required="true" aria-invalid="true">
						</view> 
						<p class="tips-error" style="">邮箱地址不能为空</p> 
					</view> 
					<view class="form-group"><span class="btn btn-blue">提交绑定</span></view>
				</form>
			</view>
		</view>
	</view>
</template>

<script>
	import Settings from '../settings.vue'
	import Adminheader from '../../admin/admin_header/admin_header'
	export default {
		data() {
			return {
				showUpImg:true,
			}
		},
		methods: {
			changeImg:function(){
				this.showUpImg = !this.showUpImg
				},
		},components:{
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
    padding: 20px 15px;
	background: #fff;
	.box-hd {
	    display: -ms-flexbox;
	    display: flex;
	    -ms-flex-pack: justify;
	    justify-content: space-between;
	    -ms-flex-align: end;
	    align-items: flex-end;
	    line-height: 26px;
		.title {
		    font-size: 16px;
			font-weight: 700;
		}
	}
	.desc {
	    margin-top: 20px;
	    padding: 20px;
	    background: #f6f8f9;
		.text {
		    width: 180px;
			line-height: 22px;
		}
		.fl {
		    float: left;
		}
		img {
		    margin: -10px 0;
			width: 112px;
			height: 112px;
		}
		.fr {
		    float: right;
		}
	}
	.t-gray {
	    color: #9ca6ae;
	}
	.info {
	    margin-top: 20px;
		dt {
		    width: 100px;
		}
		
		.fl {
		    float: left;
		}
		.btn-group {
		    margin-top: 20px;
			
			.btn.btn-default {
			    border: 1px solid #008bf7;
			    color: #008bf7;
			    line-height: 48px;
			}
		}
	}
}
.btn {
	display: inline-block;
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	border: none;
	border-radius: 2px;
	cursor: pointer;
	box-sizing: border-box;
}
.form-wrap{
	
	.form-group {
	    margin-top: 20px;
		.label label {
		    display: block;
		    font-weight: 700;
		}
		.content {
		    position: relative;
		    margin-top: 10px;
		    border: 1px solid #9ca6ae;
		    box-sizing: border-box;
		    border-radius: 2px;
			.ipt-text {
			    width: 100%;
			    height: 48px;
			    padding: 12px 20px;
			    line-height: 24px;
			    border: none;
			    box-sizing: border-box;
			}
		}
		.tips-error {
		    margin-top: 5px;
		    line-height: 20px;
		    color: #ff5853;
		}
		.btn.btn-blue {
		    background: #008bf7;
		    color: #fff;
		}
	}
}

</style>
