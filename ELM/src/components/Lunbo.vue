<template>
	<div class="lunbo">
		<van-swipe :autoplay="2500">
			<van-swipe-item v-for="(image, index) in images" :key="index">
				<img :src="image.image_hash|iconFilter2" alt="">
			</van-swipe-item>
		</van-swipe>

	</div>
</template>

<script>
	export default {
		data(){
			return{
				images:[]
			}
		},
		mounted(){
			this.http.get('/ele/restapi/shopping/v2/banners',{
				params:{
					latitude:"34.703184",
					longitude:"113.806981",
					consumer:"1",
					type:"1"
				}
			})
			.then(resp=>{
				this.images = resp.data
				// console.log(this.images[0].image_hash)
			})
		}
		

	}
</script>

<style scoped>
	.lunbo,.van-swipe{
		width: 100%;
		height:21vh;
	}
	.van-swipe img{
		width: 100%;
		height: 21vh;
	}
	.van-swipe__indicators{
		width: 50px;
		height: 5px;
	}

</style>
