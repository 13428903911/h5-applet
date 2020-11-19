<template>
	<view class="content">
		<view class="">
			<view class="text fl">
				<h3 class="company">北京驾趣科技发展有限公司</h3>
				<p class="job">雇佣汽车广告营销策划</p>
				<p class="meta">时薪 91 元 / 每日工作 1~3 小时 / 雇佣周期 1-6 个月</p>
				<p class="comment">与平台合作1年有余，期间帮驾趣解决了很多人员招聘问题，金斗云招聘速度快，用人成本低，保证了部分职位的灵活调度和工作效率问题。平台工作人员专业能力强，服务态度优，发现问题能及时优化解决，会继续合作，并推荐给身边尤其是创业中的公司使用。</p>
				<view class="user cl">
					<view class="avatar fl">
						<img src="/static/images/touxiang.png" alt="">
						<p>王诗妍</p>
						<p class="t-gray">北京驾趣科技发展有限公司 HR</p>
					</view>
				</view>
				
			</view>
			<view class="pic fr"><img src="/static/images/floor1.png"></view>
			<view style="clear: both;"></view>
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
.content {
	margin: 0 20px;
    margin-top: 30px;
    padding: 30px 20px 20px;
    border: 1px solid #edf1f4;
    box-shadow: 0 0 20px 0 rgba(9,34,53,.05);
    border-radius: 10px;
	.text {
	    width: 100%;
		.company {
		    font-size: 20px;
		    font-weight: 700;
		    line-height: 30px;
			margin-top: 20px;
		}
		.job {
		    margin-top: 30px;
		    font-weight: 700;
		}
		.meta {
		    font-weight: 700;
		}
		.comment{
			margin-top: 20px;
		}
	}
	.user {
	    margin-top: 20px;
		.avatar {
		    width: 48px;
		    height: 48px;
		    margin-right: 20px;
		    border-radius: 48px;
		    overflow: hidden;
			img {
			    max-width: 100%;
			    max-height: 100%;
			}
			.t-gray {
			    color: #9ca6ae;
			}
		}
	}
	.fl {
	    float: left;
	}
	.fr {
	    float: right;
	}
	.pic {
	    width: 100%;
	    height: auto;
	    margin-top: 20px;
	    padding: 20px 0;
	    background: #f6f8f9;
	    border-radius: 8px;
	    text-align: center;
		img {
		    width: 250px;
		    height: auto;
		}
	}
}
</style>
