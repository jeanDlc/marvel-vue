<template>
  <div class="card">
    <div class="card-thumb">
      <img :src="imgSrc" alt="comic" loading="lazy" />
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>
      <div class="card-subs">
        <p>{{ numCreators || "No" }} creators</p>
        <p>{{ pageCount || "No" }} Pages</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    id: Number,
    imgSrc: String,
    pageCount: Number,
    numCreators: Number,
  },
};
</script>
<style scoped>
img {
  max-width: 100%;
}
.card {
  max-width: 100%;
  box-shadow: 4px 4px 4px -4px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 4px 4px 4px -4px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 4px 4px 4px -4px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.3s ease-out;
}
.card-thumb {
  height: 24rem;
  overflow: hidden;
}
.card-thumb img {
  transition: transform 0.3s ease-out;
}
.card-body {
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}

.card-title {
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
}

.card-subs {
  display: flex;
  text-align: center;
  justify-content: space-between;
  transition: color 0.3s ease-out;
  color: #9b9b9b;
}
.card:hover .card-subs {
  color: #808080;
}
.card-subs p {
  margin: 0;
}

.card:hover {
  box-shadow: 4px 4px 4px -2px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 4px 4px 4px -2px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 4px 4px 4px -2px rgba(0, 0, 0, 0.35);
}
.card:hover .card-thumb img {
  transform: scale(1.05);
}
</style>
