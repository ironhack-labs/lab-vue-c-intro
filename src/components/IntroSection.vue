<template>
  <div id="intro">
    <img class="vue-logo" src="@/assets/logo.svg" />
    <h1 class="intro-title">Welcome to Vue.js</h1>
    <div class="subtitle">
      <h2 class="intro-subtitle">
        Become a coding ninja with the fastest-growing JavaScript framework
      </h2>
    </div>
    <button>Awesome!</button>
  </div>
</template>

<style scoped>
#intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 65px;
}

.vue-logo {
  width: 129px;
  height: 129px;
}

.intro-title {
  font-size: 50px;
  font-weight: 800;
  line-height: 95px;
}

.subtitle {
  width: 309px;
  height: 40px;
}

.intro-subtitle {
  font-size: 14px;
  font-weight: 800;
  line-height: 20px;
  text-align: center;
}

button {
  background-color: var(--bgcolor-button);
  color: var(--vt-c-white);
  width: var(--with-button);
  height: var(--heigth-button);
  border: none;
  border-radius: 13px;
  margin-top: 30px;
  font-size: 14px;
  font-weight: 800;
  line-height: 20px;
  text-align: center;
}
</style>
