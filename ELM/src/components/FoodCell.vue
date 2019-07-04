<template>
	<div class="f-root">
		
		<img :src="food.image_path|iconFilter5" alt="" class="food-image">
		<div class="food-right">
			<h4 class="food-title">{{food.name}}</h4>
			<p class="food-desc" v-if="food.description">{{food.description}}</p>
			<p class="food-sale">月售{{food.month_sales}}份 好评率{{food.satisfy_rate}}%</p>
			<div class="food-item-price">
				<span class="food-price-tag">
					<span class="s1">￥</span>
					<span class="s2">{{food.specfoods[0].price}}</span>
					<span class="s3" v-if="food.specfoods[0].original_price">{{food.specfoods[0].original_price}}</span>
				</span>
				<span class="add-btn">+</span>
			</div>
			
		</div>
		
	</div>
</template>

<script>

export default {
	props:['food']
}

</script>

<style scoped>

.f-root{
	height: 30vw;
	display: flex;
	padding: 2vw;
	width: 76vw;
	box-sizing: border-box;
}
.food-right{
	width: 76vw;
	box-sizing: border-box;
	padding-left: 1vw;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.food-image{
	width: 26vw;
	height: 26vw;
	flex-shrink: 0;
}
.food-desc{
	white-space: nowrap;
	overflow: hidden;
	width: 50vw;
	text-overflow: ellipsis;
	color: #999;
	font-size: 2.6vw;
}
.food-title{
	margin: 1vw 0;
}
p{
	margin: 1vw 0;
}
	
.food-sale{
	color: #999;
	font-size: 2.6vw;
}
.food-item-price{
	display: flex;
	justify-content: space-between;
	width: 50vw;
}
.food-price-tag{
	color: #ff5339;
	font-size: 4.2vw;
}
.add-btn{
	display: inline-block;
	width: 5vw;
	heigit: 5vw;
	background: blue;
	font-size: 5vw;
	color: white;
	text-align: center;
	
	line-height: 5vw;
	border-radius: 50%;
}
.s3{
	text-decoration: line-through;
	margin-left: 2vw;
	font-size: 3vw;
	color: #999;
}
	
</style>
