<template>
	<div class="root">
		<h3 class="title">商家推荐</h3>
		
		<div class="rec-list">
			<!-- 推荐商品 -->
			<div class="rec-list-item" v-for="rec in recommend.items">
				<img :src="rec.image_path|iconFilter" alt="">
				<p class="rec-list-name">{{rec.name}}</p>
				<p class="rec-list-sale">月售{{rec.month_sales}} 好评率{{rec.satisfy_rate}}%</p>
				<div class="rec-list-bar">
					<span class="rec-list-price">￥{{rec.specfoods[0].price}}</span>
					<span class="add-btn">+</span>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>

export default {
	props:['recommend']
}	

</script>

<style scoped>
	.root{
		padding: 2vw;
		overflow-y: hidden;
	}
	.title{
		color: #333;
		font-size: 5vw;
		margin: 1vw 0;
	}
	.rec-list{
		display: flex;
		overflow-x: scroll;
	}
	.rec-list-item{
		width: 30vw;
		flex-shrink: 0;
		margin-right: 2vw;
	}
	.rec-list-item img{
		width: 100%;
		height: 31vw;
	}
	.rec-list-name{
		margin: 1vw 0;
		font-size: 3.7vw;
		color: #333;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.rec-list-sale{
		margin: 1vw 0;
		font-size: 2.3vw;
		color: #333;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.rec-list-bar{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.rec-list-bar span{
		display: inline-block;
	}
	.rec-list-price{
		color: #ff5339;
		
	}
	.add-btn{
		width: 5vw;
		heigit: 5vw;
		background: blue;
		font-size: 5vw;
		color: white;
		text-align: center;
		
		line-height: 5vw;
		border-radius: 50%;
	}
	
</style>
