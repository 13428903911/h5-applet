<template>
	<view class="header">
		<Adminheader></Adminheader>
		<Settings></Settings>
		<view class="box box-password">
			<view class="box-hd"><h2 class="title">账号安全</h2></view>
			<form class="form-wrap">
				<view class="form-group">
					<view class="label cl">
						<label class="fl">当前密码</label> 
						<a class="fr">忘记密码</a>
						<view style="clear: both;"></view>
					</view> 
					<view class="content">
						<input type="password" name="oldPwd" placeholder="输入当前密码" class="ipt-text" data-vv-scope="__global__" aria-required="true" aria-invalid="true">
					</view> 
					<p class="tips-error" style="">当前密码不能为空</p>
				</view>
				<view class="form-group">
					<view class="label">
						<label>新密码</label>
					</view> 
					<view class="content">
						<input type="password" name="newPwd" placeholder="设置新密码" autocomplete="new-password" class="ipt-text" data-vv-scope="__global__" aria-required="true" aria-invalid="true">
					</view> 
					<p class="tips-error" style="">新密码不能为空</p>
				</view>
				<view class="form-group">
					<view class="label"><label>新密码</label></view> 
					<view class="content">
						<input type="password" name="newPwdConfirm" placeholder="请确认密码" autocomplete="new-password" class="ipt-text" data-vv-scope="__global__" aria-required="true" aria-invalid="true">
					</view> 
					<p class="tips-error" style="">确认密码不能为空</p>
				</view>
				<view class="form-group"><span class="btn btn-blue ">保 存</span></view>
			</form>
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
}
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
}
a{    color: #008bf7;}
.fl {
	float: left;
}
.fr {
	float: right;
}
.btn {
    display: inline-block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: none;
    border-radius: 2px;
    color: #fff;
    cursor: pointer;
    box-sizing: border-box;
}
.btn.btn-blue {
    background: #008bf7;
    color: #fff;
}
</style>
