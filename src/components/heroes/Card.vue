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
.card::after {
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-top-color: transparent;
  border-right-color: white;
  border-style: solid;
  border-width: 12px 12px 0 0;

  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  top: auto;
  z-index: 4;
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
  transform: scale(1.08);
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
