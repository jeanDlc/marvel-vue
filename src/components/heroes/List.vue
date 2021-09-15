<template>
  <Spinner v-if="loading" />
  <section class="list">
    <CardHero
      v-for="hero in heroes.listOfHeroes"
      v-bind:key="hero.id"
      :name="hero.name"
      :imgSrc="`${hero.thumbnail.path}.${hero.thumbnail.extension}`"
      :description="hero.description"
    />
    <div v-if="heroes.listOfHeroes.length === 0">
      <p>No results</p>
      <button v-on:click="setAllHeroes" class="btn-reset">reset</button>
    </div>
  </section>
  <button
    v-if="heroes.listOfHeroes.length === 1"
    v-on:click="setAllHeroes"
    class="btn-reset"
  >
    Show All
  </button>
</template>
<script>
import CardHero from "./Card.vue";
import { mapState, mapMutations } from "vuex";
import Spinner from "../Spinner.vue";
export default {
  created() {
    this.setAllHeroes();
  },
  components: {
    CardHero,
    Spinner,
  },
  computed: {
    ...mapState(["heroes", "loading"]),
  },
  methods: {
    ...mapMutations(["setAllHeroes"]),
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
.btn-reset {
  background-color: var(--dark);
  color: white;
  border: none;
  text-transform: uppercase;
  padding: 1rem 1rem;
  min-width: 10rem;
  cursor: pointer;
  transition: transform 0.3s ease-out;
}
.btn-reset:hover {
  transform: scale(1.05);
}
</style>
