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
:root {
  --principalFont: "Roboto Condensed", sans-serif;
  --secondaryFont: "Roboto", sans-serif;
  --gray: #202020;
  --red: #e62429;
  --dark: #151515;
}
#app {
  font-family: var(--secondaryFont);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: var(--gray);
}
h1,
h2 {
  font-family: var(--principalFont);
  text-transform: uppercase;
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
.container {
  max-width: 1200px;
  width: 98%;
  margin: 0 auto;
}
</style>
