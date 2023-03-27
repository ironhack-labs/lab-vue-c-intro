<template>
    <div class="div_Hero-Container">
        <img :src="heroImage">
        <h1>Welcome to Vue.js</h1>
        <h2>Become a coding ninja with the fastest-<br>
            growing JavaScript framework
        </h2>
        <button class="btn--grey btn--rounded">Awesome!</button>
    </div>
</template>

<script setup>
const heroImage = "/src/assets/logo.svg"
</script>

<style scoped>
    .div_Hero-Container{
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        padding: 0px 65px 65px 65px;
    }
    img {
        width: 129px;
        height: auto;
        margin-bottom: 30px;
    }
    h2 {
        margin: 10px 0px 22px 0px;
    }
</style>