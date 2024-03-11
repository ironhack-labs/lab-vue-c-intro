<template>
    <nav>
        <img class="logo" src="@/assets/images/Ironhack_logo.svg" alt="vue-logo">
        <img src="@/assets/images/Burger_menu.png" alt="menu" class="menu">
    </nav>
</template>

<style scoped>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 540px;
        height: 38px;
        margin: 20px 30px;
    }
    .logo {
        width: 35px;
        height: 38px;
    }
</style>