<template>
  <section class="list">
    <CardHero
      v-for="hero in listHeroes"
      v-bind:key="hero.id"
      :name="hero.name"
      :imgSrc="`${hero.thumbnail.path}.${hero.thumbnail.extension}`"
      :description="hero.description"
    />
  </section>
</template>
<script>
import api from "@/config/api";
import CardHero from "./Card.vue";
export default {
  data: function () {
    return {
      listHeroes: [],
    };
  },
  created() {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?ts=${api.ts}&apikey=${api.pubKey}&hash=${api.hash}`
    )
      .then((data) => data.json())
      .then((res) => (this.listHeroes = res.data?.results))
      .catch((e) => console.log(e))
      .then(() => console.log(this.listHeroes));
  },
  components: {
    CardHero,
  },
};
</script>
<style scoped>
.list {
  display: grid;
  gap: 20px;
}
@media (min-width: 768px) {
  .list {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
