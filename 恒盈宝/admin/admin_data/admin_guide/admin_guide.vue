<template>
	<view>
	<view class="page-guide">
		<Adminheader></Adminheader>
		<view class="user-guide w1060 container">
			<view class="box box-guide">
				<view class="box-hd">
					<h2 class="title">如何在云队友获得更多的工作机会?</h2> 
					<p>给客户的第一印象很重要，创建一个优秀的个人简历吧</p>
				</view>
				<view class="box-bd">
					<view class="list cl">
						<li class="item fl"><img src="/static/images/guide1.png"> <h3>选择准确的技能标签</h3> <p>准确选择自己的技能标签，系统匹配将更加精准</p></li>
						<li class="item fl"><img src="/static/images/guide2.png"> <h3>添加丰富的项目经历</h3> <p>丰富自己的项目经历，添加链接或图片以增强信任</p></li>
						<li class="item fl"><img src="/static/images/guide3.png"> <h3>使用真实形象</h3> <p>昵称尽量为真实姓名，头像尽量为个人正脸</p></li>
						<li class="item fl"><img src="/static/images/guide4.png"> <h3>实名认证</h3> <p>为保障信息真实性，平台会要求您实名认证</p></li>
						<li class="item fl"><img src="/static/images/guide5.png"> <h3>绑定微信</h3> <p>绑定微信服务号，及时接收职位推荐及沟通信息</p></li>
						<li class="item fl"><img src="/static/images/guide6.png"> <h3>提高竞争力指数</h3> <p>提升云队友竞争力指数，帮您提高自动匹配权重</p></li>
					</view>
					<view class="btn-group"><a @click="jixu()" class="btn btn-blue">继 续</a></view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import Adminheader from '../../admin_header/admin_header.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			jixu(){
				wx.navigateTo({
					url:'/admin/admin_data/admin_data'
				})
			}
		},
		components:{
			Adminheader
		}
	}
</script>

<style lang="scss" scoped>
.page-guide {
    background: url(/static/images/guidepag.png) no-repeat 0 0;
    background-size: cover;
	.container {
	    margin-left: auto;
	    margin-right: auto;
	    padding: 20px 15px;
	    box-sizing: border-box;
		position: relative;
		z-index: 111;
		background: #FFFFFF;
	}
	.user-guide {
	    line-height: 24px;
		.box-guide {
		    padding: 30px 15px;
			text-align: center;
		}
	}
	.box {
	    margin: 0 -15px;
		.box-hd {
		    display: -ms-flexbox;
		    display: flex;
		    -ms-flex-pack: justify;
		    justify-content: space-between;
		    -ms-flex-align: end;
		    align-items: flex-end;
		    line-height: 28px;
			line-height: 26px;
			.title {
			    font-size: 20px;
			    line-height: 30px;
				font-weight: 700;
			}
			p {
			    margin-top: 10px;
			    line-height: 24px;
			}
		}
		.box-bd {
		    margin-top: 10px;
			.list {
			    width: 100%;
			    margin: 15px 0 0;
			    display: -ms-flexbox;
			    display: flex;
			    -ms-flex-wrap: wrap;
			    flex-wrap: wrap;
			    -ms-flex-pack: justify;
			    justify-content: space-between;
				.item {
				    width: calc(50% - 10px);
				    margin: 15px 0;
					height: 132px;
					overflow: hidden;
					img {
					    width: 50px;
					    height: 50px;
					}
					h3 {
					    margin-top: 10px;
					    font-weight: 700;
					}
					p {
					    color: #9ca6ae;
					}
				}
				.fl {
				    float: left;
				}
			}
			.btn-group {
			    margin-top: 30px;
				.btn {
				    width: 160px;
					display: inline-block;
					height: 50px;
					line-height: 50px;
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
	}
}
</style>
