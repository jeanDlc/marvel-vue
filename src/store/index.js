import { createStore } from "vuex";
import api from "../config/api";

export default createStore({
  state: {
    heroes: {
      listOfHeroes: [],
      urlBase: `https://gateway.marvel.com:443/v1/public/characters?ts=${api.ts}&apikey=${api.pubKey}&hash=${api.hash}`,
    },
    error: true,
    loading: false,
  },
  mutations: {
    async searchHeroes(state, name) {
      state.loading = true;
      if (!name) return this.commit("setAllHeroes");
      try {
        const url = `${state.heroes.urlBase}&name=${name}`;
        const res = await fetch(url);
        const listHeroes = await res.json();
        state.heroes.listOfHeroes = listHeroes.data.results;
        state.error = false;
        state.loading = false;
      } catch (error) {
        state.error = true;
        state.loading = false;
      }
    },
    async setAllHeroes(state) {
      state.loading = true;
      try {
        const res = await fetch(state.heroes.urlBase);
        const list = await res.json();
        state.heroes.listOfHeroes = list.data.results;
        state.loading = false;
      } catch (error) {
        state.error = true;
        state.loading = false;
      }
    },
  },
  actions: {},
  modules: {},
});
