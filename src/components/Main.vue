<script setup>
const props = defineProps({
  name: "Main",
});
</script>

<template>
  <main>
    <section>
      <div class="vuelogo"></div>
    </section>
    <div>
      <h1>Welcome to Vue.Js</h1>
      <p>Become a coding ninja with the fastest-growing JavaScript framework</p>
    </div>
    <section>
      <div class="element">Awesome!</div>
    </section>
  </main>
</template>

<style scoped>
main {
  font-family: inter;
  font-weight: bold;
}

.vuelogo {
  background-image: url("src/assets/logo.svg");
  background-repeat: no-repeat;
  width: 129px;
  height: 129px;
  margin: 40px auto;
}

h1 {
  font-size: 50px;
  color: #2b2f30;
  line-height: 95px;
  text-align: center;
  margin-bottom: 24px;
}

p {
  font-size: 14px;
  color: #000000;
  text-align: center;
  letter-spacing: 1px;
  margin: 0 auto;
  width: 310px;
  height: 40pxEu;
}

.element {
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  width: 120px;
  height: 30px;
  margin: 20px auto 65px;
  border-radius: 13px;
  background-color: #34495e;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
}
</style>
