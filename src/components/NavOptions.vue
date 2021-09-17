<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/comics">Comics</router-link>
  </div>
</template>
<style scoped>
#nav a.router-link-exact-active {
  color: var(--red);
}
</style>
