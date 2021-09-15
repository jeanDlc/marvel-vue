<template>
  <div class="card">
    <div class="card-thumb">
      <img :src="imgSrc" alt="comic" loading="lazy" />
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>
      <div class="card-subs">
        <p>{{ numCreators || "No" }} creators</p>
        <span>|</span>
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
  cursor: pointer;
}
.card-thumb {
  height: 25rem;
  overflow: hidden;
  box-shadow: 0 26px 24px -16px rgb(0 0 0 / 40%);
  transition: transform 0.3s ease-out;
}
.card:hover .card-thumb {
  transform: translateY(-0.6rem);
}
.card-body {
  margin-top: 1.7rem;
  padding: 0 0.5rem;
}
.card-title {
  font-size: 1.05rem;
  color: var(--dark);
  margin: 0;
  font-weight: 700;
}
.card:hover .card-title {
  color: var(--red);
}
.card-subs {
  display: flex;
  font-size: 0.8rem;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.card-subs p {
  margin: 0;
}
</style>
