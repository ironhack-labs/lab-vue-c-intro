<script>
    export default {
        name: 'NavBar'
    }
</script>

<template>
  <div id="nav-bar">
   <img id="ironhack-logo" src="../images/Ironhack_logo.png" alt="Ironhack Logo">
   <img id="burger-menu" src="../images/Burger_menu.png" alt="Burger Menu">
  </div>
</template>

<style scoped>
  #nav-bar {
    margin: 20px 30px 28px;
    display: flex;
    justify-content: space-between;
  }

  #ironhack-logo {
    width: 35px;
    height: 38px;
  }

  #burger-menu {
    width: 22px;
    height: 20px;
  }
                                                                                    
</style>
