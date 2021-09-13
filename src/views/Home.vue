<template>
  <Hero />
  <main>
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
