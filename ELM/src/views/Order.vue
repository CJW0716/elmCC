<template>
	<div class="order">

		<div class="o1">
			<img src="../assets/icons/dingdan.png" alt="">
				<span class="s1">
					近三个月无外卖订单记录
				</span>
				<span class="s2">
					<p class="p1">查看三个月前的外卖订单 ˇ</p>
				</span>
		</div>
		<FoodCell></FoodCell>
		
	</div>
</template>

<script>
	import Star from '../components/Star.vue'
	import FoodCell from '../components/FoodCell.vue'
	export default {
		components:{
			Star,
			FoodCell
		}

	}
</script>

<style scoped>
	body {
		margin: 0;
	}

	.order {
		width: 100%;
		margin: 0;
	}
	.o1{
		width: 100%;
		height: 300px;
		margin: 100px auto;
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-content: space-between;
		align-items: center;
	}
	.o1 img{
		width: 240px;
		height: 200px;
		text-align: center;
	}
	.o1 span{
		width: 280px;
		height: 40px;
		color: #666;
	}
	.s1{
		font-size: 20px;
	}
	.s2 {
		display: flex;
		margin: 0;
		text-align: center;
		
	}
	
	.p1{
		width: 280px;
		margin: 0;
		height: 30px;
		text-align: center;
		line-height: 30px;
	}
	
</style>
