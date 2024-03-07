<script setup>

const upsItems = [{
    src: "/src/images/ups1.png",
    title: "Performant",
    description: "Truly reactive, compiler-optimized rendering system that rarely requires manual optimization."
},
{
    src: "/src/images/ups2.png",
    title: "Approachable",
    description: "Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation."
},
{
    src: "/src/images/ups3.png",
    title: "Versatile",
    description: "A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework."
}];

</script>

<template>
    <section class="UPS-section">
        <div class="UPS-section-container">
            <div class="UPS-section-card" v-for="(item, index) in upsItems" :key="index">
                <div class="UPS-img-container"><img :src="item.src" alt=""></div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
            </div>
        </div>
    </section>
</template>

<style scope>
.UPS-section {
    width: 100%;
    margin-top: 66px;
    /* border: 1px solid blue; */
}

.UPS-section-container {
    width: 600px;
    height: 312px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #39B983;
    /* border: 1px solid blue; */
}

.UPS-section-card {
    min-height: 245px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    /* border: 1px solid purple; */
}

.UPS-img-container,
.UPS-img-container img {
    width: 60px;
    height: 60px;
}

.UPS-section-card h3 {
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    margin: 22px 0;
}

.UPS-section-card p {
    width: 125px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
}
</style>