<template>
    <section class="section__featureContainer">
        <div>
            <img class="Img__feature" :src="featureImage1">
            <h3>Performant</h3>
            <p>Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.</p>
        </div>
        <div>
            <img class="Img__feature" :src="featureImage2">
            <h3>Approachable</h3>
            <p>Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.</p>
        </div>
        <div>
            <img class="Img__feature" :src="featureImage3">
            <h3>Versatile</h3>
            <p>A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
        </div>
    </section>
</template>


<script setup>
const featureImage1 = "/src/assets/USP-1.svg"
const featureImage2 = "/src/assets/USP-2.svg"
const featureImage3 = "/src/assets/USP-3.svg"
</script>

<style scoped>
    .section__featureContainer {
        background-color: rgba(57, 185, 131, 1);
        color: black;
        display: flex;
        padding: 56px;
        height: 312px;
    }
    .section__featureContainer div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:space-evenly;
        text-align: center;
        height: 100%;
    }
    img {
        width: 60px;
        height: auto;
    }
    p {
        margin-top: -20px;
        padding: 0px 10px;
    }
</style>