<template>
  <div id="nav" class="menu-desktop">
    <router-link to="/">Home</router-link>
    <router-link to="/comics">Comics</router-link>
  </div>
  <Hamburger v-on:click="toogleMenu" class="hamburger" />

  <div class="menu-mobile" ref="menu" v-on:click="toogleMenu">
    <CloseBtn />
    <div id="nav" class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/comics">Comics</router-link>
      <a href="https://github.com/jeanDlc/marvel-vue">Code</a>
    </div>
  </div>
</template>
<script>
import Hamburger from "./Hamburger.vue";

import X from "./X.vue";
export default {
  data() {
    return {
      distance: 100,
    };
  },
  components: {
    Hamburger,
    CloseBtn: X,
  },
  methods: {
    toogleMenu() {
      const menu = this.$refs.menu;
      menu.style.transform = `translateX(${this.distance}vw)`;

      this.distance = -this.distance;
    },
  },
};
</script>
<style scoped>
img {
  max-width: 100%;
}

a {
  font-weight: bold;
  text-transform: uppercase;
  color: var(--gray);
  text-decoration: none;
}

a.router-link-exact-active {
  color: var(--red);
}
.menu-desktop {
  padding: 1rem;
  display: none;
  gap: 2rem;
}
@media (min-width: 768px) {
  .menu-desktop {
    display: flex;
  }
}
.menu-mobile {
  width: 100vw;
  min-height: 2rem;
  height: 100vh;
  background-color: white;
  position: absolute;
  left: -100vw;
  top: 0;
  transition: transform 0.3s ease-in-out;
  max-width: 100%;
  padding: 1rem;
}
@media (min-width: 768px) {
  .hamburger {
    display: none;
  }
}
.nav {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.5rem;
}
.nav a {
  font-size: 1.7rem;
  font-family: var(--principalFont);
}
</style>
