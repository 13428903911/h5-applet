<template>
	<view>
		<Adminheader></Adminheader>
		<view class="resume-detail w1060 fixed-ft cl container" style="padding: 0.1px;">
			<view class="w340 w-view-zi">
				<view class="panel cl avatar-null">
					<view class="avatar">
						<view class="tips cl">
							<span class="fl">上传头像，更容易成单哦！</span> 
							<a class="fr">立即上传<i class="icon iconfont">&#xe605;</i></a> 
							<span class="arrow"></span>
						</view>
						<view class="img-avar"><img src="/static/images/touxiang5.png"></view>
					</view>
					<view class="label" style="margin-top: 10px;">
						<view>
							<p class="font-si-bl">云队友-hJgcVdJw</p> 
							<p style="margin-top: 10px;"></p> 
							<p style="margin-top: 4px;">技术</p> 
						</view>
					</view>
					<view class="btn-group but-fix" style="margin-top: 30px;"><a @click="xgjl()" class="btn btn-default">修改简历</a></view>
				</view>
			</view>
			<view class="main w700 flo-ri-top coll-div">
				<view class="">
					<view class="user-tags tags"><span>后端开发</span> <span>Java</span> </view>
					<p class="man-top-14 title2"></p>
					<dd style="line-height: 30px;"><view class="jd cl"></view></dd>
					<span class="fon-si-20"><b>1000</b><span class="fon-si-10">&nbsp;元/小时</span></span>
					<dd class="dl-zi-top-20-1" style="line-height: 24px;"><pre></pre></dd>
				</view>
				<view class="show-date"><b>工作时间段</b></view>
				<view class="isPc" style="border-top: 1px solid rgb(237, 241, 244);"></view>
				<view class="dl-zi-top-20" style="text-align: center;">
					<view class="other cl" style="line-height: 24px;">
						<view class="fl ma-top-19" style="margin-top: 7px;"><b>工作时间段</b></view> 
						<view class="fl fr-ma-18-1 fr-wi-1">周一至周五<br> <!----> <span>上午</span> <span>下午</span> <span></span></view> 
						<view class="fl  fr-wi-1">周六<br> <span>-</span> <span></span> <span> </span> <span></span></view>
						<view class="fl  fr-wi-1">周日<br> <span>-</span> <span></span> <span> </span> <span></span></view>
						<view style="clear: both;"></view>
					</view>
				</view>
				<div class="heng-div-2"></div>
				<div class="dl-zi-top"></div>
				<div class="dl-zi-top" style="line-height: 24px;"><!----> <dd class="cl"></dd></div>
				<div class="resume-mod edu-div"><dl><!----> </dl></div>
			</view>
		</view>
		<Jobfooter></Jobfooter>
	</view>
</template>

<script>
	import Adminheader from '../../admin_header/admin_header.vue'
	import Jobfooter from '../../../pages/job_detail/jobfooter/jobfooter.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			xgjl(){
				wx.navigateTo({
					url:'/admin/admin_data/admin_data'
				})
			}
		},
		components:{
			Adminheader,
			Jobfooter
		}
	}
</script>

<style lang="scss" scoped>
.container {
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
	position: relative;
	z-index: 111;
	background: #fff;
	.top-tip {
	    height: 50px;
	    margin-top: 30px;
	    margin-bottom: 30px;
	    line-height: 50px;
	    text-align: center;
	    background: #f6f8f9;
	    border-radius: 2px;
	    border: 1px solid #edf1f4;
	}
	.w-view-zi {
	    width: 100%;
	    height: auto;
	    box-shadow: 0 0 0;
	    background-image: linear-gradient(135deg,#01bffc,#008bf7);
	    float: none;
	    text-align: center;
	    padding: 30px 15px;
	    color: #fff;
	    border-radius: 0;
	    box-sizing: border-box;
		border: 1px solid #edf1f4;
		position: relative;
		z-index: 111;
		.panel.avatar-null {
		    position: relative;
		   margin: -30px -15px;
		    padding: 30px;
			.avatar {
			    margin-top: 28px;
				.tips {
				    position: absolute;
				    top: 0;
				    left: 0;
				    width: 100%;
				    height: 40px;
				    padding: 0 20px;
				    line-height: 42px;
				    color: #fff;
				    background: #ff5853;
				    border-radius: 2px 2px 0 0;
				    box-sizing: border-box;
					.fl {
					    float: left;
					}
					a {
					    color: #fff;
					}
					.fr {
					    float: right;
						.icon{vertical-align: bottom;}
					}
					.arrow {
					    position: absolute;
					    top: 100%;
					    left: 50%;
					    margin-left: -8px;
					    border-top: 8px solid #ff5853;
					    border-left: 8px solid transparent;
					    border-right: 8px solid transparent;
					}
				}
			}
		}
	}
	.img-avar {
	    margin: 0 auto;
		width: 100px;
		height: 100px;
		border: 2px solid #edf1f4;
	    border-radius: 100px;
	    overflow: hidden;
	    display: -ms-flexbox;
	    display: flex;
	    -ms-flex-pack: center;
	    justify-content: center;
	    -ms-flex-align: center;
	    align-items: center;
		img {
		    max-width: 100%;
		    max-height: 100%;
		}
	}
	
	.btn.btn-default {
	    border: 1px solid #008bf7;
	    color: #008bf7;
	    line-height: 48px;
	}
	.btn {
	    display: inline-block;
	    width: 100%;
	    height: 50px;
	    line-height: 50px;
	    text-align: center;
	    border: none;
	    border-radius: 2px;
	    color: #fff;
	    cursor: pointer;
	    box-sizing: border-box;
	}
	.flo-ri-top {
	    float: none;
	}
	.coll-div {
	       padding: 15px 15px 0;
	       margin-top: 0px;
	       background: #fff;
		   position: relative;
		   z-index: 111;
	}
	.user-tags {
	    width: 100%;
		margin: 0 -5px -5px;
		font-size: 0;
		span {
		    display: inline-block;
		    height: 28px;
		    padding: 0 8px;
		    margin: 5px;
		    line-height: 28px;
		    background: #edf1f4;
		    border-radius: 1px;
		    font-size: 14px;
		}
	}
	.fon-si-20 {
	    display: inline-block;
	    margin-top: 15px;
		color: #008bf7;
		b{font-size: 24px;}
	}
	.dl-zi-top-20-1,.dl-zi-top-201 {
	    margin-top: 20px;
	}
	.show-date {
	    display: block;
	    margin-top: 30px;
		margin-bottom: 10px;
	}
	.dl-zi-top-20 {
	    margin-top: 25px;
		.fl {
		    float: left;
		}
	}
	.ma-top-19 {
	    display: none;
	}
	.fr-wi-1 {
	    width: 30%;
	}
	.fr-ma-18-1 {
	    margin-left: 5%;
	}
	.heng-div-2 {
	    border-top: 1px solid #edf1f4;
	    margin-top: 25px;
	    width: 100%;
	}
	.dl-zi-top {
	    margin-top: 30px;
	}
}
.footer {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    background: #092235;
    text-align: left;
    padding: 0 20px;
	position: relative!important;
	z-index: 99!important;
}
.but-fix {
	    position: fixed;
	    left: 0;
	    bottom: 0;
	    width: 100%;
	    background-color: #fff;
	    z-index: 115;
	    padding: 14px 15px;
	    box-sizing: border-box;
	}
</style>
