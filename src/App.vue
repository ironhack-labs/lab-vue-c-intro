<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header },
  name: "App",
};
</script>

<template>
  <Header />
  <div id="app">
    <img src="@/images/vue-logo.png" alt="vuelogo" class="vue-logo" />
    <h1>Welcome to Vue.js</h1>
    <h3 class="h3-intro">
      Become a coding ninja with the fatest-growing JavaScript framework
    </h3>
    <p class="btn-text-intro">Awesome!</p>
  </div>
  <div class="usp-container">
    <section class="performant-section">
      <img src="@/images/perform.png" alt="perform-img" />
      <h2>Performant</h2>
      <p>
        Truly reactive, compiler-optimized rendering system that rarely requires
        manual optimization.
      </p>
    </section>
    <section class="approachable-section">
      <img src="@/images/approach.png" alt="approach-img" />
      <h2>Approachable</h2>
      <p>
        Builds on top of standard HTML, CSS and JavaScript with intuitive API
        and world-class documentation.
      </p>
    </section>
    <section class="versatile-section">
      <img src="@/images/vers.png" alt="vers-img" />
      <h2>Versatile</h2>
      <p>
        A rich, incrementally adoptable ecosystem that scales between a library
        and a full-featured framework.
      </p>
    </section>
  </div>
</template>



<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}
.vue-logo {
  width: 129px;
  height: 129px;
}
h1 {
  font-weight: 800;
  font-size: 50px;
  color: #2b2f30;
}
h3 {
  font-weight: 800;
  font-size: 14px;
  color: #000000;
}
.h3-intro {
  width: 309px;
  height: 40px;
  text-align: center;
}
.btn-text-intro {
  font-weight: 800;
  font-size: 14px;
  background-color: #34495e;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 15px;
  display: inline-block;
}
.usp-container {
  width: 600px;
  height: 312px;
  top: 450px;
  background-color: #39b983;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.usp-container img {
  width: 60px;
  height: auto;
  display: block;
  margin: 10px auto;
}
.usp-container h2 {
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #000000;
}
.usp-container p {
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #000000;
}

.performant-section, .approachable-section, .versatile-section{
  margin: 10px auto;
  padding: 10px;
}
</style>