import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    _data: [],
    _pageCount: 0,
  },

  mutations: {
    setData(state, data) {
      state._data = data;
    },
    setPage(state, val) {
      state._pageCount = val;
    },
  },

  actions: {
    async fetchData(context) {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        context.commit("setData", data.results);
      } catch (err) {
        throw new Error(err);
      }
    },

    changePage(context, val) {
      context.commit("setPage", val);
    },
  },

  getters: {
    data(state) {
      return state._data;
    },
    pageCount(state) {
      return state._pageCount;
    },
    filteredData(state) {
      return state._data.slice(state._pageCount * 4, state._pageCount * 4 + 4);
    },
  },
});
