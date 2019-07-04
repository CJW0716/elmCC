import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 所有的公共样式，可以单独写在一个css文件中，引入
import "./assets/index.css"
Vue.config.productionTip = false
// 导入axios
import axios from "axios"
Vue.prototype.http = axios

import Vant from "vant"
import 'vant/lib/index.css'
// 注册使用vant所有的组件
Vue.use(Vant)

// 引入过滤器
import {iconFilter} from "@/utils/imageFilter.js"
Vue.filter("iconFilter",iconFilter)
// 第二个轮播图过滤器
import {iconFilter2} from "@/utils/imageFilter2.js"
Vue.filter("iconFilter2",iconFilter2)
// 商品信息过滤器
import {iconFilter3} from "@/utils/imageFilter3.js"
Vue.filter("iconFilter3",iconFilter3)
// 距离过滤器
import {iconFilter4} from "@/utils/imageFilter4.js"
Vue.filter("iconFilter4",iconFilter4)
import {iconFilter5} from "@/utils/imageFilter5.js"
Vue.filter("iconFilter5",iconFilter5)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
