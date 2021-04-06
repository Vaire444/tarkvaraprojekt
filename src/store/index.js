import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "Sõber",
  },
  mutations: {
    setName(state, payload) {
      state.name = payload;
    },
  },
  actions: {
    setName({ commit }) {
      commit("setName");
    },
  },
  modules: {},
  // getters: {
  //   Weight: (state) => state.Weight,
  //   Height: (state) => state.Height,
  //   bmi: (state) => state.bmi,
  //   weightGroup: (state) => state.weightGroup,
  //   name: (state) => state.name,
  // },
});
