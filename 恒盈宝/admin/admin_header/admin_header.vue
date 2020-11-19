<template>
	<view class="bg-gray">
		<view class="header switch">
			<view class="header-pc cl">
				<h1 class="logo fl" @click="changeImg">
					<img src="../../static/images/logo.png">
					<i v-show="showUpImg" class="icon iconfont">&#xe600;</i>
					<i v-show="!showUpImg" class="icon iconfont">&#xe65a;</i>
				</h1>
				<view class="btn-group fr">
					<a @click="resume()" href="javascript:;" class="btn fl btn-green">完善资料</a>
				</view>
				<view class="header-drawer" :class="{active:flag}">
					<ul class="nav">
							<li @click="adminx()" class="">
								<a>我的首页</a>
							</li>
							<li @click="rmgz()">
								<a>热门工作</a>
							</li>
							<li @click="gushi()">
								<a>金斗云故事</a>
							</li>
							<!-- <li @click="my_dialogue()">
								<a>我的会话</a>
							</li> -->
						<li class="hr"></li>
						<li @click="grsz()">
							<a>个人设置</a>
						</li>
						<li @click="tuichu()"><a>退出登录</a></li>
					</ul>
				</view>
			</view>
		</view>
		<view style="clear: both;"></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showUpImg:true,
				flag:false,
				active:false
				
			}
		},
		methods: {
			
			changeImg:function(){
				this.showUpImg = !this.showUpImg
				this.flag = !this.flag;
				},
				drawerChang: function(index) {
					this.active = !this.active
				},
			adminx(){
				wx.navigateTo({
					url:'/admin/admin_index/admin_index'
				})
			},
			gushi(){
				wx.navigateTo({
					url:'/pages/story/story'
				})
			},
			rmgz(){
				wx.navigateTo({
					url:'/pages/hots/hots'
				})
			},
			resume(){
				wx.navigateTo({
					url:'/admin/admin_data/admin_data'
				})
			},
			my_dialogue(){
				wx.navigateTo({
					url:'/admin/admin_my_dialogue/admin_my_dialogue'
				})
			},
			
			grsz(){
				wx.navigateTo({
					url:'/settings/setting_user/setting_user'
				})
			},
			tuichu(){
				this.$store.commit('clear')
			},
		}
		
	}
</script>

<style lang="scss" scoped>
.bg-gray{
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		line-height: 70px;
		box-sizing: border-box;
		z-index: 999;
		height: 50px;
		line-height: 50px;
		padding: 0 15px;
		background: #fff;
		.fl {
		    float: left;
		}
		.logo{
			img{width: 109px;height: 32px;}
			.icon {
			    margin-left: 9px;
			    color: #fff;
			    vertical-align: super;
			    font-size: 24px;
				color: #9ca6ae;
			}
		  }
		.btn-group {
		    margin-top: 10px;
			.btn {
			    width: auto;
			    height: 30px;
			    padding: 0 10px;
			    line-height: 30px;
			    font-size: 14px;
				cursor: pointer;
				box-sizing: border-box;
				text-align: center;
				border: none;
				border-radius: 2px;
				display: inline-block;
			}
			.btn.btn-blue {
			    background: #008bf7;
			    color: #fff;  
				margin-right: 10px;
			}
			.btn.btn-green {
			    background: #2ed573;
				color: #fff;
				
			}
		}
		.fr {
		    float: right;
		}
		.header-drawer {
		    display: none;
		    width: 100%;
		    box-sizing: border-box;
		    overflow-y: auto;
			position: absolute;
			top: 44px;
			left: 0;
			background: #FFFFFF;
			.nav{
				padding: 0 20px;
				li {
				    height: 30px;
				    margin: 20px 0;
				    line-height: 30px;
				    font-size: 16px;
					position: relative;
					cursor: pointer;
					a {
					    color: #092235;
						font-size: 16px!important;
					}
				}
				li.cur a {
				    color: #008bf7;
				}
				li.hr {
				    height: 0;
				    margin: 20px 0;
				    border-top: 1px solid #eee;
				}
			}
		}
		.active{display: block;padding: 0px 0 405px;}
	}
	.header.switch {
	    // background: #fff;
	    box-shadow: 0 0 10px 0 rgba(9,34,53,.05);
	    transition: all .5s;
	}
}	
/deep/ .navBox{
		    position: fixed;
		    top: 50px;
			left: -220px;
		    width: 220px;
		    bottom: 0;
			z-index: 99;
		    background-color: #ffffff;
			box-shadow: 0 0 10px 0 rgba(9,34,53,.05);
		    -webkit-transition: -webkit-transform 0.3s ease;
		    transition: -webkit-transform 0.3s ease;
		    transition: transform 0.3s ease;
		    transition: transform 0.3s ease, -webkit-transform 0.3s ease;
	}
    /deep/ .add_class{
		left:0 !important;
	}
	#iconNav{
		display: block;
		 position: absolute;
		 top:0;
		 right:0;
		 margin-right: -31px;
	}
	.navBox{

	}
	.admin_nbr{
		display: flex;
		justify-content: space-between;
		padding:20px;
		font-size: 14px;
		color: #092235;
		.left{
			flex:3;
		}
		.center{
			flex:10;
		}
		.right{
			flex:0;
		}
	}
.bg-gray{
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		line-height: 70px;
		box-sizing: border-box;
		z-index: 999;
		height: 50px;
		line-height: 50px;
		padding: 0 15px;
		background: #fff;
		.fl {
		    float: left;
		}
		.logo{
			img{width: 109px;height: 32px;}
			.icon {
			    margin-left: 9px;
			    color: #fff;
			    vertical-align: super;
			    font-size: 24px;
				color: #9ca6ae;
			}
		  }
		.btn-group {
		    margin-top: 10px;
			.btn {
			    width: auto;
			    height: 30px;
			    padding: 0 10px;
			    line-height: 30px;
			    font-size: 14px;
				cursor: pointer;
				box-sizing: border-box;
				text-align: center;
				border: none;
				border-radius: 2px;
				display: inline-block;
			}
			.btn.btn-blue {
			    background: #008bf7;
			    color: #fff;  
				margin-right: 10px;
			}
			.btn.btn-green {
			    background: #2ed573;
				color: #fff;
				
			}
		}
		.fr {
		    float: right;
		}
		.header-drawer {
		    display: none;
		    width: 100%;
		    box-sizing: border-box;
		    overflow-y: auto;
			position: absolute;
			top: 44px;
			left: 0;
			background: #FFFFFF;
			.nav{
				padding: 0 20px;
				li {
				    height: 30px;
				    margin: 20px 0;
				    line-height: 30px;
				    font-size: 16px;
					position: relative;
					cursor: pointer;
					a {
					    color: #092235;
						font-size: 16px;
					}
				}
				li.cur a {
				    color: #008bf7;
				}
				li.hr {
				    height: 0;
				    margin: 20px 0;
				    border-top: 1px solid #eee;
				}
			}
		}
		.active{display: block;padding: 0px 0 405px;}
	}
	.header.switch {
	    // background: #fff;
	    box-shadow: 0 0 10px 0 rgba(9,34,53,.05);
	    transition: all .5s;
	}
}	

</style>
