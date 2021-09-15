<template>
  <main class="container">
    <h1 class="title">All the comics</h1>
    <ComicsList :comics="allComics" />
  </main>
</template>
<script>
import api from "../config/api";
import ComicsList from "../components/comics/List.vue";
export default {
  data() {
    return {
      allComics: [],
      baseUrl: `https://gateway.marvel.com:443/v1/public/comics?ts=${api.ts}&apikey=${api.pubKey}&hash=${api.hash}`,
    };
  },
  created() {
    this.getAllComics().then((comics) => (this.allComics = comics));
  },
  methods: {
    async getAllComics() {
      try {
        const res = await fetch(this.baseUrl);
        const data = await res.json();
        return data.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: {
    ComicsList,
  },
};
</script>
<style scoped>
.title {
  font-size: 2.5rem;
  text-transform: capitalize;
}
</style>
