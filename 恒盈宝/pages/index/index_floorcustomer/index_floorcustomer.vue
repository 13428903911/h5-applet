<template>
	<view class="floor-customer">
		<view class="hd">
			<h2 class="title">成就客户就是成就我们</h2> <p class="desc t-gray">原「外包大师」与「PMCAFF人才服务」已全面升级为「金斗云」</p>
		</view>
		<view class="bd">
			<view class="list">
				<li class="item fl"><img src="/static/images/tu1.png"></li>
				<li class="item fl"><img src="/static/images/tu2.png"></li>
				<li class="item fl"><img src="/static/images/tu3.png"></li>
				<li class="item fl"><img src="/static/images/tu4.png"></li>
				<li class="item fl"><img src="/static/images/tu5.png"></li>
				<li class="item fl"><img src="/static/images/tu6.png"></li>
				<li class="item fl"><img src="/static/images/tu7.png"></li>
				<li class="item fl"><img src="/static/images/tu8.png"></li>
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
.floor-customer{
	margin: 0 20px;
	margin-top: 50px;
	border-top: 1px solid #edf1f4;
	padding-top: 50px;
	.hd {
	    text-align: center;
		.title {
		    font-size: 20px;
		    line-height: 30px;
		    font-weight: 600;
		    text-align: center;
		}
		.desc {
		    margin-top: 10px;
		}
		.t-gray {
		    color: #9ca6ae;
		}
	}
	.bd {
	    margin-top: 20px;
		 .list {
		    display: -ms-flexbox;
		    display: flex;
		    -ms-flex-wrap: wrap;
		    flex-wrap: wrap;
		    -ms-flex-pack: justify;
		    justify-content: space-between;
		    margin: -5px;
			.item {
			    width: calc(25% - 10px);
			    height: auto;
			    margin: 5px;
			    text-align: center;
				img {
				    width: 100%;
				    height: 100%;
					max-width: 115px;
				}
			}
			.fl {
			    float: left;
			}
		}
	}
}
</style>
