<script>
import NavBar from './components/NavBar.vue'
import GreyButton from './components/GreyButton.vue'
import GreenBackground from './components/GreenBackgroud.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    GreyButton,
    GreenBackground
  }
}
</script>

<template>
  <NavBar />
  <div class="vueLogo">
    <img src="./assets/logo.svg" alt="Vue logo" />
  </div>
  <div class="welcomeMessage">
    <h1>Welcome to Vue.js</h1>
    <h2>Become a coding ninja with the fastest-<br />growing JavaScript framework</h2>
  </div>
  <GreyButton />
  <GreenBackground />
</template>

<style scoped>
.vueLogo {
  width: 129px;
  height: 129px;
  margin: 8px 235px 0px 236px;
}

.welcomeMessage {
  width: 456px;
  height: 158px;
  margin: 0px 72px 0px 72px;
}
</style>
