<script setup>
import Usp from '@/components/Usp.vue';
const usps = [
    {
        title: "Performant",
        description: "Truly reactive, compiler-optimized rendering system that rarely requires manual optimization."
    },
    {
        title: "Approachable",
        description: "Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation."
    },
    {
        title: "Versatile",
        description: "A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework."
    }
]

</script>

<template>
    <div>
        <Usp v-for="(usp, index) in usps" :key="usp.title" :src="`/src/assets/images/USP-${index+1}.svg`"
            :title="usp.title" :text="usp.description" />
    </div>
</template>

<style scoped>
div {
    margin-top: 65px 0 300px;
    display: flex;
    justify-content: space-around;
    height: 312px;
    margin-bottom: 41px;
    background-color: #39B983;
}
</style>