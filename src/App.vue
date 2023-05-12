<script setup>
import NavBar from './components/navBarComponent.vue'
import PageHero from './components/pageHeroComponent.vue'
import BenefitSection from './components/benefitComponent.vue'
</script>

<template>
  <NavBar />
  <PageHero />
  <BenefitSection />
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap');

  body {
    font-family: 'Inter', sans-serif;
  }
</style>
