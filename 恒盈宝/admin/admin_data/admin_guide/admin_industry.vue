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
							<label class="bg" v-if="show">所属职业
							<p>最多可选择3个</p>
							</label> 
							
						</view> 
						<view class="content no-border cl">
							<view class="tags cl">
								<view class="item" v-for="(item,index) in productListb" :key="index" @click="positionb_click(item.id,index,item)" :class="{'activ':rSelect.indexOf(index)>-1}">
									{{item.occupate}}
								</view>
							</view>
							<input type="hidden" name="jobCate" data-vv-scope="__global__" aria-required="true" aria-invalid="false">
						</view> 
						<p class="tips-error"></p>
					</view>
					
					
					
					
					<view class="form-group" v-if="rSelect.length>=1">
						<view class="label">
							<label class="bg">需要具备的技能标签（标签越准，匹配越准）</label> 
							<p style="margin-top: 20px;">技能标签最多添加3个，没找到合适的可以添加自定义标签</p>
						</view> 
						<p style="font-weight: bold;">{{occupate0}}:</p>
						<view class="content no-border cl">
							<view class="tags cl">
								<view class="item filter_item" v-for="(item,index) in productListc" :key="item.id" @click="positionc_click(item.id,index,item)" :class="{'activ':rSelect1.indexOf(index)>-1}" >
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
										<span class="ipt-rt btn-text" @click="addSkill()">添加</span>
									</form>
								</div> 
							</div>
						</view> 
						<p class="tips-error" style="display: none;">最多可选择3个职业</p>
					</view>
					
					
					
					<view class="form-group" v-if="rSelect.length>=2">
						<p style="font-weight: bold;margin-top:60px">{{occupate1}}:</p>
						<view class="content no-border cl">
							<view class="tags cl">
								<view class="item filter_item" v-for="(item,index) in productListc1" :key="item.id" @click="SkillsList(item.id,index,item)" :class="{'activ':rSelect2.indexOf(index)>-1}">
									{{item.skill_label}}
								</view>
							</view>
							<div class="form-group" v-if="show2">
								<div class="label">
									<label>没有找到我的技能标签？手动添加</label>
								</div> 
								<div class="content">
									<form onsubmit="return false">
										<input  v-model="msg" type="text" placeholder="添加自定义标签（点击添加完成添加）" name="customTag0" class="ipt-text" 
										data-vv-scope="__global__" aria-required="false" aria-invalid="false"> 
										<span class="ipt-rt btn-text"@click="addSkill1()">添加</span>
									</form>
								</div> 
							</div>
						</view> 
						<p class="tips-error" style="display: none;">最多可选择3个职业</p>
					</view>
					
					
					
					<view class="form-group" v-if="rSelect.length>=3">
						<p style="font-weight: bold;margin-top:60px">{{occupate2}}:</p>
						<view class="content no-border cl">
							<view class="tags cl">
								<view class="item filter_item" v-for="(item,index) in productListc2" :key="item.id" @click="SkillsListEnd(item.id,index,item)" :class="{'activ':rSelect3.indexOf(index)>-1}">
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
										<span class="ipt-rt btn-text" @click="addSkill2()">添加</span>
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
				occupate0:'',
				occupate1:'',
				occupate2:'',
				show:false,
				show2:false,
				productList:[],
				productListb:[],
				productListc:[],
				productListc1:[],
				productListc2:[],
				flag:0,
				rSelect:[],//控制职业列表多选
				rSelect1:[],//控制技能列表第一项
				rSelect2:[],//控制技能列表第二项
				rSelect3:[],//控制技能列表第三项
				index:[],
				msg:"",
				num :0,
				arrId:[],
				jobId:'',
				jobId1:'',
				jobId2:'',
					user_id:this.$store.state.userInfo.user_id,
					position_type:'',
					occupate:'',
					skill:{},
					jobIdList:[],
					jobIdList1:[],
					jobIdList2:[],
				}
			
		},
		
		
		methods: {
			addSkill(){
				if(this.msg!==""){
					this.productListc.push({id:0,skill_label:this.msg})
					this.msg=''
				}
			},
			addSkill1(){
				if(this.msg!==""){
					this.productListc1.push({id:0,skill_label:this.msg})
					this.msg=''
				}
			},
			addSkill2(){
				if(this.msg!==""){
					this.productListc2.push({id:0,skill_label:this.msg})
					this.msg=''
				}
			},
			 getList() {//默认显示
					this.$request('/api/Position/positionType', {
					}).then(res => {
						this.productList = res.data;
					})
					
				},
				position_click(index){
					this.show = true
					this.flag = index;
					this.$request('/api/Position/positionDetail', {position_id:index}).then(res => {
						this.productListb = res.data;
		
					})
					this.productList.forEach(item => {// 当前点击的哪一个职位类型id
						if(item.id == index) {
							this.position_type = item.id
						}
					})
					console.log(this.position_type)
					
					
				},
				// 点击第二层联动
				positionb_click(index,i,item){
					this.show2 = true
					this.$request('/api/Position/skillLabel', {occupate_id:index}).then(res => {
						let arrIndex = this.rSelect.indexOf(i)
						 if(arrIndex>-1){
							this.rSelect.splice(arrIndex,1);//取消高亮
							this.arrId.splice(arrIndex,1)
							this.occupate = this.arrId.toString()//数组id转字符串
						}else{
							this.rSelect.push(i);
							if(this.rSelect.length<=3){//显示高亮
								if(this.rSelect.length == 1){
									this.occupate0 = item.occupate
									this.productListc = res.data;
									this.jobId = index
									this.arrId.push(index)
									this.occupate = this.arrId.toString()//数组id转字符串
									console.log(this.occupate)
								}else if(this.rSelect.length == 2){
									this.occupate1 = item.occupate
									this.productListc1 = res.data;
									this.jobId1 = index
									this.arrId.push(index)
									this.occupate = this.arrId.toString()//数组id转字符串
									console.log(this.occupate)
								}else if(this.rSelect.length == 3){
									this.occupate2 = item.occupate
									this.productListc2 = res.data;
									this.jobId2 = index
									this.arrId.push(index)
									this.occupate = this.arrId.toString()//数组id转字符串
								}
							}else{
								alert('只能选择3个')
								this.rSelect.splice(arrIndex,1)
							}
						}
						
					})
					
					// position_type2.forEach(itme => {
					// 	this.occupate = itme.id
					// })
				
				},
				positionc_click(id,index,item){//技能列表第一项
					let arrIndex1 = this.rSelect1.indexOf(index)
					   if(arrIndex1>-1){
						   this.rSelect1.splice(arrIndex1,1);//取消高亮
						    this.jobIdList.splice(arrIndex1,1)
						    console.log( this.skill)
					   }else{
						   if(this.rSelect1.length<9){
							   this.rSelect1.push(index); //显示高亮
								this.jobIdList.push(item)
							   this.skill[this.jobId] =  this.jobIdList;
							   console.log( this.skill)
						   }else{alert('只能选择9个')} 
							
					     }
				},
				SkillsList(id,index,item){//技能列表第二项
					let arrIndex2 = this.rSelect2.indexOf(index)
					   if(arrIndex2>-1){
						   this.rSelect2.splice(arrIndex2,1);//取消高亮
						    this.jobIdList1.splice(arrIndex2,1)
							console.log(this.skill)
					   }else{
						   if(this.rSelect2.length<9){
							   this.rSelect2.push(index); 
							   this.jobIdList1.push(item)
							   this.skill[this.jobId1] =  this.jobIdList1;
						   }else{alert('只能选择9个')} 
					    }
				},
				SkillsListEnd(id,index,item){//技能列表第三项
					let arrIndex3 = this.rSelect3.indexOf(index)
					   if(arrIndex3 > -1){
						   this.rSelect3.splice(arrIndex3,1);//取消高亮
						   this.jobIdList2.splice(arrIndex3,1)
						   console.log(this.skill)
					   }else{
						   if(this.rSelect3.length<9){
							   this.rSelect3.push(index); 
							   this.jobIdList2.push(item)
							   this.skill[this.jobId2] =  this.jobIdList2;
							   console.log(this.skill)
						   }else{alert('只能选择9个')} 
					    }
				},
				jobType(){//工作类型
					this.$http.post('/public/index.php/api/Position/saveWorkType',{
						user_id:this.user_id,
						position_type:this.position_type,
						occupate:this.occupate,
						skill:JSON.stringify(this.skill)
					}).then(res => {
						if(res.data.code ==1){
							uni.showToast({icon: 'none',title: '保存成功'})
							uni.reLaunch({url: '/admin/admin_data/admin_data'})	
						}
					})
				},
				jobTypeQuery(){//查询
					this.$http.post('/public/index.php/api/Position/getWorkType',{user_id:1,}).then(res => {
						if(res.data.code ==1){
							uni.setStorage({key:'jobTypeStatus',data:res.data.code});//查询状态存入本地
							// let jobTypeId = res.data.data.position_type//查询到的职业类型id赋值
							// this.flag = jobTypeId//职位类型列表高亮
							// this.show = true//职业列表显示
							// this.$request('/api/Position/positionDetail', {position_id:jobTypeId}).then(res => {//职业列表接口
							// 	if(res.code == 1){
							// 		this.productListb = res.data;
							// 	}
							// })
							// this.arrId = res.data.data.occupate//职业id
							// let arr = JSON.parse(JSON.stringify(res.data.data.occupate))
							
							// 	let jobIndex = this.rSelect.indexOf(this.arrId)
							// 	 if(jobIndex>-1){this.rSelect.splice(jobIndex,1)}//取消高亮
							// 	 else{
							// 		 arr.forEach(item => {
							// 			this.rSelect.push(item) 
							// 		 })
										
							// 		}
							// this.arrId.forEach(item => {
							// 	this.$request('/api/Position/skillLabel', {occupate_id:item}).then(res => {
							// 		this.productListc = res.data;
							// 		this.rSelect.length =1
							// 		// this.show2 = true
							// 	})
							// })
							
						}
					})
				}
			},
		mounted(){
			this.getList()
			this.jobTypeQuery()
			
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
