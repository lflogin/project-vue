import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    toleftlist(state,item) {
      state.list = item
    }
  },
  actions: {
    toleftlist({ commit }) {
      axios.get('/api/mock').then(res=>{
        // console.log(res.data)
        commit('toleftlist',res.data.coming)
      })
    }
  },
  getters: {

  },
  modules: {
  }
})
