<template>
  <div>
    <!-- Contenido del head -->
    <nav>
      <img src="./assets/images/Ironhack_logo.svg" alt="logo-ironhack">
      <img src="./assets/images/Burger_menu.svg" alt="menu">
    </nav>
    <!-- Contenido del body -->
    <div id="container-logo">
      <img src="./assets/images/Vue_logo.svg" alt="container-logo">
    </div>

    <div id="container-titles">
      <h1 class="custom-h1">{{ title }}</h1>
      <h3 class="custom-h3">{{ subtitle }}</h3>
      <button class="btn">Awesome!</button>
    </div>
  </div>
  <!--------------------------------- Cards ------------------------------->
  <div class="background-container">
    <div v-for="(card, index) in cards" :key="index" class="card">
      <div class="image" :id="'image' + (index + 1)">
        <img :src="card.imageSrc" :alt="'ima-' + (index + 1)">
      </div>
      <div class="title">
        <h3>{{ card.title }}</h3>
      </div>
      <div class="text">
        <p>{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      title: 'Welcome to Vue.js',
      subtitle: 'Become a coding ninja with the fastest-\ngrowing JavaScript framework',
      cards: [
        {
          title: 'Performant',
          imageSrc: '/src/assets/images/USP-1.svg',
          description: 'Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.'
        },
        {
          title: 'Approachable',
          imageSrc: '/src/assets/images/USP-2.svg',
          description: 'Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.'
        },
        {
          title: 'Versatile',
          imageSrc: '/src/assets/images/USP-3.svg',
          description: 'A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.'
        }
      ]
    };
  }
});
</script>
<!------------------------------------------------------ Style -------------------------------------------------->
<style scoped>
@import '/src/assets/main.css';
@import '/src/assets/base.css';
@import '/src/assets/_colors.css';
@import '/src/assets/_button.css';
</style>