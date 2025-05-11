<script setup>

</script>

<template>
 <section class="section1">
  <img src='@/images/Vue_logo.png' alt="vueLogo">
  <h1>Welcome to Vue.js</h1>
  <h5>Become a coding ninja with the fastest<br>growing JavaScript framework</h5>
  <a href="#">Awesome!</a>
  </section>
</template>

<style scoped>
  section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5rem;
  }
 img{
    height: 13rem;
  }
h5{
    text-align: center;
    margin-bottom: 1.5rem;
  }
  a{
    padding: 0.5rem 1rem;
    color: white;
    text-decoration: none;
    background-color: #34495E;
    border-radius: 1rem;
    font-weight: 700;
    margin-top: 1rem;
  }
</style>