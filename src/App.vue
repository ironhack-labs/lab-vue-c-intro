<template>
  <div id="app">
    <div class="container">
      <Navbar />
      <Main />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue'


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

  body {
    display: block;
  }

  @media (min-width: 1024px) {
    body {
      display: block;
      place-items: unset;
    }
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
  }

</style>

