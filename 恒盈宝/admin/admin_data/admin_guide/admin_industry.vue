<template>
	<view>
		<Adminheader></Adminheader>
		<view class="resume-industry fixed-ft container">
			<form class="form-wrap w700 mcenter">
				<view class="form-group-hd"><h2 class="title">请完善您在平台寻找的工作类型</h2></view>
				<view class="form-category">
					<view class="form-group">
						<view class="label">
							<label class="bg">所属职位类型</label> 
						</view> 
						<view class="content no-border cl">
							<view class="tags cl">
								<view class="item" v-for="(item,index) in productList" :key="index" @click="position_click(item.id)" :class="{'active':flag==item.id}">
									{{item.position_type}}
								</view>
							</view>
							<input type="hidden" name="jobCate" data-vv-scope="__global__" aria-required="true" aria-invalid="false">
						</view> 
						<p class="tips-error" style="display: none;"></p>
					</view>
					<view class="form-group">
						<view class="label">
							<label class="bg" v-if="show">所属职业</label> 
							<!-- <p>最多可选择3个</p> -->
						</view> 
						<view class="content no-border cl">
							<view class="tags cl">
								<view class="item" v-for="(item,index) in productListb" :key="index" @click="positionb_click(item.id)" :class="{'activ':fl==item.id}">
									{{item.occupate}}
								</view>
							</view>
							<input type="hidden" name="jobCate" data-vv-scope="__global__" aria-required="true" aria-invalid="false">
						</view> 
						<p class="tips-error"></p>
					</view>
					<view class="form-group">
						<view class="label"  v-if="show2" >
							<label class="bg">需要具备的技能标签（标签越准，匹配越准）</label> 
							<p style="margin-top: 20px;">技能标签最多添加3个，没找到合适的可以添加自定义标签</p>
						</view> 
						<view class="content no-border cl">
							<view class="tags cl">
								<view class="item filter_item" v-for="(item,index) in productListc" :key="item.id" @click="positionc_click(item.id,index)" :class="{'acti': rSelect.indexOf(index) != -1}">
									{{item.skill_label}}
								</view>
							</view>
							<div class="form-group" v-if="show2">
								<div class="label">
									<label>没有找到我的技能标签？手动添加</label>
								</div> 
								<div class="content">
									<form onsubmit="return false">
										<input  v-model="msg" type="text" placeholder="添加自定义标签（点击添加完成添加）" name="customTag0" class="ipt-text" data-vv-scope="__global__" aria-required="false" aria-invalid="false"> 
										<span class="ipt-rt btn-text" @click="add()">添加</span>
									</form>
								</div> 
							</div>
						</view> 
						<p class="tips-error" style="display: none;">最多可选择3个职业</p>
					</view>
				</view>
				<div class="ft-wrap"><div class="w700 mcenter cl"><span class="btn btn-blue fr" @click="jobType">下一步</span></div></div>
			</form>
		</view>
	</view>
</template>

<script>
	import Adminheader from '../../admin_header/admin_header.vue'
	export default {
		data() {
			return {
				show:false,
				show2:false,
				productList:[],
				flag: null,
				fla: null,
				fl: null,
				productListb:[],
				productListc:[],
				rSelect:[],
				index:[],
				msg:"",
			
					user_id:this.$store.state.userInfo.user_id,
					position_type:'',
					occupate:'',
					skill:[]
				
				}
			
		},
		methods: {
			add(){
				if(this.msg!==""){
					this.productListc.push({id:0,skill_label:this.msg})
					this.msg=''
				}
			},
			 getList() {
					this.$request('/api/Position/positionType', {
					}).then(res => {
						this.productList = res.data;
					})
					
				},
				position_click(index){
					this.show = true
					this.flag = index;
					this.$request('/api/Position/positionDetail', {
						position_id:index
					}).then(res => {
						this.productListb = res.data;
		
					})
					// 当前点击的哪一个
					let position_type = this.productList.filter(item => {
						if(item.id == index) {
							return item.id
						}
					})
					console.log(position_type)
						position_type.forEach(itme => {
							this.position_type = itme.id
						})
					
					
				},
				// 点击第二层联动
				positionb_click(index){
					this.show2 = true
					this.fl = index;
					this.$request('/api/Position/skillLabel', {
						occupate_id:index
					}).then(res => {
						this.productListc = res.data;
					})
					// 当前点击的哪一个
					let position_type2 = this.productListb.filter(item => {
						if(item.id == index) {
							return item.id
						}
					})
					console.log(position_type2)
					position_type2.forEach(itme => {
						this.occupate = itme.id
					})
				
				},
				positionc_click(id,index){
					
					       if (this.rSelect.indexOf(index) == -1 ) {
								this.rSelect.push(index);
								if(this.rSelect.length>3){
									uni.showToast({title:'最多只能选四个',duration:1000,icon:'none'})
								
			
							}//选中添加到数组里
					      //  }else if(that.rSelect.length==3 || that.rSelect.indexOf(index),1){
					      //   uni.showToast({
					      //    title:'最多只能选四个',
					      //    duration:1000,
					      //    icon:'none'
					      //   })
					        
					      //   return false
					        // this.rSelect.splice(this.rSelect.indexOf(index), 1); //取消
					        
					      }
				let position_type3=[]
				for(let i=0; i<this.productListc.length; i++){
					if(this.productListc[i].id == id){
						position_type3.push(this.productListc[i])
					}
				}
					this.skill.push(position_type3)
				},
				// tapInfo(e) {
				       
				//        let that = this;
				//        if (that.rSelect.indexOf(e) == -1 && that.rSelect.length<3) {
				//         // console.log(e); //打印下标
				//         that.rSelect.push(e); //选中添加到数组里
				//        }else if(that.rSelect.length==3 || that.rSelect.indexOf(e),1){
				//         uni.showToast({
				//          title:'最多只能选四个',
				//          duration:1000,
				//          icon:'none'
				//         })
				        
				//         return false
				//         that.rSelect.splice(that.rSelect.indexOf(e), 1); //取消
				        
				//       }
				      
				//      } ,
					//工作类型
				jobType(){
					this.$http.post('/public/index.php/api/Position/saveWorkType',{
						user_id:this.user_id,
						position_type:this.position_type,
						occupate:this.occupate,
						skill:JSON.stringify(this.skill)
					}).then(res => {
						console.log(res)
					})
				}
			},
		mounted(){
			this.getList()
			
		},
		components:{
			Adminheader
		},
		onLoad:function(){
		
		}
	}
</script>

<style lang="scss" scoped>
.container {
    margin-left: auto;
    margin-right: auto;
    padding: 20px 15px;
    box-sizing: border-box;
	position: relative;
	z-index: 111;
	background: #fff;
	.form-group-hd {
	    margin-bottom: 32px;
		.title {
		    font-size: 24px;
		    line-height: 32px;
			font-weight: 700;
		}
	}
	.form-category {
	    line-height: 24px;
		.form-group {
		    margin-top: 20px;
			.label {
			    margin-bottom: 20px;
				label {
				    display: block;
				    font-weight: 700;
				}
				label.bg {
				    font-size: 18px;
				    line-height: 28px;
				}
			}
			.content {
			    position: relative;
			    margin-top: 10px;
			    border: 1px solid #9ca6ae;
			    box-sizing: border-box;
			    border-radius: 2px;
				width: 100%;
				overflow: hidden;
				.tags {
				    display: -ms-flexbox;
				    display: flex;
				    -ms-flex-wrap: wrap;
				    flex-wrap: wrap;
				    -ms-flex-pack: justify;
				    justify-content: space-between;
				    margin: 0;
					.item {
					    float: left;
					    height: 44px;
						width: 48%;
						margin: 5px 0;
					    text-align: center;
					    line-height: 44px;
					    background: #f6f8f9;
					    cursor: pointer;
					}
					.item.cur {
					    background: #cce8fd;
					}
				}
				.ipt-text {
				    width: 100%;
				    height: 48px;
				    padding: 12px 20px;
				    line-height: 24px;
				    border: none;
				    box-sizing: border-box;
				}
				.ipt-rt {
				    position: absolute;
				    right: 0;
				    top: 0;
				    height: 100%;
				    padding: 0 20px;
				    line-height: 48px;
				}
				.btn-text {
				    display: inline-block;
				    text-align: center;
				    color: #008bf7;
				    cursor: pointer;
				}
			}
			.content.no-border {
			    border: none;
			}
		}
	}
}
.container.fixed-ft {
    padding-bottom: 100px;
	.ft-wrap {
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    padding: 10px 0;
	    background: #fff;
	    box-shadow: 0 0 10px 0 rgba(0,0,0,.05);
	    box-sizing: border-box;
	    z-index: 99;
	}
	.btn {
	    display: inline-block;
	    width: 120px;
	    height: 50px;
	    line-height: 50px;
	    text-align: center;
	    border: none;
	    border-radius: 2px;
	    color: #fff;
	    cursor: pointer;
	    box-sizing: border-box;
		margin-right:20px
	}
	.btn.btn-blue {
	    background: #008bf7;
	    color: #fff;
	}
	.fr {
	    float: right;
	}
}
.active{background: #cce8fd!important;}
.activ{background: #cce8fd!important;}
.acti{background: #cce8fd!important;}
.filter_item:first-child{
	// background: #cce8fd!important;
}
</style>
