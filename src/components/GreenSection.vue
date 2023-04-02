<template>
  <div class="greenSection">
    <CardInGreenSection :image="card1.image" :greenTitle="card1.title" :greenText="card1.text" />
    <CardInGreenSection :image="card2.image" :greenTitle="card2.title" :greenText="card2.text" />
    <CardInGreenSection :image="card3.image" :greenTitle="card3.title" :greenText="card3.text" />
  </div>
</template>

<script>
import CardInGreenSection from './CardInGreenSection.vue'

export default {
  name: 'GreenSection',
  components: {
    CardInGreenSection
  },
  data() {
    return {
      card1: {
        image: '/src/assets/USP-1.png',
        title: 'Performant',
        text: 'Truly reactive, compiled optimized rendering system that rarely requires manual optimization.'
      },
      card2: {
        image: '/src/assets/USP-2.png',
        title: 'Approachable',
        text: 'Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.'
      },
      card3: {
        image: '/src/assets/USP-3.png',
        title: 'Versatile',
        text: 'A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.'
      }
    }
  }
}
</script>

<style scoped>
.greenSection {
  background-color: #39b983;
  display: flex;
  justify-content: center;
  padding: 50px 0;
  margin-bottom: 41px;
}
</style>
