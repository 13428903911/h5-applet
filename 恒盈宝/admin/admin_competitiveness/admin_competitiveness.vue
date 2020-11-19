<template>
	<view class="header">
		<Adminheader></Adminheader>
		<view class="user-competitiveness container">
			<view class="box">
				<view class="w520 mcenter">
					<div class="score">
						<div class="num">11</div> 
						<p class="t-gray">云队友竞争力指数</p> 
						<div class="scale">
							<div class="inner" style="width: 11%;"></div>
						</div>
					</div>
					<div class="hr"></div>
					<view class="desc">
						<p>竞争力指数由「专业度」、「活跃度」、「交付满意度」三部分构成。竞争力指数越高，成单概率就越高。</p>
						<view class="list">
							<view class="item">
								<h2 class="title cl">
									<span class="index fl">1</span> <span class="fl">专业度</span>
								</h2>
								 <view style="clear: both;"></view>
								<p>1. 个人资料：提交的个人资料反映出的实力，相关领域的经验和技能竞争力；<br>
							       2. 平台面试：平台会进行多轮面试情况确定专业度；<br>
							       3. 正向评价：工作中正向评价会增加专业度，负向将会减少专业度</p> 
								 <p>建议：真实的简历与丰富的案例将会得到加成。
									<a @click="wanshanjinli">完善我的简历</a>
								 </p>
							</view>
							<view class="item">
								<h2 class="title cl"><span class="index fl">2</span> <span class="fl">活跃度</span></h2> 
								<view style="clear: both;"></view>
								<p>1. 应聘活跃度：平台中沟通积极度，投递被雇佣概率；<br>
							       2. 服务积极度：跟甲方沟通次数，工作时长会成为基础数据之一。
								</p> 
								<p>建议：推荐的职位尽快响应，如果不合适请点击忽略。</p>
							</view>
							<view class="item">
								<h2 class="title cl"><span class="index fl">3</span> <span class="fl">交付满意度</span></h2>
								 <view style="clear: both;"></view>
								<p>1. 工作完结率：保证工作完结，工作完结率太低将会极大影响评分；<br>
							       2. 工作评价：每一份工作甲方对你的评价。
								 </p> 
								 <p>建议：可以先从简单的小额订单试起。</p>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Adminheader from '../admin_header/admin_header.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			wanshanjinli(){
				wx.navigateTo({
					url: '/admin/admin_data/admin_data'
				})
			}
		},
		components:{
			Adminheader,
		}
	}
</script>

<style lang="scss" scoped>
.header{background: #f6f8f9;}
a {
    color: #008bf7;
}
.container {
    margin-left: auto;
    margin-right: auto;
    padding: 10px 0px;
    box-sizing: border-box;
	.box {
	       background: #fff;
	       padding: 0 20px;
		.score {
		    margin-top: 20px;
		    text-align: center;
			.num {
			    font-size: 40px;
			    font-weight: 700;
			    font-family: -webkit-pictograph;
			    line-height: 40px;
				font-style: italic;
			}
			.t-gray {
			    color: #9ca6ae;
			}
			 .scale {
			    width: 200px;
			    height: 10px;
			    margin: 20px auto 0;
			    background: #edf1f4;
			    border-radius: 10px;
				.inner {
				    height: 10px;
				    background-image: linear-gradient(270deg,#01bffc,#008bf7);
				    border-radius: 10px;
				}
			}
		}
		.hr {
		    margin: 20px 0;
			border-top: 1px solid #edf1f4;
		}
	}
	.desc{
		.item {
		    margin-top: 10px;
		    padding: 20px;
		    background: #f6f8f9;
			.title {
			    font-weight: 700;
			    line-height: 30px;
				.index {
				    margin-right: 10px;
				    font-size: 30px;
				    font-family: -webkit-pictograph;
				    vertical-align: middle;
					font-style: italic;
				}
				.fl {
				    float: left;
				}
				
			}
			 p {
			    margin-top: 10px;
			}
		}
	}
}
.user-competitiveness {
    line-height: 24px;
}
</style>
