<script setup>

import { ref, reactive } from 'vue';

import Header from '@/components/Header.vue';
import IntroSection from '@/components/IntroSection.vue';
import USPsection from '@/components/USPs.vue';

</script>


<template>

  <div id="app">
    
   <Header></Header>
   <IntroSection></IntroSection>
   <USPsection></USPsection>
  
  </div>
   
</template>


<style scoped>
</style>
