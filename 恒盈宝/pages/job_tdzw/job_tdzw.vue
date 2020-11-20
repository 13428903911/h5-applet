<template>
	<view class="header">
		<view class="header_top">
			<img src="/static/images/wxtp.png" alt="">
			<view class="td">投递成功</view>
		</view>
		<view class="header_button">
			<button class="blue" type="default" @tap="postAdmin">职位管理</button>
			<button class="red" type="default" @tap="backJow">返回热门工作</button>
		</view>
			<view class="mod mod-jobs hide-jobs" @click="details(item.id)" v-for="(item,index) in RedJow">
				<view class="hd cl"><h3 class="title">{{item.income_method}}</h3></view>
				<view class="bd">
					<view class="hot-list">
						<!-- 第一个 -->
						<view class="item cl">
							<a>
								<view class="item-side fl">
									<p class="num">{{item.price}}</p> 
									<p class="t-gray">{{item.income_method}}</p>
								</view> 
								<view class="item-main">
									<h3 class="t-default"><!---->{{item.name}}</h3>
									 <p class="t-gray"><span style="padding-right: 15px;">{{item.hiring_type}}</span> <span>{{item.working_hours}}</span><!----></p> 
									 <view class="tags">
										 <view style="display: inline-block;" class="inner cl t-gray" v-for="items in item.skill"><span>{{items}}</span>
										 </view>
									 </view> 
								<view class="meta"></view></view></a>
						</view>
					</view>
				</view>
			</view>
			<view class="mod-more"><span class="btn-text">点击查看更多</span></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				RedJow:[]
			}
		},
		onLoad(option) {
			this.RedJow = JSON.parse(option.optionObj)
		},
		methods: {
			details(id) {//跳转详情页，item当前页那一项数据
			wx.navigateTo({url:'/pages/job_detail/job_detail?id='+id})
				// this.Detailsll = item
				
			},
			backJow() {//返回热门工作
			  wx.navigateTo({url:'/pages/hots/hots'})
			  
			},
			postAdmin() {
			wx.navigateTo({url:'/admin/admin_index/admin_index'})
			}
		}
	}
</script>

<style lang="scss" scoped>
.header{
	margin-top: -44px;
	.header_top{
		text-align: center;
		img{
			width: 30%;
			margin-top: 50px;
		}
		.td{
			margin-top: 20px;
			font-size: 26px;
		}
	}
	.header_button{
		margin-top: 20px;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		button{
			width: 30%;
			color: #FFFFFF;
			font-size: 14px;
		}
		.blue{
			background: #008bf7;
		}
		.red{
			background: red;
		}
	}
}

// 职位推荐
a{
		text-decoration: none;
		color: #008bf7;
	}
	.mod:not(:first-child) {
			border-top: 1px solid #edf1f4;
		}
		.mod{
			margin-top: 50px;
			line-height: 24px;
			padding: 20px;
			.title {
			    font-size: 18px;
			    line-height: 28px;
			}
			.bd {
			    margin-top: 20px;
				.salary {
				    margin-top: -20px;
					li {
					    // margin: 20px 32px 0 0;
						.num {
						    line-height: 30px;
						    font-weight: 700;
						    font-size: 20px;
						    color: #008bf7;
						}
					}
					li.fl {
					    float: left;
					}
					
				}
				.desc{
					margin-top: 25px;
					li{
						margin-top: 2px;
						padding: 20px;
						background: #f6f8f9;
						border-radius: 2px;
						.icon{
							width: 20px;
							height: 24px;
							margin-right: 20px;
							font-size: 20px;
						}
						.fl {
						    float: left;
						}
						p{
							overflow: hidden;
							em{
								  font-weight: 700;
								  font-style: normal;
							}
						}
					}
				}
	
				.hot-list{
					overflow: hidden;
					position: relative;
					line-height: 24px;
					margin-top: -10px;
					.item {
					    border-top: 1px solid #edf1f4;
					    border-bottom: none;
						a {
						    padding: 20px 0;
							margin: 0;
							display: block;
						}
						.item-side {
						    margin-right: 10px;
							width: 100px;
							.t-gray {
							    color: #9ca6ae;
							}
						}
						.fl {
						    float: left;
						}
						.item-main {
						    padding: 0;
							position: relative;
							overflow: hidden;
							.t-default {
							    color: #092235;
							}
							.t-gray {
							    color: #9ca6ae;
							}
							.tags {
								position: relative;
								margin-top: 4px;
								font-size: 0;
								line-height: 0;
								width: 100%;
								white-space: nowrap;
								overflow-x: auto;
								overflow-y: hidden;
								.inner {
								    white-space: nowrap;
								    overflow-x: auto;
								    overflow-y: hidden;
									margin: 0;
									span {
									    height: 24px;
									    line-height: 24px;
									    font-size: 12px;
									    margin: 5px 5px 0 0;
										display: inline-block;
										padding: 0 8px;
										background: #edf1f4;
										border-radius: 1px;
									}
								}
							}
						}
					}
					.item:first-child {
					    border-top: none;
					}
				}
			}
		}
		.mod-more {
			line-height: 24px;
			// margin-top:20px;
			border-top: 1px solid #edf1f4;
		    text-align: center;
			border-bottom: 1px solid #edf1f4;
			  padding: 20px 0;
			.btn-text {
			    display: inline-block;
			    text-align: center;
			    color: #008bf7;
			    cursor: pointer;
			    line-height: 20px;
				
			}
		}
		
</style>
