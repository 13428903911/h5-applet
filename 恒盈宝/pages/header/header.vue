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
					<!-- <a href="javascript:;" class="btn fl btn-blue">免费招聘</a> -->
					<a @click = "zgz()" class="btn fl btn-green">找工作</a>
				</view>
				<view class="header-drawer" :class="{active:flag}">
					<ul class="nav">
							<li @click = "denglu()" v-show="fla">
								<a>登录</a>
							</li>
							<li @click = "zhuce()" class="" v-show="fla">
								<a>注册</a>
							</li>
						<li class="hr" v-show="fla"></li>
						<li @click = "rmgz()" class="">
							<a>热门工作</a>
						</li>
						 <li @click = "jies()"><a>产品介绍</a></li>
						<li @click = "gushi()"><a>金斗云故事</a></li>
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
				fla:true,		
			}
		},
		methods: {
			
			changeImg:function(){
				this.showUpImg = !this.showUpImg
				this.flag = !this.flag;
				},
			denglu(){
				wx.navigateTo({
					url:'/pages/login/login'
				})
			},
			zhuce(){
				wx.navigateTo({
					url:'/pages/register/register'
				})
			},
			rmgz(){
				wx.navigateTo({
					url:'/pages/hots/hots'
				})
				window.location.reload();
			},
			gushi(){
				wx.navigateTo({
					url:'/pages/story/story'
				})
			},
			jies(){
				wx.navigateTo({
					url:'/pages/index/index'
				}),
				window.location.reload();
			},
			zgz(){
				if(this.$store.state.userInfo.user_id || this.$store.state.userInfo.nickname){
				     wx.navigateTo({url:'/admin/admin_data/admin_data'})
				    }else{
					wx.navigateTo({url:'/pages/login/login'})
				}
			}
				
		},
		mounted() {
			if(this.$store.state.userInfo.user_id || this.$store.state.userInfo.nickname){
				this.fla = !this.fla;
			}else{
				this.fla = this.fla;
			}
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
		.active{display: block;padding: 0px 0 470px;}
	}
	.header.switch {
	    // background: #fff;
	    box-shadow: 0 0 10px 0 rgba(9,34,53,.05);
	    transition: all .5s;
	}
}	

</style>
