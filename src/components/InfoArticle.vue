<script setup>
    const props = defineProps({
        imagePath: String,
        title: String,
        content: String
    })
</script>

<template>
    <article>
        <img :src="imagePath"/>
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
    </article>

</template>

<style scoped>

article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 125px;
    max-height: 202px;
    width: 100%;
    height: 100%;
}

img {
    max-width: 60px;
    max-height: 60px;
    width: 100%;
    height: 100%;
}

h2 {
    font-weight: 700;
    font-size: 16px;
    text-align: center;
}

p {
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
}

</style>
