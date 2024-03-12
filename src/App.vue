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
      <h3 v-html="'Become a coding ninja with the fastest-growing JavaScript framework'" class="custom-h3"></h3>
    </div>
    <div>
      <button class="btn">Awesome!</button>
    </div>
  </div>
  <div><img src="/src/assets/images/" alt=""></div>
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
</style>