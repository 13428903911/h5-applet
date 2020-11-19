<template>
	<view class="floor-step">
		<view class="hd"><h2 class="title">如何在找工作招募远程人才？</h2></view>
		<view class="bd">
			<view class="list">
				<view class="item">
					<view class="pic">
						<img src="/static/images/step5.png" alt="">
						<view class="dir"><view class="next"><view class="arrow"></view></view></view>
					</view>
					<view class="text"><h3>发布职位</h3> <p>企业免费发布职位</p></view>
				</view>
				<view class="item">
					<view class="pic">
						<img src="/static/images/step2.png" alt="">
						<view class="dir"><view class="next"><view class="arrow"></view></view></view>
					</view>
					<view class="text"><h3>匹配签约</h3> <p>智能引擎匹配人才</p></view>
				</view>
				<view class="item">
					<view class="pic">
						<img src="/static/images/step3.png" alt="">
						<view class="dir"><view class="next"><view class="arrow"></view></view></view>
					</view>
					<view class="text"><h3>远程工作</h3> <p>人才工作并记录过程</p></view>
				</view>
				<view class="item">
					<view class="pic">
						<img src="/static/images/step4.png" alt="">
						<view class="dir"><view class="next"><view class="arrow"></view></view></view>
					</view>
					<view class="text"><h3>验收结算</h3> <p>验收工作并支付结算</p></view>
				</view>
				<view class="item">
					<view class="pic">
						<img src="/static/images/step1.png" alt="">
					</view>
					<view class="text"><h3>双方互评</h3> <p>企业和人才相互完成评价</p></view>
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
.floor-step{
	margin: 0 20px;
	margin-top: 50px;
	.hd {
	    text-align: center;
		.title {
		    font-size: 20px;
		    line-height: 30px;
		    font-weight: 600;
		    text-align: center;
		}
	}
	.bd {
	    margin-top: 30px;
		.list {
			display: flex;
		    -ms-flex-wrap: wrap;
		    flex-wrap: wrap;
		    -ms-flex-direction: column;
		    flex-direction: column;
		    -ms-flex-pack: center;
		    justify-content: center;
		    margin-top: -20px;
			.item {
			    display: -ms-flexbox;
			    display: flex;
			    -ms-flex-pack: justify;
			    justify-content: space-between;
			    -ms-flex-align: center;
			    align-items: center;
			    width: 240px;
			    margin: 20px auto;
				text-align: center;
				.pic {
				    position: relative;
				    display: -ms-flexbox;
				    display: flex;
				    -ms-flex-pack: center;
				    justify-content: center;
				    -ms-flex-align: center;
				    align-items: center;
					width: 60px;
					height: 60px;
					margin: 0;
				    border: 1px solid #edf1f4;
				    box-shadow: 0 10px 40px 0 rgba(9,34,53,.1);
				    border-radius: 40px;
				    box-sizing: border-box;
					img {
					    width: 40px;
					    height: 40px;
					}
					.dir {
					    top: 70px;
					    left: 50%;
					    width: 0;
					    height: 20px;
					    transform: none;
						position: absolute;
						.next {
						    height: 100%;
						    border-top: 0;
						    border-left: 1px solid #dde6ec;
							.arrow{
								position: absolute;
								right: 0;
								top: auto;
								bottom: 0;
								left: -4px;
								transform: rotate(135deg);
								width: 8px;
								height: 8px;
								border-top: 1px solid #dde6ec;
								border-right: 1px solid #dde6ec;
							}
						}
					}
				}
				.text {
				    margin: 0 0 0 20px;
				    -ms-flex-positive: 1;
				    flex-grow: 1;
				    text-align: left;
					h3 {
					    font-size: 14px;
					    line-height: 20px;
						font-weight: 700;
					}
					p {
					    color: #9ca6ae;
					    line-height: 20px;
					}
				}
			}
		}
	}
}
</style>
