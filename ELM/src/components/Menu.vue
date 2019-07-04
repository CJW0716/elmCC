<template>
	<div>
		<!-- 商家推荐 -->
		<Recommend v-if="recommend.length>0" :recommend="recommend[0]"></Recommend>

		<!-- 商品列表 -->
		<MenuList :menu="menu">

		</MenuList>
	</div>
</template>

<script>
	import Recommend from "../components/Recommend.vue"
	import MenuList from "../components/MenuList.vue"
	export default {
		components: {
			Recommend,
			MenuList

		},
		props: ['menu', 'recommend', 'bought']

	}
</script>

<style>
</style>
