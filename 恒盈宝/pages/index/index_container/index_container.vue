<template>
	<view class="categories">
		<view class="hd"><h2 class="title">雇佣全球优秀远程员工</h2></view>
		<view class="bd">
			<view class="sub-category">
				<h4 data-v-1fef9ea8="">程序开发</h4>
				<view class="ul">
					<li>HTML5</li>
					<li>JavaScript</li>
					<li>Java</li>
					<li>C++</li>
					<li>PHP</li>
					<li>全栈开发</li>
					<li>.NET</li>
					<li>Python</li>
					<li>手机测试</li>
				</view>
			</view>
			<view class="sub-category">
				<h4 data-v-1fef9ea8="">运营策划</h4>
				<view class="ul">
					<li>公众号运营</li>
					<li>微博运营</li>
					<li>抖音运营</li>
					<li>推广文案</li>
					<li>微博文章</li>
					<li>京东运营</li>
					<li>淘宝运营</li>
					<li>市场调研</li>
					<li>活动策划</li>
				</view>
			</view>
			<view class="sub-category">
				<h4 data-v-1fef9ea8="">创意设计</h4>
				<view class="ul">
					<li>网站设计</li>
					<li>APP设计</li>
					<li>UI设计</li>
					<li>平面设计</li>
					<li>交互设计</li>
					<li>视频制作</li>
					<li>视频剪辑</li>
					<li>宣传单设计</li>
					<li>手绘插画</li>
				</view>
			</view>
			<view class="sub-category">
				<h4 data-v-1fef9ea8="">市场销售</h4>
				<view class="ul">
					<li>商务渠道</li>
					<li>活动策划</li>
					<li>品牌公关</li>
					<li>广告创意</li>
					<li>广告制作</li>
					<li>广告文案</li>
					<li>品牌策划</li>
					<li>市场推广</li>
					<li>渠道推广</li>
				</view>
			</view>
			<view class="sub-category">
				<h4 data-v-1fef9ea8="">产品经理</h4>
				<view class="ul">
					<li>产品设计</li>
					<li>用户调研</li>
					<li>需求分析</li>
					<li>数据分析</li>
					<li>竞品分析</li>
					<li>流程设计</li>
					<li>区块链产品</li>
					<li>产品原型</li>
					<li>用户增长</li>
				</view>
			</view>
			<view class="sub-category">
				<h4 data-v-1fef9ea8="">职能</h4>
				<view class="ul">
					<li>人力资源</li>
					<li>行政</li>
					<li>财务</li>
					<li>法务</li>
					<li>企业咨询</li>
					<li>商标注册</li>
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
			
		}
	}
</script>

<style lang="scss" scoped>
.categories{
	margin: 0 20px;
	margin-top: 50px;
	.hd {
	    text-align: center;
		.title{
		    margin: 50px 0 20px;
		    font-size: 20px;
			margin-top: 30px;
		    color: #092235;
		    line-height: 34px;
		    font-weight: 600;
			text-align: center;
		}
	}
	.bd{
		.sub-category{
			margin-top: 30px;
			padding-bottom: 20px;
			border-bottom: 1px solid #edf1f4;
			h4{
				text-align: center;
				margin-bottom: 20px;
				font-size: 16px;
				font-weight: 600;
			}
			.ul{
				display: -ms-flexbox;
				display: flex;
				-ms-flex-wrap: wrap;
				flex-wrap: wrap;
				li{
					margin-bottom: 10px;
					width: calc(33.333% - 10px);
					text-align: center;
					margin-left: 5px;
					margin-right: 5px;
				}
			}
		}
	}
}
</style>
