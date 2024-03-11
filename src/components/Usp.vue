<script setup>
defineProps({
    src: String,
    title: String,
    text: String
})
</script>

<template>
    <div>
        <img :src=src alt="icon">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
    </div>
</template>

<style scoped>
    div {
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
    img {
        width: 60px;
        height: 60px;
    }
    h3 {
        font-size: calc(16px - 2%);
        font-weight: 700;
        line-height: 95px;
    }
    p {
        text-align: center;
        max-width: 125px;
        font-family: "Inria Sans";
        font-size: calc(12px - 2%);
        line-height: 17px;
        font-weight: 400;
    }


</style>