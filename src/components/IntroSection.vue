<script setup>
import VueLogo from '@/components/VueLogo.vue';
import AwesomeButton from '@/components/AwesomeButton.vue';
</script>

<template>
    <article>
        <VueLogo />
        <h1>Welcome to Vue.js</h1>
        <h2>Become a coding ninja with the fastest-growing JavaScript framework</h2>
        <AwesomeButton />
    </article>
</template>

<style scoped>
article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 456px;
    height: 299px;
    margin: 0 auto;
}
h1,
h2 {
    font-weight: 800;
    text-align: center;
}
h1 {
    font-size: calc(50px - 5%);
    line-height: 95px;
}
h2{
    width: 309px;
    font-size: 14px;
    line-height: 20px;
    margin: 0 auto;
}
</style>