<script setup>
const logoSrc = "/src/images/32ca69811749c15427e4d31d467cab56.png";
const menuImgSrc = "/src/images/8df11198c33c1a0dd8d3f606c03702ca.png";
</script>

<template>
    <header>
        <div class="header-container">
            <div class="logo-container"><img :src="logoSrc" alt=""></div>
            <div class="menu-container"><img :src="menuImgSrc" alt=""></div>
        </div>
    </header>
</template>

<style scope>
header {
    width: 100%;
    margin: 28px 0;
    /* border: 1px solid red; */
}

.header-container {
    width: 540px;
    height: 38px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo-container,
.logo-container img {
    width: 35px;
    height: 38px;
}

.menu-container,
.menu-container img {
    width: 22px;
    height: 20px;

}
</style>