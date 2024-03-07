<script setup>
import NavVar from '@/components/NavVar.vue'
import IntroSection from '@/components/IntroSection.vue'
import UspSection from '@/components/UspSection.vue'
</script>

<template>
  <NavVar />
  <IntroSection />
  <UspSection />
</template>

<style scoped>
:host {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
