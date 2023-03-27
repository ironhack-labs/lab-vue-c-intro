<template>
  <NavBar />
  <div id="main">
    <img class="logo-vue" src="./assets/logo.svg" alt="logo-vue">
    <h1>Welcome to Vue.js</h1>
    <p>Become a coding ninja with the fastest-growing JavaScript framework</p>
    <button type="button" name="btn" class="btn-main">Awesome!</button>
  </div>
  <div id="info">
    <InfoCards />
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue"
import InfoCards from "./components/InfoCards.vue"


</script>

