<script>
  export default {
    methods: {
      start() {
        alert("Let’s start with Vue!");
      }
    }
  };
</script>

<template>
  <section class="hero">
    <img src="@/images/Vue_logo.png" alt="Icon vue" />
    <div class="content">
      <h1>Welcome to Vue.js</h1>
      <p>Become a coding ninja with the fastest-<br>growing JavaScript framework</p>
      <button @click="start">Awesome!</button>
    </div>
    
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
  .hero {
    padding: 86px 72px; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    align-self: center;
    color: black;
    background: white;
    flex-wrap: wrap;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
  .hero h1 {
    color:#2b2f30;
    font-family: Inter;
    font-size: 50px;
    line-height: 95px;
    letter-spacing: -2%;
    font-weight: 800;
  }
  .hero p {
    font-family: Inter;
    font-size: 14px;
    letter-spacing: -2%;
    font-weight: 800;
    line-height: 20px;
  }
  .hero img {
    width: 129px;
  }
  button {
    background: #34495E;
    color: white;
    padding: 10px 20px;
    margin: 22px 0 0 0;
    border-radius: 10px;
    cursor: pointer;
    font-family: Inter;
    font-size: 14px;
    letter-spacing: -2%;
    font-weight: 800;
    line-height: 20px;
  }
</style>
