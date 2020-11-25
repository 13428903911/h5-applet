<template>
	<view>
		<view class="box-bd">
			<dl class="filters">
				<dt class="fl">职位类型</dt> 
				  <dd class="df">
					 <block v-for="(item,index) in haots" :key='index'>
					 	<text class="text" style="flex: 1;" :class="{active:index==num}" @click="menubtn(item.id,index)">{{item.position_type}}</text>
					 </block>
				  </dd>
			</dl>
		</view>
		 
		 <!-- 主题内容 -->
		 <view v-if="fang == false">
		 <view @click="xq(item.id)" class="item cl" v-for="(item,index) in allList" :key="index" ref="popover">
		 	<view class="item_a">
		 		<div class="item-side fl"><p class="num">{{item.price}}</p> <p class="t-gray">{{item.income_method}}</p></div>
		 		<div class="item-main">
		 			<h3 class="t-default">{{item.name}}</h3> 
		 			<p class="t-gray"><span>{{item.hiring_type}}</span>
		 		    <span>{{item.working_hours}}</span></p>
		 			<div class="tags"> 
		 				<div class="inner cl t-gray">
		 					<span v-for="skil in item.skill" :key="skil.id">
		 						{{skil}}
		 					</span>
		 				</div>
		 			</div> 
		 		</div>
		 	</view>
		 </view>
		 <!-- <view @click="moreShow" data-ga-name="JoblistMoreBtnClick" data-ga-label="all" class="tool-more"><i class="icon iconfont">&#xe600;</i>查看更多</view> -->
		 </view>
		 
		 
		<view @click="xq(item.id)" class="item cl" v-for="(item,index) in Detailsll" :key="index" ref="popover">
		 	<view class="item_a">
		 		<div class="item-side fl"><p class="num">{{item.price}}</p> <p class="t-gray">{{item.income_method}}</p></div>
		 		<div class="item-main">
		 			<h3 class="t-default">{{item.name}}</h3> 
		 			<p class="t-gray"><span>{{item.hiring_type}}</span>
		 		    <span>{{item.working_hours}}</span></p>
		 			<div class="tags"> 
		 				<div class="inner cl t-gray">
		 					<span v-for="skil in item.skill" :key="skil.id">
		 						{{skil}}
		 					</span>
		 				</div>
		 			</div> 
		 			<!-- <div class="meta"><p class="time t-gray">雇主当前在线</p> 
		 				<span class="legalize"><i class="icon iconfont">&#xe624;</i>企业已认证</span>
		 			</div> -->
		 		</div>
		 	</view>
		 </view>
		 <view v-if="moreShowBoolen" @click="moreShow" data-ga-name="JoblistMoreBtnClick" data-ga-label="all" class="tool-more"><i class="icon iconfont">&#xe600;</i>查看更多</view>
		 <view v-else @click="moreShow" data-ga-name="JoblistMoreBtnClick" data-ga-label="all" class="tool-more"><i class="icon iconfont">&#xe600;</i>已无更多</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fang:false,
				num:0,
				hideing:'',
				haots:[],
				Detailsll:[], //页面数据数组
				allList:[],//默认全部数据
				 moreShowBoolen: false,
				 page:1,
			}
		},
		mounted() {
		this.getList()	
		this.getSpecialData()
		},
		methods: {
			   getSpecialData () {	
			   this.$http.post('public/index.php/api/Work/getWorkList',{
			   	page:1,
			   	limit:15,
			   	position_type:0
			   }).then(res => {		
			        if (res.data.data.row.length <= 5) { // 5条数据一页		
			          this.allList = res.data.data.row 			
			          this.moreShowBoolen = false			
			        } else {			
			          this.allList = res.data.data.row.slice(0, 5)			
			          this.moreShowBoolen = true			
			        }
			
			      })
			
			    },
			menubtn(id,index){//点击当前的id
				this.num = id
				this.hideing = id
				this.fang = true
					this.$http.post('public/index.php/api/Work/getWorkList',{
						page:1,
						limit:15,
						position_type:id
					}).then(res => {
						  this.Detailsll = res.data.data.row
					})
			
			},
			getList(){//职位类型的接口
				 this.$http.post('public/index.php/api/Position/positionType', {
					 alltype:1
				}).then(res => {
					this.haots = res.data.data;
				})
				
			},
			xq(id){//点击显示当前详情
				wx.navigateTo({url:'/pages/job_detail/job_detail?id='+id})
				
			},
			moreShow(){
				this.$http.post('public/index.php/api/Work/getWorkList',{
					page:1,
					limit:15,
					position_type:0
				}).then(res => {
				        this.allList = this.allList.concat(res.data.data.row.slice(this.page * 5, (this.page + 1) * 5))
				        this.page++		
				        if (res.data.data.row.length >= this.page * 5) {		
				          this.moreShowBoolen = true	
							
				        } else {
							this.moreShowBoolen = false
				        }
				      })
			}
	},
		components:{
		
		}
	}
</script>

<style lang="less" scoped>
	.actineclass{
		display: block;
	}
	.errorclass{
		display: none;
	}
	.box-bd {
		    margin-top: 10px;padding: 0 15px;
			.filters {
			    margin-top: 20px;
			    padding: 25px 0px 15px 0px;
			    border-top: 1px solid #edf1f4;
			    border-bottom: 1px solid #edf1f4;
				dt {
					width: 100px;
					color: #9ca6ae;
					
				}
				.fl {
				    float: left;
				}
				.df{
					white-space: nowrap;
					overflow-x: auto;
					overflow-y: hidden;
					padding-bottom: 10px;
					.text{
						display: inline-block;
						margin: 0 10px;
					}
				}
		}
		.active{color: #008bf7;}
	}
	
	// 主体内容
	.item {
	    border-bottom: 1px solid #edf1f4;
		padding: 0px 15px;
		line-height: 24px;
		.item_a{
			padding: 20px 15px;
			margin: 0 -15px;
		}
		.item-side {
		    margin-right: 10px;
			width: 100px;
			.num{
				color: #008bf7;
			}
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
			h3{font-size: 100%;
	    font-weight: 400;}
			.tags {
			    position: relative;
			    margin-top: 4px;
				.inner {
				    white-space: nowrap;
				    overflow-x: auto;
				    overflow-y: hidden;
				}
				.t-gray {
				    color: #9ca6ae;
				}
				span {
				    display: inline-block;
				    margin-top: 5px;
				    padding: 0 5px;
				    font-size: 12px;
				    line-height: 24px;
				    background: rgba(9,34,53,.05);
				    border-radius: 2px;
				}
				span:not(:last-child) {
					margin-right: 5px;
				}
			}
			
			.meta {
			    position: static;
			    margin-top: 6px;
			    text-align: left;
				right: 0;
				top: 0;
				p{
					height: 24px;
				}
				.legalize {
				    display: inline-block;
				    margin-top: 6px;
				    padding: 0 8px 0 5px;
				    background: rgba(9,34,53,.05);
				    border-radius: 12px;
				    line-height: 24px;
				    color: #092235;
				    font-size: 12px;
					text-align: left;
					 .icon {
					    margin-right: 5px;
					    color: #008bf7;
					    font-size: 14px;
					    vertical-align: middle;
					}
				}
			}
			.t-gray {
			    color: #9ca6ae;
			}
		}
	}
	.tool-more {
		    padding: 30px 0px 20px 0;
		    text-align: center;
		    color: #9ca6ae;
		    line-height: 24px;
		    cursor: pointer;
			.icon {
			    margin-right: 10px;
			    vertical-align: bottom;
			}
		}
</style>