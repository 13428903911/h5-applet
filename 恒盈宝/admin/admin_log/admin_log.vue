<template>
	<view class="harder">
		<Adminheader></Adminheader>
		<view class="log-list w1060 container" v-for="(item,index) in LookWork" :key="index">
			<view class="page-hd">
				<h2 class="title">{{item.name}}</h2>
				<view class="meta">
					<view class="fl">
						<li class="fl">时薪：<span>{{item.price}}</span></li> 
						<li class="fl">每周最长工作时间：<span>{{item.working_hours}}/周</span></li> 
						<li class="fl">人才：<span>{{item.apply_name}}</span></li>		
					</view>
					<view style="clear: both;"></view>
				</view>
			</view>
			<view class="stat">
				<view class="total">
					<view class="item fl">

						<p class="num">{{item.total_hours}} 小时</p> <p>总工作时长</p>
					</view>
					<view class="item fr">
						<p class="num">{{item.total_money}} 元</p> <p>总工作价值</p>
					</view>
				</view>
				<view class="item value">
					<view class="scale">
						<li class="b-green fl" style="width: 33%;"></li> 
						<li class="b-yellow fl" style="width: 33%;"></li> 
						<li class="b-red fl" style="width: 34%;"></li>
					</view>
					<view class="numerical">
						<li class="fl"><p class="num t-green">{{item.account_money}} 元</p> <p>已结算</p></li> 
						<li class="fl"><p class="num t-yellow">{{item.auth_money}} 元</p> <p>审核中</p></li> 
						<li class="fl"><p class="num t-red">{{item.uncommit_money}} 元</p> <p>未提交</p></li>
					</view>
					
				</view>
			</view>
		</view>
		<view class="tabs cl">
			<view class="fl ul">
				<li class="fl" :class="{'active' : 1 == currents}" @click="clickTab(1)">全部</li>
				<li class="fl" :class="{'active' : 2 == currents}" @click="clickTab(2)">Mac</li>
				<li class="fl" :class="{'active' : 3 == currents}" @click="clickTab(3)">Windows</li>
				<li class="fl" :class="{'active' : 4 == currents}" @click="clickTab(4)">Android</li>
			</view>
			<view style="clear: both;"></view>
		</view>
		<view class="sj">
			<view class="scsj fl" @click="tjsj">
				<i class="icon iconfont">&#xe76e;</i>添加时间
			</view>
			<view class="scsj">
				<i class="icon iconfont">&#xe60c;</i>删除时间
			</view>
		</view>
		<view class="gzjl" v-for="(items,index) in LookWorkTime" :key="index" @click="clickTab(1)">
			<view class="gzjl_zz">
				<view class="gzjl_top">
					{{items.work_desc}}
				</view>
				<view class="ckxq">
					<span @click="ckxq">查看详情</span>
				</view>
			</view>
			<view class="gzjl_bottom">
				<span class="fl">工作时长：{{items.work_hours}}小时</span>
				<span class="fr">{{items.work_date}}</span>
				<view style="clear: both;"></view>
			</view>
		</view>

		<!-- <view class="data-empty">
			<img src="/static/images/default-time.png"> <p>暂无工作记录</p>
		</view> -->
		<view class="jsbutton">
			<button type="default" @click="sqjs">去 结 算</button>
		</view>
	</view>
</template>

<script>
	import Adminheader from '../admin_header/admin_header.vue'
	export default {
		data() {
			return {
				currents:1,
				LookWork:[],
				LookWorkTime:[]
			}
		},
		methods: {
			clickTab(cur){
				this.currents = cur
			},
			tjsj(){
				wx.navigateTo({
					url: '/admin/admin_sj/admin_sj'
				})
			},
			undergoQuery() {//查看工作
				 this.$http.post('/public/index.php/api/Work/LookWork',{apply_id:2}).then(res => {
					 this.LookWork = res.data.data
				})
			},
			undergo() {//查看工作时间
				 this.$http.post('/public/index.php/api/Work/LookWorkTime',{apply_id:2}).then(res => {
					 console.log(res)
					 this.LookWorkTime = res.data.data
				})
			},
			ckxq(){
				
			}
		},
		onLoad() {
			this.undergoQuery()
			this.undergo()
		},
		components:{
			Adminheader
		}
	}
</script>

<style lang="scss" scoped>
.sj{
	text-align: right;
	padding: 10px 20px;
	background: #FFFFFF;
	.scsj{
		color: #000;
		display: inline-block;
		.icon{margin-right: 3px;}
	}
	.fl{margin-right: 20px;}
}
.harder{
	background: #f6f8f9;
	margin-bottom: 100px;
	.log-list {
	    padding-bottom: 114px;
		line-height: 24px;
		.page-hd {
		    margin-top: 20px;
			line-height: 34px;
			.title {
			    font-size: 24px;
				font-weight: 700;
			}
			.meta {
			    margin-top: 10px;
			    line-height: 24px;
				.fl {
				    float: left;
				}
				li {
				    margin-right: 20px;
				    font-weight: 700;
					span {
					    color: #008bf7;
					    font-weight: 400;
					}
				}
			}
		}
		.stat {
		    display: block;
		    margin: 20px 0 0;
			clear:both;
			.total {
			   display: flex;
			   justify-content: space-between;
				.item {
				    width: calc(50% - 10px);
				    height: 92px;
				    margin: 0;
					padding: 20px;
					box-sizing: border-box;
					background: #fff;
					border-radius: 2px;
					text-align: center;
					.num {
					    margin-top: 0;
						color: #008bf7;
						font-size: 18px;
						line-height: 28px;
						font-weight: 700;
					}
				}
			}
		}
		
	}
	.data-empty {
	    padding: 100px 0;
		text-align: center;
		background: #fff;
		img {
		    width: 120px;
		}
		p {
		    margin-top: 10px;
		}
	}
	.container {
	    padding: 20px 15px;
		box-sizing: border-box;
	}
	.log-list .stat .item {
	    width: 100%;
	    height: 146px;
	    margin: 10px 0 0;
	    padding: 20px;
		box-sizing: border-box;
		background: #fff;
		border-radius: 2px;
		text-align: center;
		.scale {
		    height: 10px;
		    margin-top: 12px;
		    border-radius: 10px;
		    overflow: hidden;
			li {
			    height: 10px;
			}
			.b-green {
			    background-color: #2ed573;
			}
			.fl {
			    float: left;
			}
			.b-yellow {
			    background-color: #fcb73a;
			}
			.b-red {
			    background-color: #ff5853;
			}
		}
		.numerical {
		    display: -ms-flexbox;
		    display: flex;
		    margin-top: 32px;
			li {
			    -ms-flex-positive: 1;
			    flex-grow: 1;
			}
			.fl {
			    float: left;
			}
			.num {
			    font-size: 18px;
			    line-height: 28px;
				font-weight: 700;
			}
			.t-green {
			    color: #2ed573;
			}
			.t-yellow {
			    color: #fcb73a;
			}
			.t-red {
			    color: #ff5853;
			}
		}
	}
}
.tabs {
    border-bottom: 1px solid #edf1f4;
    color: #9ca6ae;
	background: #fff;
	padding: 0 20px;
	.ul{
		margin-bottom: -1px;
		li:not(:last-child) {
		    margin-right: 20px;
		}
		li{
			height: 44px;
			line-height: 44px;
			cursor: pointer;
			padding-bottom: 1px;	
		}
		 li.active {
		    padding-bottom: 0;
		    border-bottom: 1px solid #008bf7;
		    color: #008bf7;
		}
	}
	.fl {
	    float: left;
	}
}
.jsbutton{
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 70px;	
	text-align: center;
	background: #FFFFFF;
	border-top: 1px solid #edf1f4;
	button{
		width: 50%;
		margin-top: 15px;
		font-size: 14px;
		background: #008bf7;
		color: #FFFFFF;
	}
}
.gzjl{
	padding: 20px 20px;
	background: #FFFFFF;
	position: relative;
	border-bottom: 1px solid #edf1f4;
	.gzjl_top{
		line-height: 24px;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-line-clamp: 2;
	  -webkit-box-orient: vertical;
	}
	.gzjl_tops{
		line-height: 24px;
	}
	.ckxq{
		color: #008bf7;
		text-align: right;
		margin-top: 10px;
	}
	.gzjl_bottom{
		margin-top: 10px;
	}
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
}

</style>
