import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: '阿灿学vue之旅'
  },
  mutations: {
    imcrement(state){
      state.count++
    }
  },
  actions: {},
  modules: {}
});
