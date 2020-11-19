<template>
	<view>
		<view class="page-admin ontainer">
			<view class="box box-orders">
				<view class="box-hd cl">
					<h2 class="title fl">合同订单</h2> <!---->
				<a class="all fr" @click="htdd()">全部合同订单(1)<i class="icon iconfont">&#xe605;</i></a>
				<view style="clear: both;"></view>
				</view>
				<view class="box-bd">
					<Orderstabfy @tabboxs="tabboxs"></Orderstabfy>
					<Tabone :class="[hideing === 0 ? 'actineclass' : 'errorclass']"></Tabone>
					<Tabto :class="[hideing === 1 ? 'actineclass' : 'errorclass']"></Tabto>
					<Tabthree :class="[hideing === 2 ? 'actineclass' : 'errorclass']"></Tabthree>
					<Tabfour :class="[hideing === 3 ? 'actineclass' : 'errorclass']"></Tabfour>
					<Tabfive :class="[hideing === 4 ? 'actineclass' : 'errorclass']"></Tabfive>
					<Tabsix :class="[hideing === 5 ? 'actineclass' : 'errorclass']"></Tabsix>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Orderstabfy from './orders_intabfy.vue'
	import Tabone from './tab_ones.vue'
	import Tabto from './tab_tos.vue'
	import Tabthree from './tab_threes.vue'
	import Tabfour from './tab_fours.vue'
	import Tabfive from './tab_fives.vue'
	import Tabsix from './tab_sixs.vue'
	export default {
		data() {
			return {
				hideing:0
			}
		},
		methods: {
			// 被子组件调用的方法
			tabboxs(index){
				this.hideing = index
			},
			htdd(){
				wx.navigateTo({
					url: '/admin/admin_orders/admin_orders'
				})
			}
		},
		components:{
			Orderstabfy,
			Tabone,
			Tabto,
			Tabthree,
			Tabfour,
			Tabfive,
			Tabsix
		}
	}
</script>

<style lang="scss" scoped>
.page-admin {
    padding-top: 20px;
	line-height: 24px;
	background: #f6f8f9;
	.box{
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
					font-size: 20px;
					vertical-align: middle;
				}
			}
			.fr {
			    float: right;
			}
		}
		.box-bd {
		    margin-top: 15px;
		}
	}
}
.container {
    padding: 20px 15px;
}
.actineclass{
	display: block;
}
.errorclass{
	display: none;
}
</style>
