<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const usps = ref([
  {
    image: '/src/images/USP-1.png',
    alt: 'Performance Icon',
    title: 'Performant',
    description: 'Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.'
  },
  {
    image: '/src/images/USP-2.png',
    alt: 'Approachability Icon',
    title: 'Approachable',
    description: 'Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.'
  },
  {
    image: '/src/images/USP-3.png',
    alt: 'Versatility Icon',
    title: 'Versatile',
    description: 'A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.'
  }
]);
</script>

<template>

  <header>
    <nav class="nav">
      <img src="./images/Ironhack_logo.png" alt="IronHack Logo">
      <img src="./images/Burger_menu.png" @click="toggleMenu" alt="Menu">
      <ul v-show="isMenuOpen" class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section class="intro-section">
      <img src="./images/Vue_logo.png" alt="Vue Logo">
      <h1>Welcome to Vue.js</h1>
      <p>Become a coding ninja with the fastest-growing JavaScript framework</p>
      <button>Awesome!</button>
    </section>
    <section class="usp-section">
      <article v-for="usp in usps" :key="usp.title">
        <img :src="usp.image" :alt="usp.alt">
        <h4>{{ usp.title }}</h4>
        <p>{{ usp.description }}</p>
      </article>
    </section>
  </main>

</template>

<style scoped>

* {
  font-family: 'Inter', sans-serif;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

.nav > img:first-child {
  width: 2.33rem;
  height: 2.53rem;
  
}

.nav img:last-of-type {
  width: 1.46rem;
  height: 1.33rem;
  
}

.nav img:last-of-type:hover {
  cursor: pointer;
}


.menu {
  position: absolute;
  right: 2rem;
  top: 4rem;
  background: #222; /* Fondo oscuro */
  color: white; /* Texto blanco */
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu a {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  display: block;
}

.menu a:hover {
  background: #444;
  border-radius: 3px;
}

.intro-section {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  margin: 5rem auto;
  max-width: 28.5rem;
}

.intro-section img {
  width: 8.06rem;
}

.intro-section h1 {
  font-size: 3rem;
  
}

.intro-section p {
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 3rem;
}

.intro-section button {
  width: 7.56rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 50px;
  font-weight: 600;
  background-color: #34495E;
  color: white;
  cursor: pointer;

}

.usp-section {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #39B983;
  height: 40rem;
}

.usp-section article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12rem;
}

.usp-section p {
  margin: 0 auto;
  text-align: center;
}

</style>
