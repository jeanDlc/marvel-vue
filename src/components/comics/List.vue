<template>
  <section class="list">
    <CardComic
      v-for="comic in comics"
      :key="comic.id"
      :title="comic.title"
      :imgSrc="`${comic.images[0]?.path}.${comic.images[0]?.extension}`"
      :pageCount="comic.pageCount"
      :numCreators="comic.creators?.available"
    />
  </section>
</template>
<script>
import CardComic from "./Card.vue";
export default {
  props: {
    comics: Array,
  },
  components: {
    CardComic,
  },
};
</script>
<style scoped>
.list {
  display: grid;
  gap: 1rem;
  margin: 1.5rem 0;
  row-gap: 3rem;
}
@media (min-width: 449px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 768px) {
  .list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1200px) {
  .list {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
