<template>
	
	<div class="loding">
		<div class="home-b">
			<img src="../assets/icons/no-address.gif" alt="">
			<span>输入地址后才能订餐哦！</span>
			<router-link to="/home/address">
				<button>手动选择地址</button>
			</router-link>
			
		</div>
	</div>
	
</template>

<script>
	
	export default{
		
	}
</script>

<style scoped>
	.loding{
		width: 100%;
		margin: 0;
	}
	.home-b{
		width: 100%;
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-content: space-between;
		align-items: center;
		}
		.home-b img{
			width: 240px;
			height: 240px;
			text-align: center;
		}
	.home-b span{
		width: 200px;
		height: 30px;
		color: lightgray;
	}
	.home-b button{
		width: 150px;
		height: 30px;
		background-color: #56d176;
		font-size: 20px;
		border: none;
		outline: none;
		color: white;
		border-radius:5px;
		
	}
	a{
		text-decoration: none;
	}
</style>
