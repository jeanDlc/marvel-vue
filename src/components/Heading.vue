<template>
  <header>
    <section class="header-container">
      <h1>
        <router-link to="/">
          <img
            alt="Marvel"
            src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png"
          />
        </router-link>
      </h1>
      <Navigation />
    </section>
  </header>
</template>
<script>
import Navigation from "./Navigation.vue";
export default {
  components: {
    Navigation,
  },
};
</script>
<style scoped>
header {
  background-color: white;
  position: -webkit-sticky;
  position: sticky;
  z-index: 2;
  top: 0;
}
.header-container {
  padding: 0 10px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 a img {
  max-width: 100px;
}
@media (min-width: 768px) {
  h1 a img {
    max-width: 120px;
  }
}
</style>
