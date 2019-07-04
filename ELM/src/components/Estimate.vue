<template>

	<div class="pingjia">

		<div class="p-1">
			<section class="p-a">
				<h3>4.7</h3>
				<div class="p-a-1">
					<span>商家评分</span>
					<van-rate v-model="value" allow-half="" void-icon="star" void-color="#eee" />
				</div>
			</section>
			<div class="p-b">
					<span class="span1">
						<p>味道</p>
						<p>4.7</p>
					</span>
					<span class="span2">
						<p>包装</p>
						<p>4.8</p>
					</span>
					<span class="span3">
						<p>配送</p>
						<p>4.8</p>
					</span>
				</div>
		</div>
		<div class="p-2">
			<div class="p-2-a">
					<span class="s-a">全部&nbsp;73</span>
					<span class="s-b">最新</span>
					<span class="s-b">好评&nbsp;67</span>
					<span class="s-c">差评&nbsp;3</span>
					<span class="s-b">有图&nbsp;2</span>	
			</div>
		</div>
		<div class="p-3">
			<span class="p-3-a">
				<p>√</p>
				<span>只看有内容的评价</span>	
			</span>
		</div>
		<div class="p-4">
			<div class="p-4-a">
				<div class="p-4-a-left">
					<van-icon name="friends-o" />
				</div>
				<div class="p-4-a-right">
					<div class="h-right">
						<section class="r-1">
							<span>匿名用户</span>							<span class="r-1-a">
								<van-rate v-model="value" allow-half="" void-icon="star" void-color="#eee" /> 
								<div><p>超赞</p></div>
							</span>
						</section>
						<section class="r-2">2019-03-06</section>
					</div>
					<div class="right-second">
						<span>
							<mark>女女双人餐-咖喱牛肉炒饭(小)+鱿鱼炒油面(小)</mark>好吃
						</span>
						<img src="//fuss10.elemecdn.com/1/97/c5e97fe2dae75830eba8380b41d49jpeg.jpeg?imageMogr/format/webp/thumbnail/300x/" alt="">
						
					</div>
				</div>
				
				
			</div>
		</div>
	
	</div>
</template>

<script>
	export default {

		data() {
			return {
				value: 4.7
			}
		}
	}
</script>

<style scoped>
	.pingjia{
		margin: 0;
		width: 100%;
	}
	.p-1{
		width: 100%;
		height: 20vw;
		text-align: center;
		display: flex;
		background-color: white;
	}
	h3{
		margin: 0;
		width: 35%;
		height: 20vw;
		line-height: 20vw;
		text-align: center;
		font-size: 28px;
		color: #ff6000;
	}
	.p-a{
		width: 50%;
		height: 100%;
		display: flex;
	}
	.p-a-1{
		width: 75%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.p-b{
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.p-b span{
			width: 33%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
	}
	.span2{
		border-right:1px solid lightgray ;
	}
	.p-b p{
		color: #999999;
		font-size: 20px;
	}
	.p-2{
		width: 100%;
		height: 15vw;
	}
	.p-2-a{
		width: 90%;
		height: 15vw;
		margin: 0 auto;
	}
	.p-2-a span{
		width: 17vw;
		height: 15vw;
		margin-right: 3vw;
		text-align: center;
		line-height: 15vw;
		font-size: 5vw;
	}
	.s-a{
		background-color: #2395FF;
		color: white;
	}
	.s-b{
		background-color: #ebf5ff;
		color:#6d7885;
	}
	.s-c{
		background-color: #f5f5f5;
		color:#6d7885;
	}
	.p-3{
		width: 100%;
		height: 10vw;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
	}
	.p-3-a{
		width: 80%;
		height: 10vw;
		font-size: 5vw;
		margin: 0 auto;
		line-height: 10vw;
		display: flex;
	}
	.p-3-a p{
		background-color:#76d572;
		color: white;
		width: 6vw;
		height: 6vw;
		line-height: 6vw;
		text-align: center;
		border-radius: 50%;
		margin-top: 2vw;
	}
	.p-3-a span{
		color: #666;
	}
	.p-4{
		width: 100%;
		height: 150vw;
	}
	.p-4-a{
		width: 90%;
		margin: 0 auto;
		height: 70vw;
		display: flex;
	}
	.p-4-a-left{
		width: 10%;
		height: 100%;
	}
	.p-4-a-left i{
		width: 100%;
		height: 8vw;
		font-size: 8vw;
		line-height: 8vw;
		text-align: center;
		color: white;
		background-color: lightpink;
		border-radius: 50%;
	}
	.p-4-a-right{
		width: 85%;
		margin-left: 3vw;
		height: 100%;
	}
	.h-right{
		width: 100%;
		height: 12vw;
		display: flex;
		justify-content: space-between;
	}
	.r-1{
		width: 60%;
		height: 100%;
		line-height: 100%;
	}
	.van-rate__item{
		width: 3.5vw;
		height: 1vw;
		margin-right: 1vw;
	}
	.r-1-a{
		width: 100%;
		height: 12vw;
		display: flex;
	}
	.van-rate{
		height: 10vw;
	}
	.right-second{
		width: 100%;
		height: 55vw;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.right-second span{
		width: 100%;
		height: 10vw;
		
	}
	mark{
		color: #5082b1;
		background-color: white;
		font-size:4.5vw
	}
	.right-second img{
		width: 50%;
		height: 40vw;
	}
</style>
