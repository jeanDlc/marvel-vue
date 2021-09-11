<template>
  <Hero />
  <main></main>
</template>

<script>
import api from "@/config/api";
import Hero from "@/components/Hero.vue";
export default {
  name: "Home",
  components: {
    Hero,
  },
  created() {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?ts=${api.ts}&apikey=${api.pubKey}&hash=${api.hash}`
    )
      .then((data) => data.json())
      .then((res) => console.log(res.data?.results));
  },
};
</script>
