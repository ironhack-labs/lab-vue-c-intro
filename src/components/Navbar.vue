<script setup>
const props = defineProps({
  name: "Navbar",
});
</script>

<template>
  <div id="app">
    <nav class="navbar">
      <div class="logo"></div>
      <div class="menu"></div>
    </nav>
  </div>
</template>

<style scoped>

nav {
    width: 100%;
}

.navbar {
  display: flex;
  justify-content: space-between;
  width: 540px;
  height: 38px;
  margin: 0 auto;
}

.logo {
  background-image: url("src/assets/Ironhack_logo.png");
  background-repeat: no-repeat;
  width: 35px;
  height: 38px;
}

.menu {
  background-image: url("src/assets/Burger_menu.png");
  background-repeat: no-repeat;
  width: 22px;
  height: 20px;
}
</style>
