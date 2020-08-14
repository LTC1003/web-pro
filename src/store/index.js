import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videoTypeId: '',
    SET_TOKEN: '',
    USER_STATE: 0,
    LoginUserInfo: {},
    count: 0,
  },
  getters: {

  },
  mutations: {
    increment(state){
      state.SET_TOKEN,
      state.videoTypeId,
      state.USER_STATE,
      LoginUserInfo,
      state.count++
    },

  },
  actions: {},
  modules: {}
});

