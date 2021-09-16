<template>
  <main class="container">
    <h1 class="title">All the comics</h1>
    <Spinner v-if="loading" />
    <p class="error" v-if="error">There was an error</p>
    <ComicsList :comics="allComics" />
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
    };
  },
  created() {
    this.getAllComics().then((comics) => (this.allComics = comics));
  },
  methods: {
    async getAllComics() {
      this.loading = true;
      try {
        const res = await fetch(this.baseUrl);
        const data = await res.json();
        this.loading = false;
        this.error = null;
        return data.data.results;
      } catch (error) {
        this.loading = false;
        this.error = true;
        console.log(error);
      }
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
  font-size: 2.5rem;
  text-transform: capitalize;
  font-weight: 500;
  margin-bottom: 3.5rem;
}
</style>
