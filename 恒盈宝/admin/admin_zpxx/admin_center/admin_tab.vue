<template>
	<view>

		<Admincenter @admcenter="admcenter"></Admincenter>
		<Adminddxx :class="[hideing === 0 ? 'actineclass' : 'errorclass']" :appId="appId"></Adminddxx>
		<Adminhtxx @delete = "deletes" :class="[hideing === 1 ? 'actineclass' : 'errorclass']" :appId="appId"></Adminhtxx>
	</view>
</template>

<script>
	import Admincenter from './admin_center.vue'
	import Adminddxx from './admin_ddxx.vue'
	import Adminhtxx from './admin_htxx.vue'
	export default {
		
		data() {
			return {
				hideing:1,
				appId:this.apply_id
			}
		},
		props:{
			apply_id:''
		},
		mounted() {
			console.log(this.appId)
			// this.appId = this.apply_id
		},
		methods: {
			admcenter(index){
				this.hideing = index
			},
			deletes(contractname){
				let that = this
				 that.name = contractname
				 let names =  that.name
				 this.$emit("deletes",names)
			}
		},
		components:{
			Admincenter,
			Adminddxx,
			Adminhtxx
		}
	}
</script>

<style lang="scss" scoped>
.actineclass{
	display: block;
}
.errorclass{
	display: none;
}
</style>
