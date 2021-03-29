import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Weight: 47,
    Height: 162,
    bmi: 40,
    weightGroup: "Oled nomaalkaalus",
  },
  mutations: {
    setWeightValue(state, payload) {
      state.Weight = payload;
    },
    setHeightValue(state, payload) {
      state.Height = payload;
    },
  },
  actions: {
    setWeightValue({ commit }) {
      commit("Weight");
    },
    setHeightValue({ commit }) {
      commit("Height");
    },
  },
  modules: {},
  getters: {
    Weight: (state) => state.Weight,
    Height: (state) => state.Height,
    bmi: (state) => state.bmi,
    weightGroup: (state) => state.weightGroup,
  },
});
