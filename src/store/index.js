import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "Sõber",
  },
  mutations: {
    setName(state, input) {
      state.name = input;
    },
  },
  actions: {},
  modules: {},
});
