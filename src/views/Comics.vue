<template>
  <main class="container">
    <h1 class="title">All the comics</h1>
    <Spinner v-if="loading" />
    <p class="error" v-if="error">There was an error</p>

    <ComicsList :comics="allComics" />
    <div class="action-list">
      <button
        v-if="limit < 100"
        :disabled="loading"
        class="btn"
        v-on:click="increaseLimit"
      >
        More
      </button>
    </div>
    <Spinner v-if="loading && limit > 20" />
  </main>
</template>
<script>
import api from "../config/api";
import ComicsList from "../components/comics/List.vue";
import Spinner from "../components/Spinner.vue";
export default {
  data() {
    return {
      allComics: [],
      baseUrl: `https://gateway.marvel.com:443/v1/public/comics?ts=${api.ts}&apikey=${api.pubKey}&hash=${api.hash}`,
      loading: false,
      error: null,
      limit: 20,
    };
  },
  created() {
    this.setListComics(20);
  },
  methods: {
    async setListComics(limit = 20) {
      this.loading = true;
      try {
        const url = `${this.baseUrl}&limit=${limit}`;
        const res = await fetch(url);
        const data = await res.json();
        this.loading = false;
        this.error = null;
        this.allComics = data.data.results;
      } catch (error) {
        this.loading = false;
        this.error = true;
        console.log(error);
      }
    },
    increaseLimit() {
      const actualLimit = this.limit;
      if (actualLimit >= 100) return;
      this.limit = actualLimit + 5;
      this.setListComics(this.limit);
    },
  },
  components: {
    ComicsList,
    Spinner,
  },
};
</script>
<style scoped>
.title {
  font-size: 2rem;

  margin-bottom: 3.5rem;
}
.btn {
  background-color: var(--dark);
  color: white;
  padding: 1rem 1.2rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  min-width: 12rem;
  margin: 1rem 0;
  transition: transform 0.3s ease-out;
  position: relative;
}
@media (max-width: 768px) {
  .btn {
    width: 100%;
  }
}
.btn:hover {
  transform: scale(1.02);
}
.btn:disabled {
  background-color: black;
}
.action-list {
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>
