import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state 仓库中的数据(转态)
	state: {
	num:10
  },
  mutations: {
		addNum:function(state){
			
			state.num ++
		}
  },
	// 对仓库中的数据进行异步修改，必须使用actions
  actions: {
		
  },
	getters:{
		
		
	}
})
