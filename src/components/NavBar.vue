<template>
  <nav>
    <img class="ironHackLogo" src="../images/Ironhack_logo.png" alt="" />
    <img class="burgerMenuLogo" src="../images/Burger_menu.svg" alt="" />
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 30px;
}
.ironHackLogo {
  width: 35px;
  height: 38px;
}
.burgerMenuLogo {
  width: 22px;
  height: 20px;
}
</style>
