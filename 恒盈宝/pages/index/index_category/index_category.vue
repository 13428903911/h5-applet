<template>
	<view class="category">
		<view class="w1060 mcenter">
			<view class="list">
				<view class="li">
					<img src="@/static/images/category_a.png" alt="">
					<p>市场销售</p>
				</view>
				<view class="li">
					<img src="@/static/images/category_b.png" alt="">
					<p>运营策划</p>
				</view>
				<view class="li">
					<img src="@/static/images/category_c.png" alt="">
					<p>短视频</p>
				</view>
				<view class="li">
					<img src="@/static/images/category_d.png" alt="">
					<p>创意设计</p>
				</view>
				<view class="li">
					<img src="@/static/images/category_e.png" alt="">
					<p>程序开发</p>
				</view>
				<view class="li">
					<img src="@/static/images/category_f.png" alt="">
					<p>职能</p>
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
.category {
    margin: -52px 0px 0;
	.list {
	    display: -ms-flexbox;
	    display: flex;
	    -ms-flex-pack: justify;
	    justify-content: space-between;
	    background: #fff;
	    border: 1px solid #edf1f4;
	    box-shadow: 0 0 20px 0 rgba(0,0,0,.05);
	    border-radius: 10px;
	    padding: 4px;
		flex-wrap: wrap;
		margin: 0 20px;
		position: relative;
		top: -40px;
		.li{
		    min-width: 33.3%;
			text-align: center;
			height: 120px;
			img {
			    width: 50px;
			    height: 50px;
			}
			p {
			    margin-top: 10px;
			    color: #092235;
			    font-size: 14px;
			    font-weight: 500;
			}
		}
	}
}
</style>
