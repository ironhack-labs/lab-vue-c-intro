<script setup>
import Card from '@/components/Card.vue'
import Header from '@/components/Header.vue'
import Welcome from '@/components/Welcome.vue'
import usp1 from '@/images/USP-1.png'
import usp2 from '@/images/USP-2.png'
import usp3 from '@/images/USP-3.png'
</script>

<template>
  <div id="app">
    <Header />
    <Welcome />
    <div class="info-cards-section">
      <Card :icon="usp1" title="Performant"
        description="Truly reactive, compiler-optimized rendering system that rarely requires manual optimization." />
      <Card :icon="usp2" title="Approachable"
        description="Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation." />
      <Card :icon="usp3" title="Versatile"
        description="A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework." />
    </div>
  </div>
</template>

<style>
#app {
  color: black;
}

.info-cards-section {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  background-color: rgb(57, 185, 131);
  padding: 3rem;
}
</style>
