//state管理，方便子组件之间传递参数
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  //定义状态
  state: {
    author: 'Wise Wrong'
  }
})

export default store
