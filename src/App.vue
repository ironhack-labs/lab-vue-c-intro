<template>
  <div id="app">
    <Navbar />
    <Main />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Main
  }
}
</script>

<style>
  #app {
    width: 1400px;
    margin: 0 auto;
  }
</style>
