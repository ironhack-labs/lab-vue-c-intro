<script setup>

</script>

<template>
  <nav>
    <img src="/src/assets/images/Ironhack_logo.png">
    <ul>
      <li></li>
      <li></li>
    </ul>
  </nav>
</template>

<style scoped>

  nav{

    height: 150px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding-right: 50px;
    padding-left: 50px;
    padding-top: 50px;
    padding-bottom: 50px;


  }

  nav img{

    width: 60px;
    height: 60px;
   
  }

  nav ul{

    background-image: url('/src/assets/images/Burger_menu.png');
  background-repeat: no-repeat;
  background-size: 30px;
  min-width: 30px;  /* Asegura que el ul tenga ancho suficiente para mostrar el fondo */
  min-height: 30px;
  list-style: none;
    
    
  }



</style>
