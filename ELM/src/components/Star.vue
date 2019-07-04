<template>
	<div class="star-root">
		<!--  空白星星-->
		<div class="star-empty star-bar" :style="emptyStyleObj">
			<span
				:style="spanStyleObj"
				v-for="n in total"
				@click="starClick(n)"
				style="color: lightgray;"
			>☆</span>
		</div>
		<!-- 填充星星 -->
		<div class="star-full star-bar" :style="starStyleObj">
			<span
				v-for="n in total"
				:style="spanStyleObj"
				@click="starClick(n)"
				style="color: orangered;"
			>★</span>
		</div>
	</div>
</template>

<script>

export default {
	// 指定组件接受的传值
	props:{
		// 星星总数
		total:{
			default:5
		},
		// 星星大小
		size:{
			default:3
		},
		// 评分
		num:{
			required:true
		},
		// 是否允许编辑
		editable:{
			default:false
		}
	},
	computed:{
		// 计算每颗星星的宽度
		spanStyleObj:function(){
			
			return {
				width:this.size + 'vw',
				cursor:this.editable?"pointer":"default",
				"font-size":this.size*1.2+"vw"
			}
		},
		// 计算填充星星的宽度
		starStyleObj:function(){
			
			return {
				
				width:this.num*this.size + 'vw'
			}
		},
		// 计算空白星星的宽度
		emptyStyleObj:function(){
			return {
				width:this.total*this.size +　"vw"
			}
		}
	},
	methods:{
		starClick(n){
			// console.log(n)
			if(this.editable){
				// 发射事件,通知父组件更改num的值
				this.$emit("change-num", n)
			}
		}
	}
}
</script>

<style>
	.star-root{
		display: inline-block;
		position: relative;
	}
	.star-bar{
		position: absolute;
		top:0;
		left:0;
		display: flex;
		/* justify-content: center; */
		text-align: center;
	}
	.star-full{
		overflow: hidden;
		color:darkorange;
	}
	.star-bar>span{
		display: inline-block;
		text-align: center;
		flex-shrink: 0;
	}
	
</style>
