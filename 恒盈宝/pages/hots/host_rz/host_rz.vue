<template>
	<view>
		<view class="side w250 fr">
			<view class="box box-guarantee">
				<ul>
					<li>
						<img src="../../../static/images/smrz.png"> 
						<h2>双方实名认证</h2> 
						<p>个人实行实名认证，企业实行企业营业执照认证，保证双方信息真实</p>
					</li> 
					<li>
						<img src="../../../static/images/ptbz2.png"> 
						<h2>平台资金安全担保</h2> 
						<p>双方往来资金将由平台托管，全程担保双方利益，防止交易风险</p>
					</li>
					<li>
						<img src="../../../static/images/cxbz.png"> 
						<h2>公平诚信保障</h2> 
						<p>云队友致力于维护双方真实的交易评价，保证双方利益与平台公平性</p>
					</li>
				</ul>
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
.side {
    width: 100%;
    padding-top: 20px;
	border-top: 1px solid #edf1f4;
	.box {
	    margin: 0 15px;
	    padding: 20px 15px;
	}
	.box-guarantee ul {
	    margin-top: -30px;
		li {
		    margin-top: 30px;
		    text-align: center;
			img {
			    width: 100px;
			    height: 100px;
				vertical-align: middle;
				
			}
		}
	}
	h2 {
	    margin-top: 20px;
	    font-weight: 700;
	}
	p {
	    margin-top: 4px;
	    font-size: 12px;
	    line-height: 20px;
	    color: rgba(9,34,53,.5);
	}
}
</style>
