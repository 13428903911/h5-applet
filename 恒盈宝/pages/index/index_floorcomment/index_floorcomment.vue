<template>
	<view class="Mycomment">
		<view class="hd"><h2 class="title">来自金斗云人才的评价</h2></view>
		<view class="bd">
			<view class="list">
				<view class="item">
					<view class="user">
						<view class="avatar">
							<img src="/static/images/touxiang2.png" alt="">
						</view>
						<p><span class="name">WEI</span> <span class="t-gray">产品经理</span></p>
					</view>
					<p class="comment">有段时间想尝试一下自由职业，但自由职业对于产品经理岗位来说比较困难，会有种种不确定性，产出也很难量化。但好在有金斗云平台的帮助，在平台的帮助下我和雇主的共识很快达成，工作效率大大提高，金斗云提供了多种方式帮助衡量产出，既保证了我的收益也给雇主带来了价值。</p>
				</view>
				<view class="item">
					<view class="user">
						<view class="avatar">
							<img src="/static/images/touxiang3.png" alt="">
						</view>
						<p><span class="name">杨拯</span> <span class="t-gray">全栈设计师</span></p>
					</view>
					<p class="comment">在硅谷工作的几年间就非常喜欢远程办公的形式，可以把需要独立进行，又不想被干扰的工作通过远程的方式来完成。金斗云在国内的出现让这种工作形式被更多人认识，也让跨地域的工作协作成为可能，在后疫情时代，这种模式一定会焕发出奔涌的生命力！</p>
				</view>
				<view class="item">
					<view class="user">
						<view class="avatar">
							<img src="/static/images/touxiang4.png" alt="">
						</view>
						<p><span class="name">White</span> <span class="t-gray">体验设计师</span></p>
					</view>
					<p class="comment">持续关注PMCAFF品牌动态时了解到金斗云，后续开始尝试入驻平台成为Freelancer，并且通过金斗云平台和多位靠谱合作伙伴达成了设计合作，期间合作非常顺畅。金斗云是一个注重人才及优质客户的平台，未来也会伴随金斗云一起成长，希望能遇到更多看重用户体验设计的合作伙伴。</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.Mycomment {
	margin: 0 20px;
    padding-top: 50px;
	margin-top: 50px;
	border-top: 1px solid #edf1f4;
	.hd {
	    text-align: center;
		.title {
		    font-size: 20px;
		    line-height: 30px;
		    font-weight: 600;
		    text-align: center;
		}
	}
	.bd {
	    margin-top: 0;
	}
	.list {
	    display: -ms-flexbox;
	    display: flex;
	    -ms-flex-pack: justify;
	    justify-content: space-between;
		-ms-flex-direction: column;
		flex-direction: column;
		.item {
		    width: 100%;
			margin-top: 50px;
			padding: 0 20px 20px;
		    border: 1px solid #edf1f4;
		    box-shadow: 0 0 20px 0 rgba(9,34,53,.05);
		    border-radius: 10px;
		    box-sizing: border-box;
			.user {
			    margin-top: -20px;
			    text-align: center;
				.avatar {
				    width: 70px;
				    height: 70px;
				    margin: 0 auto;
				    border: 2px solid #fff;
				    border-radius: 70px;
				    overflow: hidden;
				    box-shadow: 0 20px 40px 0 rgba(9,34,53,.2);
					img {
					    max-width: 100%;
					    max-height: 100%;
					}
				}
				p {
				    margin-top: 20px;
					.name {
					    margin-right: 10px;
					}
					.t-gray {
					    color: #9ca6ae;
					}
				}
			}
			.comment {
			    margin-top: 20px;
				line-height: 25px;
			}
		}
	}
}
</style>
