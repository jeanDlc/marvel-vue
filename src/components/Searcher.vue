<template>
  <form v-on:submit="handleSubmit">
    <label v-if="withLabel" for="q"> {{ labelText }} </label>
    <div class="searcher">
      <input v-model="query" type="text" name="q" :placeholder="placeholder" />
    </div>
  </form>
</template>
<script>
export default {
  data: function () {
    return {
      query: "",
    };
  },
  props: {
    placeholder: String,
    withLabel: Boolean,
    labelText: String,
    onSubmit: Function,
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const q = this.query.trim();
      this.onSubmit(q);
      this.query = "";
    },
  },
};
</script>
<style scoped>
input {
  width: 100%;
  padding: 1rem 0.9rem;
  border-radius: 0.5rem;
  border: 1px solid #e1e1e1;
  appearance: none;
  transition: border 0.3s ease-out;
  font-weight: 500;
  font-size: 1.2rem;
  color: #444;
}
input:focus {
  outline: none;
  border: 1px solid #b8b7b7;
}
.searcher {
  position: relative;
}

.searcher::before {
  content: url("../assets/icons/search.svg");
  padding: 0 15px 0 0;
  right: 0;
  bottom: 30%;
  position: absolute;
}
</style>
