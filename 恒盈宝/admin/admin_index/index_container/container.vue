<template>
	<view class="page-admin container">
		<view class="main">
			<!-- <view class="settlein">
				<p><i class="icon iconfont">&#xe601;</i> <span>您未完成入驻审核，无法投递平台职位</span></p> 
				<a @click="sqrz()" class="btn-text">申请入驻</a>
			</view> -->
			<view class="box box-stats">
				<view class="user">
					<view class="avatar">
						<img @click="aimg" src="/static/images/touxiang5.png" alt="" v-if="!imageUrl">
						<img @click="aimg" :src="imageUrl" alt="" v-else>
					</view>
					<view class="info">
						<p class="name">{{userName}}</p>
						<view class="meta">
							<!-- <view class="legalize">
								<view class="item legalize-un">
									<i class="icon iconfont">&#xe601;</i>未实名
								</view>
							</view> -->
						</view>
					</view>
<!-- 					<view class="competitiveness">
						<view class="scale"><view class="inner" style="width: 3%;"></view></view>
						<view class="score">
							<view class="fl"><p class="num fl">3</p> <p class="text fl">竞争力指数</p></view>
							<a @click="tisheng()" class="fr">去提升</a>
						</view>
						<view style="clear: both;"></view>
					</view> -->
				</view>
				<view class="stats cl">
					<view class="item fl"><p class="num">¥ <span class="num" v-if="flag == false">0</span>{{totalEarned}}</p> <p class="text t-gray">累计赚取</p></view> 
					<view class="item fl"><p class="num"><span class="num" v-if="fla == false">0</span>{{totalWorkTime}} h</p> <p class="text t-gray">工作时长</p></view>
					<view class="item fl"><p class="num">¥ <span class="num" v-if="fl == false">0</span>{{averageHourlyRate}}</p> <p class="text t-gray">平均时薪</p></view> 
					<view class="item fl"><p class="num"><span class="num" v-if="f == false">0</span>{{totalContractedJob}}</p> <p class="text t-gray">签约的工作</p></view>
					<view style="clear: both;"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 userName:'',
				 imageUrl:'',
				totalEarned:"",
				totalWorkTime:"",
				averageHourlyRate:"",
				totalContractedJob:"",
				flag:false,
				fla:false,
				fl:false,
				f:false,	
			}
		},
		methods: {
			userMessageQuery() {//查询个人信息
				 this.$http.post('/public/index.php/api/User/index',{user_id:this.$store.state.userInfo.user_id}).then(res => {
					 if(res.data.data.length<0){}
					else{
					   this.userName = res.data.data[0].username
					   this.imageUrl =  res.data.data[0].avatar
					}
				 })
			},
			sqrz(){
				wx.navigateTo({
					url: '/admin/admin_data/admin_data'
				})
			},
			tisheng(){
				wx.navigateTo({
					url: '/admin/admin_competitiveness/admin_competitiveness'
				})
			},
			aimg(){
				wx.navigateTo({
					url: '/settings/setting_user/setting_user'
				})
			}
		},
		created() {
			this.$http.post('/public/index.php/api/User/getUserTotal',{user_id:this.$store.state.userInfo.user_id,}).then(res => {
				console.log(res)
				 if(res.data.data.totalEarned==0){
				 	this.flag = false
				 }else{
				 	this.flag = true
					this.totalEarned = res.data.data.totalEarned
				 }
				 if(res.data.data.totalWorkTime==0){
				 	this.fla = false
				 }else{
				 	this.fla = true
				 	this.totalWorkTime = res.data.data.totalWorkTime
				 }
				 if(res.data.data.averageHourlyRate==0){
				 	this.fl = false
				 }else{
				 	this.fl = true
				 	 this.averageHourlyRate = res.data.data.averageHourlyRate
				 }
				 if(res.data.data.totalContractedJob==0){
				 	this.f = false
				 }else{
				 	this.f = true
				   this.totalContractedJob = res.data.data.totalContractedJob
				 }
			}),
			this.userMessageQuery()
			
		}
	}
</script>

<style scoped lang="scss">
.page-admin {
	line-height: 24px;
	.main {
	    width: 100%;
		.settlein {
		    background: #fff;
		    color: #ff5853;
		    line-height: 20px;
		    -ms-flex-pack: justify;
		    justify-content: space-between;
			display: -ms-flexbox;
			display: flex;
			padding: 20px 15px;
			margin: 0 -15px;
			.btn-text {
			    display: inline-block;
			    text-align: center;
			    color: #008bf7;
			    cursor: pointer;
			    line-height: 20px;
			}
			.icon{
				margin-right: 5px;
			}
		}
		.box {
		    margin: 0 -15px;
		    padding: 20px 15px;
			background: #fff;
			line-height: 24px;
			.user {
			    padding: 30px;
			    background-image: linear-gradient(180deg,#ecf1f3,#dae3e9);
			    border-radius: 4px;
			    margin-bottom: 30px;
				.avatar {
				    display: -ms-flexbox;
				    display: flex;
				    -ms-flex-pack: center;
				    justify-content: center;
				    -ms-flex-align: center;
				    align-items: center;
				    width: 60px;
				    height: 60px;
				    overflow: hidden;
				    border-radius: 60px;
				    border: 1px solid #fff;
				    box-sizing: border-box;
					float: none;
					margin: 0 auto;
					img {
					    max-width: 60px;
					    max-height: 60px;
					}
				}
				.info {
				    width: 100%;
					.name {
						font-size: 16px;
					    font-weight: 700;
					    line-height: 26px;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						width: 100%;
						margin-top: 20px;
						text-align: center;
					}
					.meta {
					    width: 100%;
						.legalize {
						    float: none;
						    margin: 14px auto 0;
							width: 74px;
							.item {
							    height: 24px;
							    padding: 0 0 0 6px;
							    background: #f6f8f9;
							    border-radius: 16px;
							    line-height: 24px;
							    font-size: 12px;
								.icon {
								    color: #9ca6ae;
									margin-right: 5px;
									vertical-align: -2px;
								}
							}
						}
					}
				}
				.competitiveness {
				    width: 100%;
				    margin: 20px auto 0;
					.scale {
					    width: 200px;
					    height: 10px;
					    margin: 0 auto;
					    background: #fff;
					    border-radius: 10px;
						.inner {
						    height: 10px;
						    background-image: linear-gradient(270deg,#01bffc,#008bf7);
						    border-radius: 10px;
						}
					}
					.score {
					    width: 200px;
					    margin: 8px auto 0;
						.fr{float: right;color: #008bf7;}
					}
				}
			}
			.stats {
			    margin: 0;
				.item {
				    width: 50%;
				    margin: 20px 0 0;
					text-align: center;
					position: relative;
					.t-gray {
					    color: #9ca6ae;
					}
				}
			}
		}
		.box:not(:first-child) {
		    margin-top: 20px;
		}
		.fl {
		    float: left;
		}
	}
}
.container {
    padding: 20px 15px;
	padding-top: 80px;
	box-sizing: border-box;
}
</style>
