<template>
  <header>
    <navBar />
  </header>

  <main>
    <section class="welcomeSection">
      <img class="vueLogo" src="../src/assets/Images/logo.svg" alt="vueLogo">
      <h1>Welcome to Vue.js</h1>
      <h4>Become a coding ninja with the fastest-growing JavaScript framework</h4>
      <button >Awesome!</button>
    </section>

    <section class="secctionCards">
      <div>
        <img src="./assets/Images/USP-1.svg" alt="ups1Logo">
        <h3>Performant</h3>
        <p>Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.</p>
      </div>
      <div>
        <img src="./assets/Images/USP-2.svg" alt="ups2Logo">
        <h3>Approachable</h3>
        <p>Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.</p>
      </div>
      <div>
        <img src="./assets/Images/USP-3.svg" alt="ups3Logo">
        <h3>Versatile</h3>
        <p>A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
      </div>
    </section>
  </main>
</template>


<script >
import navBar from './components/navBar.vue'
export default {
  name: "App",
  components: {
  navBar
  }
}
</script>


<style scoped>
#app {
}
header {
  margin: 20px 30px;
}
.vueLogo {
  width: 129px;
  height: 129px;
}
button {
  background-color: #34495E;
  color: #FFFFFF;
  border-radius: 13px;
  height: 31px;
  width: 121px;
  border: none;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 65px;
}
h4 {
  width: 309px;
  max-width: 100%;
  font-size: 14px;
  font-weight: 800;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #000000;
  margin-bottom: 22px;
}
h1 {
  font-size: 50px;
  font-weight: 800;
  line-height: 95px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #2B2F30;
  margin-top: 28px;
}
.welcomeSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.secctionCards {
  width: 600px;
  height: 312px;
  display: flex;
  max-width: 100%;
  justify-content: space-evenly;
  align-items: center;
  background-color: #39B983;
  margin-bottom: 41px;
}
.secctionCards div p {
  height: 91px;
  width: 125px;
  max-width: 100%;
  font-family: Inria Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: -0.02em;
  text-align: center;
}

.secctionCards div {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
}
.secctionCards div h3 {
  margin: 15px 0px;
}
</style>
