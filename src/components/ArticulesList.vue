<script setup>
import Articule from '@/components/Articule.vue';
const Articles= [{
        title: 'Performat',
        icon: '/src/images/USP-1.png',
        description: 'Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.',
      },
      {
        title: 'Approchable',
        icon: '/src/images/USP-2.png',
        description: 'Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.',
      },
      {
        title: 'Versatile',
        icon: '/src/images/USP-3.png',
        description: 'A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.',
      },

      ]
</script>

<template>
  <section >
    <Articule
      v-for="article in Articles"
      :key="article.id"
      :title="article.title"
      :icon="article.icon"
      :description="article.description"
    ></Articule>
  </section>
</template>

<style scoped>
 section{
    width: 100%;
    height: auto;
    background-color: #39B983;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem;
  }
</style>