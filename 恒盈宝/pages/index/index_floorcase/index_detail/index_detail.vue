<template>
	<view class="bd">
		<view class="list">
			<view :class="{active:index==num}" class="item" v-for="(item,index) in detail" :key='index' @click="detailas(index)">
				<img :src="item.imgUrl" alt="">
			</view>	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:0,
				detail:[
					{
					    "id": "0001",
					    "imgUrl": "../../../../static/images/floor_a.png"
					  },{
					    "id": "0002",
					    "imgUrl": "../../../../static/images/floor_c.png"
					  },{
					    "id": "0003",
					    "imgUrl": "../../../../static/images/floor_e.png"
					  }
				]
			}
		},
		methods: {
			detailas(index){
				this.num = index
				this.$emit("index_detail",index)	
			}
		}
	}
</script>

<style lang="scss" scoped>
.bd {
    margin-top: 30px;
	.list {
	    width: 100%;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		background: #f6f8f9;
		border-radius: 60px;
		.item {
		    -ms-flex-positive: 1;
		    flex-grow: 1;
		    text-align: center;
		    border-radius: 60px;
		    cursor: pointer;
			img {
			    height: 50px;
			}
		}
		.active{background: #008bf7;}
	
	}
}
</style>
