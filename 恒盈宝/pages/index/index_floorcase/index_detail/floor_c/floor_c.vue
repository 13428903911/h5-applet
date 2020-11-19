<template>
	<view class="content">
		<view class="">
			<view class="text fl">
				<h3 class="company">短书SaaS</h3>
				<p class="job">雇佣社区口碑营销人才</p>
				<p class="meta">时薪 30 元 / 每日工作 1~3 小时 / 雇佣周期 1-6 个月</p>
				<p class="comment">短书作为知识型SaaS服务平台，对于兼职工作的理解能力、内容产出能力都是有一定要求的。在金斗云，不仅找到了许多合作愉快、交付速度也很快的长期兼职人员，而且整个金斗云的服务与效率都很高效，非常适合长期、批量招募有一定能力基础的知识型兼职需求。强烈推荐你也试试！</p>
				<view class="user cl">
					<view class="avatar fl">
						<img src="/static/images/touxiang.png" alt="">
						<p>加玮</p>
						<p class="t-gray">短书SaaS 市场负责人</p>
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
