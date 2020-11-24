<template>
	<view>
		<Adminheader></Adminheader>
		<Adminheaders></Adminheaders>
		<view class="box box-quotes">
			<view class="boxs" v-for="(item,index) in getWorkManagement" :key="index">
				<view class="box-hd cl">
					<h2 class="title fl">工作管理</h2> 
					<a class="all fr">全部工作 (1)<i class="icon iconfont">&#xe605;</i></a>
					<view style="clear: both;"></view>
				</view>
				<view class="box-bd">
					<!-- <view class="data-empty">
						<img src="/static/images/management.png"> 
						<p>您还没有进行中的工作</p>
					</view> -->
					<view class="item">
						<view class="info">
							<p class="title">
								<a>{{item.name}}</a>
								<view class="other cl"><span class="t-gray">{{item.publisher}}</span></view>
							</p> 
						</view>
					<!-- 	<view class="meta">
							<view class="btn-group">
								<p class="btn-text btn-im">在线沟通</p> 
							</view>
							<view class="btn-group">
								<p class="btn-text">查看报价</p>
							</view>
						</view> -->
					</view>
				</view>
			</view>
		</view>
		<Jobfooter></Jobfooter>
	</view>
</template>

<script>
	import Adminheader from '../admin_header/admin_header.vue'
	import Adminheaders from '../admin_header/admin_headers.vue'
	import Jobfooter from '../../pages/job_detail/jobfooter/jobfooter.vue'
	export default {
		data() {
			return {
				getWorkManagement:[]
			}
		},
		methods: {
			
		},
		created() {
			this.$http.post('/public/index.php/api/Work/getWorkManagement',{
				user_id:this.$store.state.userInfo.user_id,
				page:1,
				limit:10,
			}).then(res => {
				this.getWorkManagement = res.data.data.row
				console.log(res)
			})
		},
		components:{
			Adminheader,
			Jobfooter,
			Adminheaders
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
				padding: 25px 15px;
			}
			.all {
			    height: 24px;
			    margin-top: 4px;
			    line-height: 66px;
				color: #008bf7;
				margin-right: 10px;
				.icon {
				    margin-left: 5px;
					font-size: 20px;
					vertical-align: middle;
				}
			}
			.fl {
			    float: left;
			}
			.fr {
			    float: right;
			}
		}
		.box-bd {
		    margin-top: 10px;	
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
			    display: block;
			    width: 100%;
			    min-height: unset;
			    padding: 20px 0;
				border-top: 1px solid #edf1f4;
				text-align: center;
				.other {
				    margin-top: 5px;
					.t-gray {
					    color: #9ca6ae;
					}
					.fl {
					    float: left;
					}
				}
				.info {
				    width: 100%;
					.title {
					    max-height: 48px;
						a {
						    color: #092235;
						}
					}

				}
				.meta {
				    display: block;
				    width: 100%;
				    margin-top: 20px;
					clear: both;

					.btn-group {
					    // display: -ms-flexbox;
					    // display: flex;
					    // -ms-flex-pack: justify;
					    // justify-content: space-between;
					    width: 100%;
					    margin-top: 20px;
						text-align: center;
						.btn-text {
						    display: inline-block;
						    text-align: center;
						    color: #008bf7;
						    cursor: pointer;
							line-height: 24px;
						}
						.btn-im {
						    height: 24px;
						    padding-left: 26px;
						    background: url(/static/images/im-icon.gif) no-repeat 0 0;
						    background-size: 24px 24px;
						}
					}
				}
			}
		}
	}
	
}
</style>
