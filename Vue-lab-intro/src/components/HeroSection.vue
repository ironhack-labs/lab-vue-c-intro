<script setup>
const title = 'Welcome to Vue.js';
const description = 'Become a coding ninja with the fastest-growing JavaScript framework'
const buttonText = 'Awesome!'

</script>


<template>
    <section class="heroSection">
        <img class="vue-logo" src="../images/logo-vue.png" alt="Vue logo">
        <div class="heroText">
            <h1>{{ title }}</h1>
            <h3>{{ description }}</h3>
        </div>
        <button >{{ buttonText }}</button>

    </section>
</template>


<style scoped>
.heroSection {
    margin: 50px auto;
    width: 90%;
    height: 299px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items:center;
    gap: 22px;
    position: relative;

    .vue-logo {
        width: 150px;
        height: 150px;
       margin-bottom: 0;
    }

    .heroText {
        width: 100%;
        height: 158px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;

        h1 {
        width: 100%;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 700;
        color: #2b2f30;
        font-size: 70px;
        line-height: 95px;
        letter-spacing: -2%;
        text-align: center;
        vertical-align: middle;
        padding-top: 0px;
    
        
        }

        h3 {
            width: 309px;
            height: 40px;
            font-family: Inter;
            font-weight: 800;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: -2%;
            text-align: center;
            vertical-align: middle;
        }
    }

    button {
        width: 121px;
        height: 31px;
        border-radius: 13px;
        border: none;
        background-color: #34495E;
        color: white;
        font-family: Inter;
        font-weight: 800;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -2%;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
    }
}
</style>