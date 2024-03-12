<template>
  <div>
    <nav>
      <img src="/src/assets/images/Ironhack_logo.svg" alt="logo-ironhack">
      <img src="/src/assets/images/Burger_menu.svg" alt="menu">
    </nav>
    <div id="container-logo">
      <img src="/src/assets/images/Vue_logo.svg" alt="container-logo">
    </div>
    <div id="container-titles">
      <h1 v-html="'Welcome to Vue.js'" class="custom-h1"></h1>
      <h3 v-html="'Become a coding ninja with the fastest-<br>growing JavaScript framework'" class="custom-h3"></h3>
    </div>
    <div>
      <button class="btn">Awesome!</button>
    </div>
  </div>
  <div class="images-container">
    <img src="/src/assets/images/USP-1.svg" alt="ima-1">
    <img src="/src/assets/images/USP-2.svg" alt="ima-2">
    <img src="/src/assets/images/USP-3.svg" alt="ima-3">
  </div>
  <div class="h3-info">
    <h3>Performant</h3>
    <h3>Approachable</h3>
    <h3>Versatile</h3>
  </div>
  <div class="">
    <p>Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.</p>
    <p>Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.</p>
    <p>A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
  </div>
</template>

<style scoped>
#container-titles {
  text-align: center;
}

.custom-h1 {
  font-size: 50px;
  line-height: 95px;
  letter-spacing: -2%;
  font-weight: 800;
  color: var(--vt-c-grey-darkest);
}

.custom-h3 {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -2%;
  font-weight: 800;
  margin-bottom: 40px;
}

.images-container {
  height: 40vh;
  width: 100%;
  background-color: var(--vt-c-green);
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.images-container img {
  margin-right: 60px;
  margin-left: 60px;

}
</style>