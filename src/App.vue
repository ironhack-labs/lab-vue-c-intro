<template>
  <div id="app">
    <Navbar />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Main from './components/Main.vue';
import Footer from './components/fogo.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Main,
    Footer
  }
}
</script>

<style>
  #app {
    width: 600px;
    margin: 0 auto;
  }
</style>
