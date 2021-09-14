<template>
  <Heading />
  <router-view />
</template>
<script>
import Heading from "./components/Heading.vue";

export default {
  components: {
    Heading,
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #413c3c;
}
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
::-moz-selection {
  /* Code for Firefox */
  color: white;
  background: var(--red);
}

::selection {
  color: white;
  background: var(--red);
}
</style>
