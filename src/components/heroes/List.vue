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
import CardHero from "./Card.vue";

export default {
  components: {
    CardHero,
  },
  props: {
    listHeroes: Array,
  },
};
</script>
<style scoped>
.list {
  display: grid;
  gap: 20px;
  margin-bottom: 2rem;
}
@media (min-width: 768px) {
  .list {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
