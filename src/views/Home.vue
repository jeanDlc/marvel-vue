<template>
  <Hero />
  <main class="container">
    <div class="main-header">
      <h2 class="title">Featured characters</h2>
      <Searcher placeholder="Ex. Hulk" :onSubmit="searchHeroes" />
    </div>
    <Spinner v-if="loading" />
    <ListHeroes :listHeroes="heroes.listOfHeroes" />
    <button
      v-if="heroes.listOfHeroes.length === 0"
      v-on:click="setAllHeroes"
      class="btn-dark"
    >
      Reset
    </button>
    <button
      v-if="heroes.listOfHeroes.length === 1"
      v-on:click="setAllHeroes"
      class="btn-dark"
    >
      Show all
    </button>
  </main>
</template>

<script>
import Hero from "@/components/Hero.vue";
import ListHeroes from "../components/heroes/List.vue";
import Searcher from "../components/Searcher.vue";
import Spinner from "../components/Spinner.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Hero,
    ListHeroes,
    Searcher,
    Spinner,
  },
  created() {
    this.setAllHeroes();
  },
  methods: {
    ...mapMutations(["searchHeroes", "setAllHeroes"]),
  },
  computed: {
    ...mapState(["heroes", "loading"]),
  },
};
</script>
<style scoped>
.container {
  max-width: 1200px;
  margin: 1rem auto 5rem auto;
  width: 90%;
}
.title {
  font-size: 30px;
  position: relative;
  margin-bottom: 2rem;
  text-transform: capitalize;
}
.title::after {
  content: "";
  width: 10rem;
  height: 7px;
  background-color: var(--red);
  bottom: -12px;
  left: 0;
  position: absolute;
}
.main-header {
  display: grid;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
}
@media (min-width: 768px) {
  .main-header {
    grid-template-columns: 1fr 1fr;
  }
}
.btn-dark {
  background-color: var(--dark);
  color: white;
  border: none;
  text-transform: uppercase;
  padding: 1rem 1rem;
  min-width: 10rem;
  cursor: pointer;
  transition: transform 0.3s ease-out;
}
.btn-dark:hover {
  transform: scale(1.05);
}
</style>
