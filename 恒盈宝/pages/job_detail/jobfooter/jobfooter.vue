<template>
	<view class="footer">
		<view class="intro-more w1060">
		<!-- 	<view class="intro-more-detail">
				<view  class="intro-more-title">热门类目</view>
				<view  class="intro-more-items">
					<a  href="jvascript:;" class="intro-more-item">市场销售</a>
					<a  href="jvascript:;" class="intro-more-item">运营策划</a>
					<a  href="jvascript:;" class="intro-more-item">产品经理</a>
					<a  href="jvascript:;" class="intro-more-item">创意设计</a>
					<a  href="jvascript:;" class="intro-more-item">程序开发</a>
					<a  href="javascript:;" class="intro-more-item">职能</a>
				</view>
			</view>
			<view class="intro-more-detail">
				<view view class="intro-more-title">关于</view>
				<div  class="intro-more-items">
					<a  href="javascript:;" class="intro-more-item intro-pointer">什么是金斗云？</a> 
					<a  href="javascript:;" class="intro-more-item intro-pointer">招募</a> 
					<a  href="javascript:;" class="intro-more-item intro-pointer">效率与管理</a> 
					<a  href="javascript:;" class="intro-more-item intro-pointer">担保与结算</a> 
					<a  href="javascript:;" class="intro-more-item">解决方案</a> 
					<a  href="javascript:;" class="intro-more-item">团队协同</a>
				</div>
			</view> -->
			<view class="intro-more-detail">
				<div  class="intro-more-title">联系我们</div>
				<div  class="intro-more-items">
					<div  class="intro-more-item">电话：13310834413</div> 
					<div  class="intro-more-item">地址：深圳市龙岗区龙城街道吉祥社区<br><view style="margin-left: -28px;">龙岗大道2167号201</view></div>
				</div>
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
a{
		text-decoration: none;
		color: #008bf7;
	}
.footer{
		font-size: 14px;
		color: hsla(0,0%,100%,.5);
		box-sizing: border-box;
		background: #092235;
		text-align: left;
		padding: 0 20px;
		.w1060 {
		    width: auto;
		    box-sizing: border-box;
		}
		
	}
	.footer .intro-more {
	    display: block;
	    padding: 0;
		justify-content: space-between;
		border-bottom: 1px solid hsla(0,0%,100%,.1);
		margin: 0 auto;
		
	}
	.footer .intro-more .intro-more-detail {
	    display: block;
	    width: unset;
	    margin: 0 auto;
	    text-align: center;
	    padding: 30px 0;
	    border: solid #0e304b;
	    border-width: 1px 0;
	}
	.footer .intro-more-title {
	    margin-bottom: 40px;
	    color: #fff;
	    font-weight: 700;
	}
	.footer .intro-more-item{
	    margin-top: 20px;
	    margin-bottom: 0;
		color: hsla(0,0%,100%,.5);
		display: block;
	}
</style>
