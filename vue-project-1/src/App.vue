<script setup>
import NavBarComponent from './components/NavBarComponent.vue';
import HomeComponent from './components/HomeComponent.vue'
import FeaturesComponent from './components/FeaturesComponent.vue'
</script>

<template>
  <main>
    <div id="app">
      <NavBarComponent></NavBarComponent>
      <HomeComponent></HomeComponent>
      <FeaturesComponent></FeaturesComponent>
    </div>
  </main>
</template>

<style scoped>

#app{

  width: 100%;
  height: 100vh;  
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 50px;
  justify-content: space-between;

}

</style>
