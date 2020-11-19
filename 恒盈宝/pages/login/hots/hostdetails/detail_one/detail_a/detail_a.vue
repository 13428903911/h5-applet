<template>
	<view>
		<!-- 第一个 -->
		<view @click="xq(item.id,item)" class="item cl" v-for="(item,index) in Detailsll" :key="index">
			<view class="item_a">
				<div class="item-side fl"><p class="num">{{item.price}}</p> <p class="t-gray">{{item.income_method}}</p></div>
				<div class="item-main">
					<h3 class="t-default">{{item.name}}</h3> 
					<p class="t-gray"><span>{{item.hiring_type}}</span>
				    <span>{{item.working_hours}}</span></p>
					<div class="tags">
						<div class="inner cl t-gray">
							<span v-for="skil in item.skill">
								{{skil}}
							</span>
						</div>
					</div> 
					<div class="meta"><p class="time t-gray">雇主当前在线</p> 
						<span class="legalize"><i class="icon iconfont">&#xe624;</i>企业已认证</span>
					</div>
				</div>
			</view>
		</view>
		<view @click="moreShow" data-ga-name="JoblistMoreBtnClick" data-ga-label="all" class="tool-more"><i class="icon iconfont">&#xe600;</i>查看更多</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				Detailsll:[], //页面数据数组
				scroll: true, //设置一个开关避免重复请求数据
			    pagenum: 1, //当前页数
			    totalnum: 2, //总页数
			}
		},
		methods: {
			
			xq(id,item){
					if(item.income_method == '预计月薪') {
						wx.navigateTo({
							url:'/pages/job_detail/job_detail?id='+id
						})
					}if(item.income_method == '项目预算'){
						wx.navigateTo({
							url:'/pages/job_detail/ProjectBudget?id='+id
						})
				}		
					
			},
			getSpecialData(){
				 this.$http.post('public/index.php/api/Work/getWorkList',{
					 page:1,
					 limit:15,
					 position_type:0
				 }).then(res => {
				 	  this.Detailsll = res.data.data.row 
				 })
				 
			},
			moreShow(){
				// let pageNum = this.page; //当前页数
				//   let arturl = 'http://81.69.199.157:82/public/index.php/api/Work/getWorkList';
				//  this.$http.post(arturl, {
				// 	position_type:0
				// }).then(res => {
				// 	console.log(arturl, res.data.data)
				// 	if (this.pagenum === 1) {
				// 		  this.Detailsll = res.data.data.row; // 数据数组
				// 		  this.pagenum = res.data.data.page; //当前页数
				// 		  this.totalnum = res.data.data.total_num; //总页数
				// 		} else {
				// 		  this.Detailsll = [  // 当前数据与第二页数据合并到一个数组中
				// 			...this.Detailsll,
				// 			...res.data.data.row
				// 		  ];
				// 		  this.scroll = true;
				// 		  console.log(this.Detailsll)
				// 		}
				// 		 ++this.pagenum	    
				// })
				// .catch(err => {
				// console.log(err)
				// })
			}
		},
		created () {
		    this.getSpecialData();
		 }
	}
</script>

<style lang="scss" scoped>
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
