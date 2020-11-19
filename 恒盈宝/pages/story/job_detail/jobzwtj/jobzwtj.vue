<template>
	<view class="">
		<view class="mod mod-jobs hide-jobs">
			<view class="hd cl"><h3 class="title">推荐职位</h3></view>
			<view class="bd">
				<view class="hot-list">
					<!-- 第一个 -->
					<view class="item cl">
						<a href="avascript:;" target="_blank">
							<view class="item-side fl">
								<p class="num">10000 元</p> 
								<p class="t-gray">项目预算</p>
							</view> 
							<view class="item-main">
								<h3 class="t-default"><!---->远程酒店BD</h3>
								 <p class="t-gray"><span>短期雇佣</span> <!----></p> 
								 <view class="tags">
									 <view class="inner cl t-gray"><span>运营</span><span>渠道运营</span><span>酒店渠道</span><span>包房</span>
									 </view>
								 </view> 
							<view class="meta"></view></view></a>
					</view>
					<!-- 第二个	 -->
					<view class="item cl">
						<a href="javascript:;" target="_blank">
							<view class="item-side fl">
								<p class="num">10000 元</p> 
								<p class="t-gray">项目预算</p>
							</view> 
							<view class="item-main">
								<h3 class="t-default"><!---->远程酒店BD</h3>
								 <p class="t-gray"><span>短期雇佣</span> <!----></p> 
								 <view class="tags">
									 <view class="inner cl t-gray"><span>运营</span><span>渠道运营</span><span>酒店渠道</span><span>包房</span>
									 </view>
								 </view> 
							<view class="meta"></view></view></a>
					</view>
					<!-- 第三个 -->
					<view class="item cl">
						<a href="avascript:;" target="_blank">
							<view class="item-side fl">
								<p class="num">10000 元</p> 
								<p class="t-gray">项目预算</p>
							</view> 
							<view class="item-main">
								<h3 class="t-default"><!---->远程酒店BD</h3>
								 <p class="t-gray"><span>短期雇佣</span> <!----></p> 
								 <view class="tags">
									 <view class="inner cl t-gray"><span>运营</span><span>渠道运营</span><span>酒店渠道</span><span>包房</span>
									 </view>
								 </view> 
							<view class="meta"></view></view></a>
					</view>
					
				</view>
			</view>
		</view>
		<view class="mod mod-more"><span class="btn-text">点击查看更多</span></view>
		<!-- <view class="mod mod-about"><view class="hd cl"><h3 class="title">关于雇主</h3></view> <view class="bd"><p>Charles</p></view></view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			getSpecialData(){
				 this.$http.post('public/index.php/api/Work/getWorkList',{
					task_id:3
				 }).then(res => {
				 	  this.Detailsll = res.data.data.row 
					  // console.log(res)
				 })
				 
			}
		},
		mounted() {
			this.getSpecialData()
		}
	}
</script>

<style lang="scss" scoped>
a{
	text-decoration: none;
	color: #008bf7;
}
.mod:not(:first-child) {
		border-top: 1px solid #edf1f4;
	}
	.mod{
		line-height: 24px;
		padding: 20px 20px;
		.title {
		    font-size: 18px;
		    line-height: 28px;
		}
		.bd {
		    margin-top: 20px;
			.salary {
			    margin-top: -20px;
				li {
				    margin: 20px 32px 0 0;
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
	    text-align: center;
		.btn-text {
		    display: inline-block;
		    text-align: center;
		    color: #008bf7;
		    cursor: pointer;
		    line-height: 20px;
		}
	}
	.mod {
	    border-top: 1px solid #edf1f4;
	}
	.mod.mod-about {
	    padding-top: 30px;
	    border-top: 1px solid #edf1f4;
	}
	
</style>
