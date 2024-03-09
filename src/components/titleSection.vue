<script setup>
</script>

<template>
  <div class="container">
    <img src="/src/images/Vue_logo.png" alt="" class="vue-logo">
    <h1>Welcome to Vue.js</h1>
    <h6>Become a coding ninja with the fastest-<br>growing JavaScript framework</h6>
    <button>Awesome!</button>
  </div>
</template>

<style scope>

.container {
  text-align: center;
  width: 456px;
  margin: 0 auto;
}

.vue-logo {
  width: 129px;
  height: 129px;
}

h1{
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 50px;
  line-height: 95px;
  letter-spacing: -2%;
  text-align: center;
  margin: 0 auto;
}

h6{
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -2%;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 20px;
}

button {
  background-color: var(--bgcolor-button);
  color: var(--color-button);
  width: var(--width-button);
  height: var(--height-button);
  font-weight: var(--font-weight-button);
  border-radius: var(--border-radius-button);
  border: none;
  cursor: pointer;
}
</style>