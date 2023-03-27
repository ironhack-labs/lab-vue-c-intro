<template>
    <nav class="navBarContainer">
        <img class="ironLogo" :src="schoolLogo">
        <img class="burgerMenuIcon" :src="menuIcon">
    </nav>
</template>

<script setup>
    const schoolLogo = "/src/assets/Ironhack_logo.svg"
    const menuIcon = "/src/assets/Burger_menu.svg"
</script>

<style scoped>
.navBarContainer {
    display: flex;
    justify-content: space-between;
    margin: 20px 30px 28px 30px;
}

.navBarContainer .ironLogo {
    width: 35px;
}

.burgerMenu {
    width: 20px;
}
</style>