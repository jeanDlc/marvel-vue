<template>
  <div class="hero">
    <section>
      <div class="welcome">
        <h1 class="title">Your <span class="sp">superHeroes</span> are here</h1>
        <p class="text">This is an application made with Vue.js</p>
        <img class="vue" src="@/assets/logo.png" alt="vue " />
      </div>
    </section>
  </div>
</template>
<style scoped>
.hero {
  background-image: url("../assets/images/hero.jpg");
  min-height: 90vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
}
section {
  height: 90vh;
  display: grid;
  background-color: rgba(0, 0, 0, 0.5);
}
@media (min-width: 768px) {
  section {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1000px) {
  section {
    grid-template-columns: 1fr 2fr;
  }
}
.sp {
  background-color: var(--red);
  padding: 0 10px;
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.5);
}
.welcome {
  color: rgb(228, 228, 228);
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  text-transform: uppercase;
}

.title {
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  color: rgb(228, 228, 228);
  font-family: var(--secondaryFont);

  font-size: 2rem;

  line-height: 1.4;
  margin-bottom: 0.5rem;
}

@media (min-width: 768px) {
  .title {
    font-size: 2rem;
  }
}
.text {
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 35px;
  font-size: 0.8rem;
}
@media (min-width: 768px) {
  .text {
    font-size: 1rem;
  }
}
.vue {
  max-width: 80px;

  -webkit-filter: drop-shadow(2px 2px 2px black);
  filter: drop-shadow(2px 2px 2px black);
}
</style>
