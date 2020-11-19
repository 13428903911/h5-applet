<template>
	<view>
		<!-- 第一个 -->
			<view @click="xq()" class="item cl" v-for="(itme,index) in Details">
				<view class="item_a">
					<div class="item-side fl"><p class="num">{{itme.price}}</p> <p class="t-gray">{{itme.income_method}}</p></div>
					<div class="item-main">
						<h3 class="t-default">{{itme.name}}</h3> 
						<p class="t-gray"><span>{{itme.hiring_type}}</span>
					    <span>{{itme.working_hours}}</span></p>
						<div class="tags">
							<div class="inner cl t-gray">
								<span v-for="skil in itme.skill">
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
			<view data-ga-name="JoblistMoreBtnClick" data-ga-label="all" class="tool-more"><i class="icon iconfont">&#xe600;</i>查看更多</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				Details:[]
			}
		},
		methods: {
			xq(){
				wx.navigateTo({
				url:'/pages/job_detail/job_detail'
			  })
			},
			getList(){
				this.$http.post('public/index.php/api/Work/getWorkList', {
						 page:1,
						 limit:15,
						 position_type:this.$store.state.detailId
					}).then(res => {
						let that = this
						let resData = res.data.data.row
						for(let i=0; i<resData.length; i++) {
							if(resData[i].position == '产品') {
								 that.Details = resData
								}
								
						}				
				})
			}
		},
		mounted(){
			this.getList()
			
		},
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
