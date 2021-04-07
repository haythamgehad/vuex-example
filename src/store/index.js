
import Vue from "vue";
import Vuex from "vuex";
import common from "./modules/common"; 

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
    store_save(state, { moduleName, key, value }) {
      state[moduleName][key] = value;
    }
  },
  actions: {
    STORE_SAVE({ commit }, payload) {
      commit("store_save", payload);
    }
  },
  modules: {
    common
  },
});
 