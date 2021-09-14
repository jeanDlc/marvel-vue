<template>
  <div class="card">
    <img class="image-hero red-layer" :src="imgSrc" alt="hero image" />
    <section class="text-container">
      <h2 class="name">{{ name }}</h2>
    </section>
  </div>
</template>
<script>
export default {
  data: function () {
    return {};
  },
  props: {
    name: String,
    imgSrc: String,
    description: String,
  },
};
</script>
<style scoped>
.card {
  border-radius: 7px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: #151515;
}

.text-container {
  padding: 15px;

  color: white;
}
.name {
  font-size: 20px;
  margin: 5px 0;
  font-weight: 400;
}
.image-hero {
  width: 100%;
  border-radius: 7px 7px 0 0;
  height: 350px;
  object-fit: cover;
}

.button-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 15px;
  gap: 5px;
}
button {
  padding: 15px 20px;
  background-color: var(--red);
  color: white;
  border: none;
  border-radius: 7px;
  width: 100%;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
}
</style>
