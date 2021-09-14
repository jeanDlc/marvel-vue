<template>
  <Hero />
  <main class="container">
    <div class="main-header">
      <h2 class="title">Featured characters</h2>
      <Searcher placeholder="Ex. Hulk" />
    </div>

    <ListHeroes />
  </main>
</template>

<script>
import Hero from "@/components/Hero.vue";
import ListHeroes from "@/components/heroes/List.vue";
import Searcher from "../components/Searcher.vue";
export default {
  name: "Home",
  components: {
    Hero,
    ListHeroes,
    Searcher,
  },
};
</script>
<style scoped>
.container {
  max-width: 1200px;
  margin: 1rem auto;
  width: 90%;
}
.title {
  font-size: 30px;
  position: relative;
  margin-bottom: 2rem;
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
</style>
