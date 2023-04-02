<template>
  <NavBar />
  <main>
    <section class="mainSection" >
      <img class="vueLogo" src="./assets/Vue_logo.png" alt="vue logo" />
      <h1 class="header">Welcome to Vue.js</h1>
      <p class="underHeader">Become a coding ninja with the fastest-growing JavaScript framework</p>
      <button class="btn" @click="sayHello()">Awesome!</button>
    </section>
  </main>
  <section>
    <GreenSection/>
  </section>
</template>

<script>
import NavBar from './components/NavBar.vue'
import GreenSection from './components/GreenSection.vue'

export default {
  name: 'App',
  data() {
    return {
      mainSection: {
      }
    }
  },
  components: {
    NavBar,
    GreenSection,
  },
  methods: {
    sayHello() {
      alert('Vue cuesta pero mola!')
    }
  }
}

</script>



<style scoped>
.mainSection {
  display: flex;
  align-items: center;
  height: 60vh;
}
.vueLogo {
  position: absolute;
  width: 129px;
  height: 129px;
  left: 235px;
  top: 86px;
}
.header {
  position: absolute;
  width: 456px;
  height: 158px;
  left: 72px;
  top: 174px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 95px;
  /* or 190% */

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: -0.02em;

  color: #2b2f30;
}
.underHeader {
  position: absolute;
  width: 309px;
  height: 40px;
  left: 145px;
  top: 292px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;

  color: #000000;
}
.btn {
  position: absolute;
  width: 121px;
  height: 31px;
  left: 239px;
  top: 354px;

  background: #34495e;
  border-radius: 13px;
}
</style>
