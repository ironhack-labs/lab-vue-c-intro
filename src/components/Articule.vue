<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <article>
    <img :src="icon" alt="img" />
    <h5>{{ title }}</h5>
    <p>{{ description }}</p>
  </article>
</template>

<style scoped>
article {
  width: 28%;
  display: grid;
  grid-template-rows: 30% 15% 45%;
  row-gap: 1rem;
}
p {
  text-align: center;
}
img {
  padding-bottom: 1.5rem;
  margin: auto;
}
h5 {
  padding-bottom: 1.5rem;
  text-align: center;
}
</style>