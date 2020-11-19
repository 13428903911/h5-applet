<template>
	<view class="box-bd">
		<dl class="filters">
			<dt class="fl">职位类型</dt> 
			  <dd class="df">
				 <block v-for="(item,index) in haots" :key='index'>
				 	<text class="text" style="flex: 1;" :class="{active:index==num}" @click="menubtn(item.id)">{{item.position_type}}</text>
				 </block>
			  </dd>
		</dl>
	</view>
</template>

<script>
	
	import Detailb from './detail_one/detail_b/detail_b.vue'
	export default {
		data() {
			return {
				num:0,
				haots:[],
			
			}
		},
		methods: {
			
			menubtn(index){
				this.num = index
				this.$store.commit("detail",index)
				this.$emit("fatherMethod",index)
				// this.$http.post('public/index.php/api/Work/getWorkList', {
				// 		 page:1,
				// 		 limit:15,
				// 		 position_type:index
				// 	}).then(res => {
				// 		uni.setStorage({key:'DetaLsit',data:res.data.data.row});
				// 	})
				},

			getList(){
				 this.$http.post('public/index.php/api/Position/positionType', {
					 alltype:1
				}).then(res => {
					this.haots = res.data.data;
					})
				
			}
		},
		mounted(){
			this.getList()		
		}
	}
</script>

<style lang="scss" scoped>
.box-bd {
	    margin-top: 10px;padding: 0 15px;
		.filters {
		    margin-top: 20px;
		    padding: 25px 0px 15px 0px;
		    border-top: 1px solid #edf1f4;
		    border-bottom: 1px solid #edf1f4;
			dt {
				width: 100px;
				color: #9ca6ae;
				
			}
			.fl {
			    float: left;
			}
			.df{
				white-space: nowrap;
				overflow-x: auto;
				overflow-y: hidden;
				padding-bottom: 10px;
				.text{
					display: inline-block;
					margin: 0 10px;
				}
			}
	}
	.active{color: #008bf7;}
}
</style>

