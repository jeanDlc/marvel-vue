<template>
  <Hero />
  <main class="container">
    <h2 class="title">Featured characters</h2>
    <ListHeroes />
  </main>
</template>

<script>
import Hero from "@/components/Hero.vue";
import ListHeroes from "@/components/heroes/List.vue";
export default {
  name: "Home",
  components: {
    Hero,
    ListHeroes,
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
</style>
