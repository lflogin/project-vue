import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    tolist(state,item) {
      state.list.push(item)
    }
  },
  actions: {
  },
  modules: {
  }
})
