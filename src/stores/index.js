import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    data: [],
    pageCount: 0,
  },

  mutations: {
    setData(state, data) {
      state.data = data;
    },
  },

  actions: {
    async fetchCards(context) {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        console.log(data);
        context.commit("setData", data);
      } catch (err) {
        throw new Error(err);
      }
    },
  },
});

export default store;
