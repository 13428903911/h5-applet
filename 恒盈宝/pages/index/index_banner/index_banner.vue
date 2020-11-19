<template>
	<view class="page-index container">
		<view class="jumbotron">
			<view class="w1060 mcenter top">
				<view class="text">
					<h2>使用金斗云<br>远程雇佣专业人才</h2>
					<view class="desc">
						<view class="">
							<p class="time"><em class="num">1</em>分钟</p>
							<p>快速发布职位</p>
						</view>
						<view class="">
							<p class="time"><em class="num">1</em>小时内</p>
							<p>快速匹配人才</p>
						</view>
						<view class="">
							<p class="time"><em class="num">6</em>小时</p>
							<p>平均上岗时间</p>
						</view>
					</view>
					<!-- <view class="btn-group cl">
						<a class="btn btn-white fl">免费找人</a>
						<a @click="zgz()" class="btn btn-light fl">找工作</a>
					</view> -->
				</view>
				<view class="pic">
					<img src="../../../static/images/banner5.png" />
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
			zgz(){
				wx.navigateTo({
					url:'/admin/admin_index/admin_index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.page-index {
    padding-top: 0;
    padding-bottom: 0;
    line-height: 24px;
	.jumbotron {
	    height: 625px;
	    margin: -50px -15px 0;
	    background-image: linear-gradient(225deg,#01bffc,#008bf7);
		.top {
		    -ms-flex-direction: column;
		    flex-direction: column;
			padding-top: 100px;
			display: -ms-flexbox;
			display: flex;
			-ms-flex-pack: justify;
			justify-content: space-between;
			-ms-flex-align: center;
			align-items: center;
			.text {
			    -ms-flex-order: 1;
			    order: 1;
			    width: 100%;
			    margin-top: 50px;
				h2 {
				    font-size: 24px;
				    line-height: 34px;
				    text-align: center;
					font-weight: 700;
					color: #FFFFFF;
				}
				.desc {
				    width: 100%;
				    padding: 0 15px;
				    box-sizing: border-box;
				    text-align: center;
					display: flex;
					justify-content: space-between;
					margin-top: 30px;
					p{
					    font-size: 14px;
					    color: #fff;
					}
					p.time {
					    height: 30px;
					    line-height: 30px;
						.num {
						    font-size: 30px;
							margin-right: 10px;
							font-family: fantasy;
						}
					}
				}
				.btn-group {
					padding: 0 15px;
					margin: 30px 0 0;
					.fl {
					    float: left;
					}
					.btn {
					    display: inline-block;
					    width: 100%;
						margin: 0;
					    height: 50px;
					    line-height: 50px;
					    text-align: center;
					    border: none;
					    border-radius: 2px;
					    cursor: pointer;
					    box-sizing: border-box;
						font-weight: 600;
					}
					.btn.btn-white {
					    background: #fff;
					    color: #008bf7;
					}
					.btn.btn-light {
					    border: 1px solid #fff;
					    border-radius: 2px;
						color: #FFFFFF;
					}
					.btn:not(:first-child) {
					    margin-top: 10px;
					}
				}
			}
			.pic {
			    width: 100%;
			    height: auto;
			    text-align: center;
				img {
				    width: 300px;
				    height: 200px;
					vertical-align: middle;
				}
			}
		}
		.mcenter {
		    margin-left: auto;
		    margin-right: auto;
		}
		.w1060 {
			width: auto;
		    box-sizing: border-box;
		}
	}
}
.container {
    padding: 20px 15px;
	margin-left: auto;
	margin-right: auto;
	box-sizing: border-box;
}
</style>
