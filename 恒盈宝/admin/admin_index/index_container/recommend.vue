<template>
	<view class="box box-quotes">
		<view class="box-hd cl">
			<h2 class="title">推荐职位</h2> 
		</view>
		<view class="box-bd">
			<!-- <view class="data-empty">
				<img src="/static/images/jianli_b.png"> 
				<p>提升云队友竞争力指数，获取更多职位推荐</p>
			</view> -->
			<!-- <view class="item" @click="zhiweiguanli()">
				<view class="info">
					<p class="title">
						<a>招平面设计，宣传单设计</a>
					</p> 
					<view class="other cl"><span class="t-gray">投递时间：前天 17:38</span></view>
				</view>
				<view class="meta">
					<view class="status">
						<view class="cl"><p class="fl">待雇主筛选</p> <p class="filter t-gray fl">已被查看简历</p><view style="clear: both;"></view></view>
					</view> 
					<view class="btn-group">
						<a class="btn-text btn-im">在线沟通</a> 
						<a class="btn-text">查看报价</a>
				
					</view>
				</view>
			</view> -->
			<view class="item" @click="zhiweiguanli()">
				<view class="info">
					<p class="title">
						<a>招WEB前端</a>
					</p> 
					<view class="other cl"><span class="t-gray">投递时间：前天 17:38</span></view>
				</view>
				<view class="meta">
					<view class="status">
						<view class="cl"><p class="fl">待雇主筛选</p> <p class="filter t-gray fl">已被查看简历</p><view style="clear: both;"></view></view>
					</view> 
					<view class="btn-group">
						<!-- <a class="btn-text btn-im">在线沟通</a> 
						<a class="btn-text">查看报价</a>
						 -->
					</view>
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
			zhiweiguanli(){
				wx.navigateTo({
					url:'/pages/job_detail/job_detail'
				})
			}
		},
		created() {
			this.$http.post('/public/index.php/api/Work/positionRecommend',{
				user_id:1,
				page:1,
				limit:15
			}).then(res => {
				console.log(res)
			})
		}
	}
</script>

<style lang="scss" scoped>
.box {
    padding: 20px 15px;
	background: #fff;
	line-height: 24px;
	.box-hd {
	    line-height: 28px;
		.title {
		    font-size: 18px;
			font-weight: 700;
		}
		.fl {
		    float: left;
		}
		.all {
		    height: 24px;
		    margin-top: 4px;
		    line-height: 24px;
			color: #008bf7;
			.icon {
			    margin-left: 5px;
			    font-size: 12px;
			}
		}
		.fr {
		    float: right;
		}
	}
	.box-bd {
	    margin-top: 10px;
		.data-empty {
		    padding: 100px 0;
		    text-align: center;
			img {
			    width: 120px;
			}
			p {
			    margin-top: 10px;
				color: #008bf7;
			}
		}
		.item {
		    display: block;
		    width: 100%;
		    min-height: unset;
		    padding: 20px 0;
			border-top: 1px solid #edf1f4;
			.info {
			    width: 100%;
				.title {
				    max-height: 48px;
					a {
					    color: #092235;
					}
				}
				.other {
				    margin-top: 2px;
					.t-gray {
					    color: #9ca6ae;
					}
					.fl {
					    float: left;
					}
				}
			}
			.meta {
			    display: block;
			    width: 100%;
			    margin-top: 20px;
				clear: both;
				.status {
				    width: 100%;
					margin-right: 30px;
					.fl {
					    float: left;
					}
					.filter {
					    margin-left: 10px;
					}
					.t-gray {
					    color: #9ca6ae;
					}
				}
				.btn-group {
				    display: -ms-flexbox;
				    display: flex;
				    -ms-flex-pack: justify;
				    justify-content: space-between;
				    width: 100%;
				    margin-top: 20px;
					text-align: center;
					.btn-text {
					    display: inline-block;
					    text-align: center;
					    color: #008bf7;
					    cursor: pointer;
						line-height: 24px;
					}
					.btn-im {
					    height: 24px;
					    padding-left: 26px;
					    background: url(/static/images/im-icon.gif) no-repeat 0 0;
					    background-size: 24px 24px;
					}
				}
			}
		}
	}
}
.box:not(:first-child) {
    margin-top: 20px;
}
</style>
