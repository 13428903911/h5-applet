<template>
	<view class="box">
		<Adminheader></Adminheader>
		<view class="header">
			<view class="header_cengter" @click="jiaoyixiangqing">
				<view class="left">
					<p>深圳市锐思华创技术有限公司</p>
					<view class="left_sj">
						<span class="ny">2017</span>
						<span class="sj">10:10</span>
					</view>
				</view>
				<view class="right">
					<p class="je">+800</p>
					<p class="ye">余额：4556</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Adminheader from '../../admin/admin_header/admin_header'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			jiaoyixiangqing(){
				wx.navigateTo({
					url: '/settings/settings_jyxq/settings_jyxq'
				})
			}
		},
		components:{
			Adminheader,
		},
	}
</script>

<style scoped lang="scss">
.box{
	background: #f6f8f9;
}
.header{
	margin-top: 50px;
	background: #FFFFFF;
	.header_cengter{
		padding: 20px 20px;
		display: flex;
		border-bottom: 1px solid #edf1f4;
		border-top: 1px solid #edf1f4;
		.left{
			width: 70%;
			p{
				font-size: 16px;
			}
			.left_sj{
				margin-top: 10px;
				.ny{
					
				}
				.sj{
					margin-left: 20px;
				}
			}
		}
		.right{
			width: 30%;
			.je{
				    font-size: 23px;
				    margin-top: -6px;
			}
			.ye{
				    margin-top: 10px;
				    font-size: 16px;
			}
		}
	}
}

</style>
