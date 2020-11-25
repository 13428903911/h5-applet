<template>
	<view class="harder">
		<Adminheader></Adminheader>
		<view class="log-list w1060 container" v-for="(item,index) in LookWork" :key="item.name">
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
			<view class="fl ul table">
				<li v-for="(item,index) in facility" :key="item.id" :class="{active:index==currents}"  @click="clickTab(index,item.name)">{{item.name}}</li>
			</view>
			<view style="clear: both;"></view>
		</view>
		<view class="sj">
			 <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox> -->
			<view class="scsj fl" @click="tjsj">
				<i class="icon iconfont">&#xe76e;</i>添加时间
			</view>
			<view class="scsj" @tap="delet">
				<i class="icon iconfont" >&#xe60c;</i>删除时间
			</view>
		</view>
		
	<view class="admin_main" v-for="(items,index) in LookWorkTime" :key="index">
		 <el-checkbox class="check" @change="handleCheckedCitiesChange(index,items,items.id)" v-model = "lang[index]"></el-checkbox>

			<view class="cens" style="width: 85%;">
				<view class="details">
					<view>
						<el-popover placement="top-start" width="300" trigger="manual">
						    <div class="checkFieldAuditPolicy">{{items.work_desc}}</div>
						    <span slot="reference">{{items.work_desc.substr(0, 6) + "..."}}</span>
						</el-popover>
					</view>
					<view class="viewDetails">
						<el-popover placement="top-end" width="300" trigger="click">
							<span class="tips-content">{{items.work_desc}}</span>
							<span slot="reference">查看详情</span>
						 </el-popover>
					</view>
				</view>
				<view class="jobTime">
					<view>工作时长：{{items.work_hours}}小时</view>
					<view>{{items.work_date}}</view>
				</view>
			</view>

		
	</view>
	<!-- 默认显示 -->
	<view class="admin_main" v-for="(items,index) in defaultData" :key="index" v-if="fang == false">
		 <el-checkbox class="check" @change="handleCheckedCitiesChange(index,items,items.id)" v-model = "lang[index]"></el-checkbox>
		<view class="cens" style="width: 85%;">
			<view class="details">
				<view>
					<el-popover placement="top-start" width="300" trigger="manual">
					    <div class="checkFieldAuditPolicy">{{items.work_desc}}</div>
					    <span slot="reference">{{items.work_desc.substr(0, 6) + "..."}}</span>
					</el-popover>
				</view>
				<view class="viewDetails">
					<el-popover placement="top-end" width="300" trigger="click">
						<span class="tips-content">{{items.work_desc}}</span>
						<span slot="reference">查看详情</span>
					 </el-popover>
				</view>
			</view>
			<view class="jobTime">
				<view>工作时长：{{items.work_hours}}小时</view>
				<view>{{items.work_date}}</view>
			</view>
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
				lang:[],
				checkAll: false,
				isIndeterminate: true,
				currents:0,
				LookWork:[],
				LookWorkTime:[],
				defaultData:[],
				apply_id:'',
				fang:false,
				facility:[{id:1,name:'全部'},{id:2,name:'Mac'},{id:3,name:'Windows'},{id:4,name:'Android'}],
				todayItem:{},
				todayId:'',
				todayIndex:'',
				checkInfo:'',
                multipleSelection: [],
				checked:false
			}
		},
		methods: {
			  handleCheckAllChange(val) {
			        this.isIndeterminate = false;
			      },
			    handleCheckedCitiesChange(index,items,id) {
					this.checked = !this.checked
					this.multipleSelection.push(items)
					this.todayId = id
					this.todayIndex = index
			        // let checkedCount = value.length;
			        // this.checkAll = checkedCount === this.cities.length;
			        // this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
			      
			    },
			clickTab(index,name){//工作时间
				this.fang = true
				this.currents = index
				this.$http.post('/public/index.php/api/Work/LookWorkTime',{
					 apply_id:this.apply_id,
					work_device:name
					 }).then(res => {
					 this.LookWorkTime = res.data.data
				})
			},
			tjsj(id){
				wx.navigateTo({
					url: '/admin/admin_sj/admin_sj?id='+this.apply_id
				})
			},
			undergoQuery() {//默认
				 this.$http.post('/public/index.php/api/Work/LookWork',{apply_id:this.apply_id}).then(res => {
					 this.LookWork = res.data.data
					 console.log(this.LookWork)
				})
			},
			undergo() {//查看工作时间
				 this.$http.post('/public/index.php/api/Work/LookWorkTime',{
					 apply_id:this.apply_id,
					 work_device:'全部'
					 }).then(res => {
					 console.log(res)
					 this.defaultData = res.data.data
				})
			},
			delet(){//删除时间
				this.$http.post('/public/index.php/api/Work/deleteWorkTime',{id:this.todayId}).then(res => {
					if(res.data.code == 1){
						this.defaultData.forEach((item,i) => {
							if(item.id == this.todayId){
								this.defaultData.splice(i,1)
								window.location.reload();
								// this.LookWork = ''
								 this.lang[i] = false
							}
						})
							
					}
				})
			},
			sqjs(){//结算
			if(this.checked){
				this.$http.post('/public/index.php/api/Work/saveWorkCheck',{
					work_id:this.todayId,
					apply_id:this.apply_id
				}).then(res => {
					if(res.data.code == 1){
						uni.setStorage({key:'SettlementId',data:this.apply_id})
						 uni.showToast({icon: 'none',title: '申请结算成功'});
						 window.location.reload();//刷新
					}
				})
			}else{
				uni.showToast({icon: 'none',title: '请先选择需要结算任务'})
			}
				
			}
		},
		onLoad(option) {
			this.apply_id = option.apply_id
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
	display: flex;
	justify-content: space-between;
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
		display: flex;
		margin-bottom: -1px;
		justify-content: space-between;
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
	    z-index: 1;
	border-top: 1px solid #edf1f4;
	button{
		width: 50%;
		margin-top: 15px;
		font-size: 14px;
		background: #008bf7;
		color: #FFFFFF;
	}
}
.admin_main{
	display:flex;
	align-items: center;
	padding: 20px;
	background: #FFFFFF;
	border-bottom: 1px solid #edf1f4;
	.check{
		margin-right: 20px;
		width: 10%;
	}
	.cens{
		width: 85%;
		display: inline-block;
	}
	.details{
		display: flex;
		justify-content: space-between;
		.viewDetails{
			color: #008bf7;
		}
	},
	.jobTime{
		margin-top:10px;
		display:flex;
		justify-content: space-between;
	}
 }

</style>
