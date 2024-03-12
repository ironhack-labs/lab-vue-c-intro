<template>
  <div>
    <nav>
      <img src="./assets/images/Ironhack_logo.svg" alt="logo-ironhack">
      <img src="./assets/images/Burger_menu.svg" alt="menu">
    </nav>

    <div id="container-logo">
      <img src="./assets/images/Vue_logo.svg" alt="container-logo">
    </div>

    <div id="container-titles">
      <h1 class="custom-h1">{{ title }}</h1>
      <h3 class="custom-h3">{{ subtitle }}</h3>
      <button class="btn">Awesome!</button>
    </div>

  </div>
  <div class="images-container">
    <img src="/src/assets/images/USP-1.svg" alt="ima-1">
    <img src="/src/assets/images/USP-2.svg" alt="ima-2">
    <img src="/src/assets/images/USP-3.svg" alt="ima-3">
  </div>
  <div class="h3-info">
    <h3 v-for="info in infoList" :key="info">{{ info }}</h3>
  </div>
  <div class="">
    <p>Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.</p>
    <p>Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.</p>
    <p>A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
  </div>
</template>
<!-------------------------------- script -------------------------------->
<script>
export default {
  data() {
    return {
      title: 'Welcome to Vue.js',
      subtitle: 'Become a coding ninja with the fastest-growing JavaScript framework',
      infoList: ['Performant', 'Approachable', 'Versatile']
    };
  }
}
</script>
<!--------------------------------- Style --------------------------------->
<style scoped>
@import '/src/assets/main.css';
@import '/src/assets/base.css';
@import '/src/assets/_colors.css';
@import '/src/assets/_button.css';
</style>