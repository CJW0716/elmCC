<template>
	<div class="root">
		
		<div class="left">
			
			<div 
				class="left-item"
				v-for="m,i in menu"
				@click="leftMenuClick(i)"
				:class="{'active':currentIndex==i}"
			>
				<!-- <img v-if="m.icon_url" :src="m.icon_url|iconFilter" alt=""> -->
				
				<img v-if="m.grey_icon_url" :src="m.grey_icon_url|iconFilter5" alt="">
				<span>{{m.name}}</span>
			</div>
			
		</div>
		
		<div class="right" ref="right" @scroll="rightScroll">
			<div v-for="m in menu">
				<div class="m-title" ref="title">{{m.name}}
				<span>{{m.description}}</span>
				</div>
				<!-- 自定义商品cell -->
				<FoodCell 
				v-for="f,i in m.foods"
				:key="i"
				:food="f"
				ref="cell"
				>
					
				</FoodCell>
			</div>
		</div>
		
		
	</div>
</template>

<script>
import FoodCell from "../components/FoodCell.vue"
	
export default {
	data(){
		return {
			currentIndex:0
		}
	},
	components:{
		FoodCell
	},
	props:['menu'],
	methods:{
		leftMenuClick(idx){
			// 当前选中的索引
			this.currentIndex = idx
			let that = this
			// 获取需要滚动的标签
			let right = this.$refs.right
			
			// 找到点击位置之前的所有商品数据个数
			let total = 0
			// 计算当前点击的位置之前有多少个cell
			for (let i in this.menu){
				if (i < idx){
					total += this.menu[i].foods.length
				}
			}
			
			
			// console.log(this.$refs.cell)
			// 计算1vw的值
			let height = window.innerWidth/100
			// 目标高度
			let targetTop = total * (30 * height) + (3.2 * height) * idx
			// 当前滚动高度
			let currentTop = this.$refs.right.scrollTop
			// 总共需要滚动多高？
			let distance = Math.abs(targetTop-currentTop)/5
			
			// that.$refs.right.scrollTo(0, targetTop)
			
			function update(){
				// scrollTo 滚动到指定位c置
				let scrollTop = 0
				// that.$refs.right.scrollTop 当前的滚动高度
				if (that.$refs.right.scrollTop > targetTop){
					// 向上滚动
					scrollTop = that.$refs.right.scrollTop - distance
					that.$refs.right.scrollTo(0, scrollTop)
					// 只有在当前滚动位置大于目标位置时，滚动
					if (that.$refs.right.scrollTop > targetTop){
						
						setTimeout(update, 30)
					}
				}else{
					// 加上每次滚动的距离
					scrollTop = that.$refs.right.scrollTop + distance
					that.$refs.right.scrollTo(0, scrollTop)
					// 只有在当前滚动位置小于目标位置时，滚动
					if (that.$refs.right.scrollTop <= targetTop-distance){
						
						setTimeout(update, 30)
					}
				}
			}
			update()
			
		}
		,
		rightScroll(e){
			
			// console.log(this.$refs.cell)
			let height = window.innerWidth/100
			let total = 0
			// 目标高度，获取每一个分区最后一个cell的索引
			// arr 存放每一个分区临界点
			let arr = this.menu.map(el=>{
				total += el.foods.length
				return total
			})
			
			arr.unshift(0)
			arr.pop()
			
			// 计算当前应该在第几个索引
			for (let i = arr.length;i>=0;i--){
				// 计算每一个临界点的高度
				let h = arr[i] * height * 30 + i *3.2 
				// 判断当前滚动的高度是否到达临界点
				if (e.target.scrollTop >= h){
					// 切换选中的index
					this.currentIndex = i
					break
				}
			}
		}
	}
}
</script>

<style scoped>
	.root{
		height: calc(100vh - 14vw - 44px);
		display: flex;
		flex-direction: row;
	}
	.left{
		background-color: #f8f8f8; 
		height: 100%;
		overflow-y: scroll;
		width: 20vw;
		position: relative;
	
	}
	.left-item{
		width: 20vw;
		height: 12vw;
		font-size: 3.2vw;
		color: #333;
		display: flex;
		align-items: center;
		padding-left: 1vw;
		box-sizing: border-box;
	}
	.left-item.active{
		background-color: white;
		color: red;
	}
	.left-item img{
		width: 3vw;
		height: 3vw;
	}
	.right{
		width: 80vw;
		height: 100%;
		overflow-y: scroll;
	}
	.m-title{
		font-weight: bold;
		color: #666;
		font-size: 3.2vw;
		padding-left: 2vw;
		height: 3.2vw;
		line-height: 3.2vw;
	}
	.m-title span{
		font-weight: normal;
		font-size: 2vw;
	}
	
	
</style>
