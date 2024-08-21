<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <div class="logo-container">
          <img src="@/images/iron-hack.png" alt="Iron-hack-logo" />
        </div>
        <div class="hamburger-container">
          <img src="@/images/hamburger.png" alt="hamburger" />
        </div>
      </header>
      <div class="hero">
        <img src="@/images/vue-logo.png" alt="vue-logo" />
        <h1>Welcome to Vue.js</h1>
        <p>Becoming a coding ninja with the fastest-<br />growing Javascript framework</p>
        <button>Awesome!</button>
      </div>
    </div>
  </div>
  <div class="uniqueness">
    <div class="uniqueness-container">
      <img src="@/images/app-dev.png" alt="vue-logo" />
      <h3>Performant</h3>
      <p>
        Truly reactive, compiler-optimized rendering system that rarely requires manual
        optimization.
      </p>
    </div>
    <div class="uniqueness-container">
      <img src="@/images/web-dev.png" alt="vue-logo" />
      <h3>Approachable</h3>
      <p>
        Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class
        documentation.
      </p>
    </div>
    <div class="uniqueness-container">
      <img src="@/images/seo-image.png" alt="vue-logo" />
      <h3>Versatile</h3>
      <p>
        A rich, incrementally adoptable ecosystem that scales between a library and a full-featured
        framework.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  height: 100vh;
  width: 100%;
  font-family: sans-serif;
}
.wrapper {
  padding: 0 70px;
  margin-top: 20px;
}
header {
  display: flex;
  justify-content: space-between;
}
.logo-container img {
  width: 35px;
  height: 38px;
}
.hamburger-container img {
  width: 20px;
  height: 22px;
}
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.hero img {
  width: 129px;
  height: 129px;
}
.hero h1 {
  font-size: 80px;
  padding: 0;
  margin: 0;
}
.hero p {
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
}
.hero button {
  padding: 15px;
  background: #34495e;
  width: 121;
  height: 31;
  border-radius: 13px;
  color: #fff;
  border: none;
  font-size: 1em;
  font-weight: bold;
}
.uniqueness {
  display: flex;
  justify-content: space-between;
  background: #39b983;
  align-items: center;
  width: 100%;
}
.uniqueness .uniqueness-container {
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.uniqueness img {
  width: 60px;
  height: 60px;
}
</style>
