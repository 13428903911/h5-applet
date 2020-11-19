<template>
	<view>
		<view class="box box-quotes">
			<view class="boxs">
				<view class="box-hd cl">
					<h2 class="title fl">资金</h2> 
				</view>
				<view class="box-bd">
					<view class="account">
						<view class="balance"><p class="num">0</p> <p class="t-gray">收入账户余额（元）</p> <!----></view>
						<view class="btn-group">
							<span class="btn-text btn-withdraw btn-disabled">提 现
								<view class="tool-tip">
									<p>账号未认证，请先完成认证后再进行提现操作<a target="_blank" href="/setting/verified" class="btn-text">去认证</a></p>
								</view>
							</span>
						</view>
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
			
		}
	}
</script>

<style lang="scss" scoped>
.box {
    padding: 20px 0px;
	padding-top: 80px;
	line-height: 24px;
	background: #f6f8f9;
	.boxs{
		background: #FFFFFF;
		.box-hd{
			.title{
				font-size: 18px;
				padding: 20px 15px 0px 20px;
			}
		}
		.box-bd {
		    margin: 0 20px;	
			padding-bottom: 20px;
			.account {
			    display: -ms-flexbox;
			    display: flex;
			    -ms-flex-pack: justify;
			    justify-content: space-between;
			    -ms-flex-wrap: wrap;
			    flex-wrap: wrap;
			    -ms-flex-align: end;
			    align-items: flex-end;
			    margin-top: 20px;
			    padding: 30px;
			    background-image: linear-gradient(180deg,#ecf1f3,#dae3e9);
			    border-radius: 4px;
				.num {
				    font-size: 24px;
				    font-family: Montserrat-Regular;
				    font-weight: 700;
				    line-height: 36px;
				}
				.t-gray {
				    color: #9ca6ae;
				}
				.btn-group {
				    width: 100%;
				    margin-top: 20px;
				    text-align: right;
					.btn-text {
					    display: inline-block;
					    text-align: center;
						margin-left: 25px;
						line-height: 24px;
						color: #008bf7;
					}
					.btn-text.btn-disabled {
					    color: #9ca6ae;
					    cursor: not-allowed;
					}
					.btn-withdraw {
					    position: relative;
					}
					.tool-tip {
					    display: none;
					    position: absolute;
					    top: 100%;
					    left: 50%;
					    transform: translateX(-50%);
					    min-width: 100px;
					    padding: 10px 20px;
					    box-sizing: border-box;
					    background: #fff;
					    border: 1px solid #edf1f4;
					    box-shadow: 0 0 20px 0 rgba(9,34,53,.1);
					    line-height: 20px;
					    z-index: 9;
						p {
						    color: #092235;
						}
					}
					.tool-tip:before {
					    position: absolute;
					    top: -6px;
					    left: 50%;
					    margin-left: -6px;
					    content: "";
					    border-bottom: 6px solid #fff;
					    border-left: 6px solid transparent;
					    border-right: 6px solid transparent;
					}
					.btn-withdraw:hover .tool-tip {
					    display: block;
					    width: 250px;
					    text-align: left;
					    left: unset;
					    right: -20px;
					    transform: none;
					}
					.btn-withdraw:hover .tool-tip:before {
					    right: 27px;
					    left: unset;
					}
				}
				
			}
		}
	}
	
}
</style>
