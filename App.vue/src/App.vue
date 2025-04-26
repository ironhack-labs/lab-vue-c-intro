<template>
  <div id="app">
    <Header />
    <Hero />
    <Features />
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Headeer.vue';
  import Hero from './components/Hero.vue';
  import Features from './components/Features.vue';

  export default {
    components: {
      Header,
      Hero,
      Features
    }
  };
</script>

<style>
#app {
  margin: 0px;
  padding: 0px;
  background: white;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  align-self: center;
}
body {
  font-family: Arial, sans-serif;
  margin: 0px;
  padding: 0px;
  background: white;
  width: 600px;
}

header {
  width: 100%;
  background: white;
}

.hero, .features {
  flex-grow: 1;
}


</style>
