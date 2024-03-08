<script setup>
const logoIntroSrc = "/src/images/92018b13ebfdd05159b52bfe2842d0f7.png";
</script>

<template>
    <section class="intro-section">
        <div class="intro-section-container">
            <div class="intro-section-logo-container"><img :src="logoIntroSrc" alt=""></div>
            <div class="intro-section-content">
                <h1>Welcome to Vue.js</h1>
                <p>Become a coding ninja with the fastest-growing JavaScript framework</p>
            </div>
            <button class="intro-section-btn">Awesome!</button>
        </div>

    </section>
</template>

<style scope>
.intro-section {
    width: 100%;
    /* border: 1px solid green; */
}

.intro-section-container {
    width: 456px;
    height: 299px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid green; */
}

.intro-section-logo-container,
.intro-section-logo-container img {
    width: 129px;
    height: 129px;
    /* border: 1px solid yellow; */

}

.intro-section-content {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
}

.intro-section-content h1 {
    font-size: 50px;
    font-weight: bold;
}

.intro-section-content p {
    font-size: 14px;
    font-weight: bold;
    width: 309px;
    height: 40px;
    margin: 0 auto;
    line-height: 20px;
}

.intro-section-btn {
    width: 121px;
    height: 31px;
    border-radius: 13px;
    background-color: #34495E;
    border: none;
    font-size: 14px;
    color: white;
    font-weight: bold;
    margin-top: 22px;
}
</style>