import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Find from './views/Find.vue'
import Order from './views/Order.vue'
import Me from './views/Me.vue'
import Address from './views/Address.vue'
import Search from './views/Search.vue'
import Login from './views/Login.vue'
import GoodsDetail from './views/GoodsDetail.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
		 {
		  path: '/home/address',
		  name: 'address',
		  component: Address
		},
		 {
		  path: '/home/search',
		  name: 'search',
		  component: Search
		},
		{
		  path: '/home/goodsdetail/:shopid',
		  name: 'goodsdetail',
		  component: GoodsDetail
		},
		{
		  path: '/find',
		  name: 'find',
		  component:Find
		},
		{
		  path: '/me',
		  name: 'me',
		  component: Me
		},
		{
		  path: '/me/login',
		  name: 'Login',
		  component: Login
		},
		{
		  path: '/order',
		  name: 'order',
		  component: Order
		}
   
  ]
})
