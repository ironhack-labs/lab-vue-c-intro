<script>
  import NavBar from './components/NavBar.vue';
  import IntroSection from './components/IntroSection.vue';
  import USPs from './components/USPs.vue';
  export default {
    name: "App",
    components: {
      NavBar,
      IntroSection,
      USPs,
    }
  }
</script>

<template>
  <NavBar/>
  <IntroSection/>
  <USPs/>
</template>

<style scoped src="./assets/main.css"></style>
