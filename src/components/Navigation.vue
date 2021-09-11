<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>
<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: var(--gray);
}

#nav a.router-link-exact-active {
  color: var(--red);
}
</style>
