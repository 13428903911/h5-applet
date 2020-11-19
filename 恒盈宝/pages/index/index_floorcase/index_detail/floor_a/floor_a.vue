<template>
	<view class="content">
		<view class="">
			<view class="text fl">
				<h3 class="company">傲游浏览器</h3>
				<p class="job">雇佣高级前端开发工程师</p>
				<p class="meta">时薪 97 元 / 每日工作 6~8 小时 / 雇佣周期 1-6 个月</p>
				<p class="comment">偶然的机会知道金斗云平台的存在，抱着试一试的心态，开始发布了一个需求，没想到很快就找到了开发者，并且整个合作非常顺畅，平台的工作人员非常尽心，不管什么时候都能及时响应并快速地解决问题。过去也用过类似的平台，相比而言，金斗云可以在微信上随时与候选人沟通，非常方便快捷。</p>
				<view class="user cl">
					<view class="avatar fl">
						<img src="/static/images/touxiang.png" alt="">
						<p>胡西湖</p>
						<p class="t-gray">傲游浏览器 HR</p>
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
