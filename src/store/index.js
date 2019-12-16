import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    path:''
  },
  mutations: {
    increment(state){
      state.count++
    }
  },
  actions: {},
  modules: {}
});

