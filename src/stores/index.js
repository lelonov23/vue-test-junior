import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    _data: [],
    _pageCurrent: 0,
  },

  mutations: {
    setData(state, data) {
      state._data = data;
    },
    setPage(state, val) {
      state._pageCurrent = val;
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
    pageCurrent(state) {
      return state._pageCurrent;
    },
    filteredData(state) {
      return state._data.slice(
        state._pageCurrent * 4,
        state._pageCurrent * 4 + 4
      );
    },
    pages(state) {
      const num = Math.ceil(state._data.length / 4);
      const pages = [];
      for (let i = 0; i < num; i++) pages[i] = i + 1;
      return pages;
    },
  },
});
