<script>
export default{
    name: 'eachArticle',
    props: {
        title: {
            type: String,
        },
        icon: {
            type: String,
        },
        description: {
            type: String
        }
    }
}
</script>

<template>
  <article>
    <img :src="icon" alt="img">
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
article p{
  text-align: center;
}
article img{
  padding-bottom: 1.5rem;
  margin: auto;
}
article h5{
  padding-bottom: 1.5rem;
  text-align: center;
}
</style>