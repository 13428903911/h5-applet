<template>
	<view class="floor-intro">
		<view class="hd">
			<h2 class="title title-mb">企业按需雇佣人才<br>提高效率，降低成本</h2>
		</view>
		<view class="bd">
			<view class="list w1060 mcenter tcenter">
				<view class="item">
					<img src="../../../static/images/intro_a.png" alt="">
					<h3>灵活用人</h3>
					<p>企业按需雇佣人才，随招随用。配合智能人才筛选匹配机制，快速准确找到专业人才。</p>
				</view>
				<view class="item">
					<img src="../../../static/images/intro_b.png" alt="">
					<h3>越用越省</h3>
					<p>按时计费雇佣远程人才，节省传统人才雇佣需要额外支出的办公设备、场地等费用。</p>
				</view>
				<view class="item">
					<img src="../../../static/images/intro_c.png" alt="">
					<h3>工作透明</h3>
					<p>专业的远程人才管理工具，使远程人才工作可见可查，助力企业管理高效便捷。</p>
				</view>
				<view class="item">
					<img src="../../../static/images/intro_d.png" alt="">
					<h3>安全结算</h3>
					<p>金斗云提供平台资金担保服务，确保信息真实可靠，双方利益有保障。</p>
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
.floor-intro{
	margin-top: 10px;
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
	    margin-top: 0px;
		.tcenter {
		    text-align: center;
		}
		.mcenter {
		    margin-left: auto;
		    margin-right: auto;
		}
		.w1060 {
		    width: auto;
		    box-sizing: border-box;
		}
		.list {
		    display: -ms-flexbox;
		    display: flex;
		    -ms-flex-pack: justify;
		    justify-content: space-between;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			.item {
			    width: 300px;
			    height: auto;
			    margin: 30px auto 0;
			    padding: 0;
			    cursor: default;
				img {
				    width: 70px;
				    height: 60px;
					vertical-align: middle;
				}
				h3 {
				    margin-top: 20px;
				    font-size: 18px;
				    font-weight: 700;
				}
				p {
				    margin-top: 10px;
				    color: #9ca6ae;
				    line-height: 20px;
				}
			}
		}
	}
}
</style>
