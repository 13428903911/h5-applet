<template>
	<view class="box box-hots">
		<view class="box-hd">
			<h2 class="title">热门工作</h2>
			<view class="users cl">
				<view class="list fl">
					<li v-for="(item,index) in center_log.avatar" :key="index">
						<img :src="item">
					</li>
					<view style="clear: both;"></view>
				</view>
				<p class="total fr">{{totals}} 人正在看</p>
				<view style="clear: both;"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				center_log:[],
				totals:""
			}
		},
		methods: {
			getList(){
				 this.$http.post('public/index.php/api/Work/getVisit').then(res => {
					this.center_log = res.data.data;
					this.totals = res.data.data.total_num
				})
				
			}
		},
		mounted() {
			this.getList()
		}
	}
</script>

<style lang="scss" scoped>
.box {
	.active{color: #008bf7;}
	padding: 20px 15px;
	background: #fff;
	.box-hd {
	    padding: 0;
		position: relative;
		line-height: 28px;
		.title {
		    font-weight: 700;
		    font-size: 20px;
		}
		.users {
		    position: static;
		    margin-top: 20px;
			right: 0;
			top: 0;
			.fl {
				float: left;
				li {
				    float: left;
				    display: -ms-flexbox;
				    display: flex;
				    -ms-flex-pack: center;
				    justify-content: center;
				    -ms-flex-align: center;
				    align-items: center;
				    width: 34px;
				    height: 34px;
				    border: 1px solid #fff;
				    border-radius: 34px;
				    box-sizing: border-box;
				    background: #dde6ec;
				    overflow: hidden;
					mg {
					    max-width: 100%;
					    max-height: 100%;
					}
				}
			}
			.total {
			    margin-left: 10px;
			    line-height: 34px;
				font-size: 14px;
			}
			.fr {
			    float: right;
			}
			.list li:not(:first-child) {
			    margin-left: -14px;
			}
		}
	}
	
}
</style>
