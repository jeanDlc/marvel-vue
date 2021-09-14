<template>
  <div class="card">
    <div class="card-thumb">
      <img :src="imgSrc" alt="hero image" />
    </div>

    <section class="card-body">
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: #151515;
  position: relative;
  overflow: hidden;
}
.card::before {
  content: "";
  background-color: var(--red);
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 113px; /*becasue card-body has 120px */
  left: 0;
  transition: transform 0.5s ease-in-out;
}

.card:hover::before {
  transform: translate3d(0, 50%, 0);
  -webkit-transform: translate3d(0, 50%, 0);
}
.card-thumb {
  height: 350px;
  overflow: hidden;
}

.card-thumb img {
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-out;
}
.card:hover .card-thumb img {
  transform: scale(1.1);
}
.card-body {
  padding: 15px;
  height: 120px;
  color: white;
  position: relative;
}

.name {
  font-size: 17px;
  margin: 5px 0;
  font-weight: 400;
  text-transform: uppercase;
}
</style>
