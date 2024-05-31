<template>
  <div id="app">
    <img src="./images/Header.jpg" alt="Header for Hello Vue landing page."><img src="./images/Intro section.jpg" alt="Intro section for Hello Vue landing page."><img src="./images/USPs.jpg" alt="USPs for Hello Vue landing page.">
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    align-items: center;
    background-color: #fff;
    padding: 10px 0 20px 0;
}
</style>