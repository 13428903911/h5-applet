<template>
	<view>
		<view class="page-admin ontainer">
			<view class="box box-orders">
				<view class="box-hd cl"><h2 class="title fl">合同订单</h2> <!----></view>
				<view class="table-box">
					<view class="table" v-for="(item,index) in tableList" :class="{active:index==num}" @tap="table(index,item.id)">{{item.name}}</view>
				</view>
			</view>
		</view>
		
		
		<!-- 主题内容 -->
		<view class="item" v-for="(item,index) in tabDefault" v-if="flag == false" :key="item.id" @tap="lineItem(item.id)">
			<view class="item-hd cl">
				<view class="fl">
					<span class="date fl">{{item.create_time}}</span> 
					<!-- <span class="id fl t-gray">订单编号：2020110417452405072</span> -->
				</view> 
				<view class="fr">
					<span class="name fl"><span class="t-gray">雇主：</span>{{item.publisher}}</span> 
					<!-- <a class="btn-text btn-im fl">在线沟通</a> -->
					<view style="clear: both;"></view>
				</view>
			</view>
			<view class="item-bd">
				<view class="table">
					<view class="cell contract" style="padding: 0px;">
						<view class="inner">
							<p class="title">
								<a>{{item.name}}</a>
							</p> 
							<p class="t-gray">{{item.income_method}}：{{item.price}}</p>
						</view>
						<view style="clear: both;"></view>
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="item" v-for="(item,index) in orderForm" :key="item.id" @tap="lineItem(item.id)">
			<view class="item-hd cl">
				<view class="fl">
					<span class="date fl">{{item.create_time}}</span> 
					<!-- <span class="id fl t-gray">订单编号：2020110417452405072</span> -->
				</view> 
				<view class="fr">
					<span class="name fl"><span class="t-gray">雇主：</span>{{item.publisher}}</span> 
					<!-- <a class="btn-text btn-im fl">在线沟通</a> -->
					<view style="clear: both;"></view>
				</view>
			</view>
			<view class="item-bd">
				<view class="table">
					<view class="cell contract" style="padding: 0px;">
						<view class="inner">
							<p class="title">
								<a>{{item.name}}</a>
							</p> 
							<p class="t-gray">{{item.income_method}}：{{item.price}}</p>
						</view>
						<view style="clear: both;"></view>
					</view>
				</view>
			</view>
		</view>
		
		
		<!-- <Tabfour v-if="jow"></Tabfour> -->
		<!-- <Tabfive :class="[hideing === 4 ? 'actineclass' : 'errorclass']"></Tabfive>
		<Tabsix :class="[hideing === 5 ? 'actineclass' : 'errorclass']"></Tabsix -->
		
	</view>
</template>

<script>
	
	 import Tabfour from './tab_four.vue'
	 import Tabfive from './tab_five.vue'
	 import Tabsix from './tab_six.vue'
	export default {
		data() {
			return {
				hideing:0,
				num:0,
				tableList:[{id:1,name:"全部"},{id:2,name:'工作中'},{id:3,name:'待结算'},{id:4,name:'已完成'}],
				orderForm:[],
				tabDefault:[],
				flag:false,
				jow:false
			}
		},
		mounted() {
			this.default()
		},
		methods: {
			default(){//默认第0项数据
				this.$http.post('/public/index.php/api/Work/contractOrder',{
					user_id:1,
					wait_sign:0,
					is_account:0,
					state:0,
					doing:0
				}).then(res => {
					this.tabDefault = res.data.data.row
				})	
			},
			table(index,id){
				this.flag = true
				this.num = index
				if(index == 0) {
					this.$http.post('/public/index.php/api/Work/contractOrder',{
						user_id:1,
						wait_sign:0,
						is_account:0,
						state:0,
						doing:0
					}).then(res => {
						this.orderForm = res.data.data.row
					})	
				}else if(index == 1){
					this.$http.post('/public/index.php/api/Work/contractOrder',{
						user_id:this.$store.state.userInfo.user_id,
						wait_sign:0,
						is_account:0,
						state:0,
						doing:1
					}).then(res => {
							this.orderForm = res.data.data.row
					})
				}else if(index == 2){
					this.$http.post('/public/index.php/api/Work/contractOrder',{
						user_id:this.$store.state.userInfo.user_id,
						wait_sign:0,
						is_account:1,
						state:0,
						doing:0
					}).then(res => {
						this.orderForm = res.data.data.row
					})
				}else if(index == 3){
					this.$http.post('/public/index.php/api/Work/contractOrder',{
						user_id:this.$store.state.userInfo.user_id,
						wait_sign:0,
						is_account:0,
						state:1,
						doing:0
					}).then(res => {
						this.orderForm = res.data.data.row
					})
				}
				
			},
			lineItem(id){
				wx.navigateTo({url:'../admin_zpxx/admin_zpxx?id='+id})
			}
		},
		components:{
			
			Tabfour,
			Tabfive,
			Tabsix
		}
	}
</script>

<style lang="scss" scoped>
.page-admin {
    padding-top: 80px;
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
		}
		.table-box{
			display:flex;
			justify-content: space-between;
			border-bottom: 1px solid #EDF1F4;
			padding: 20px  0 0px 0;
			.table {
			    color: #9CA6AE;
				font-size: 16px;
				border-bottom: -1px solid #EDF1F4;
				padding-bottom:10px;
			}
			.active{
				color: #008bf7;
				border-bottom: 1px solid #008bf7;
			}
		}
	}
}
// .container {
//     padding: 20px 15px;
// }
.actineclass{
	display: block;
}
.errorclass{
	display: none;
}


//主体样式
.data-empty {
    padding: 100px 0;
    text-align: center;
	img {
	    width: 120px;
	}
	p {
	    margin-top: 10px;
	}
}
.item {
	padding: 20px 15px;
	.item-hd {
	    height: 40px;
	    background: #edf1f4;
	    padding: 8px 20px;
	    line-height: 24px;
	    box-sizing: border-box;
		.fl {
		    float: left;
		}
		.fr {
		    float: right;
		}
		.name {
		    max-width: 100px;
		    text-overflow: ellipsis;
		    overflow: hidden;
		    white-space: nowrap;
		}
		.btn-im {
		    margin-left: 10px;
			height: 24px;
			padding-left: 26px;
			background: url(/static/images/im-icon.gif) no-repeat 0 0;
			background-size: 24px 24px;
			line-height: 24px;
		}
		.btn-text {
		    display: inline-block;
		    text-align: center;
		    color: #008bf7;
		    cursor: pointer;
		}
	}
	.item-bd {
	    border-bottom: 1px solid #edf1f4;
		.cell {
		    display: block;
		    width: 100%;
		    height: auto;
		    padding: 20px;
		    box-sizing: border-box;
			.inner {
				line-height: 22px;
			    width: 100%;
				padding:10px 0 25px 20px;
				.t-gray {
				    color: #9ca6ae;
				}
				.btn {
					width: 100px;
					margin-left: 20px;
				    display: inline-block;
				    height: 40px;
				    margin-top: 10px;
				    line-height: 40px;
				    text-align: center;
				    border: none;
				    border-radius: 2px;
				    cursor: pointer;
				    box-sizing: border-box;
				}
				.btn.btn-blue {
				    background: #008bf7;
				    color: #fff;
				}
			}
		}
		.cell:not(:first-child) {
		    border-left: none;
		    border-top: 1px solid #edf1f4;
		}
		.contract {
		    text-align: left;
			a {
			    color: #092235;
			}
		}
		.fl {
		    float: left;
		}
		.status {
		    text-align: right;
		}
	}
}
</style>
