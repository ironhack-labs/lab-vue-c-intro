<script setup>
   
const props = defineProps({
    name: "Navbar",

})

</script>

<template>
    <nav class="navbar">
        <div class="logo"></div>
        <div class="menu"></div>
    </nav>
    </template>
   
    <style scoped>
    
    .navbar {
        display: flex;
        justify-content: space-between;
    }
    .logo {
        background-image: url('src/assets/Ironhack_logo.png');
        background-repeat: no-repeat;
        width: 35px;
        height: 38px;
    }

    .menu {
        background-image: url("src/assets/Burger_menu (1).png");
        background-repeat: no-repeat;
        width: 22px;
        height: 20px;
    }
    
    </style>