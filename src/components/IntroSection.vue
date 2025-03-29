<script setup>
const title = 'Welcome to Vue.js';
const description = 'Become a coding ninja with the fastest-growing JavaScript framework'
const buttonText = 'Awesome!'
const awesomeAlert = (event) => {
    // OPTION 1:
    // para que NO se recargue la página: 
    // event.preventDefault(); 
    window.alert('You look as awesome as Vue today!')
}
</script>


<template>
    <section class="introSection">
        <img class="vue-logo" src="@/images/Vue_logo.png" alt="Vue logo">
        <div class="introText">
            <h1>{{ title }}</h1>
            <h3>{{ description }}</h3>
        </div>

        <!-- OPTION 2:
        para que NO se recargue la página en <script> pondríamos .preventDefault; -->
        <button @click.prevent="awesomeAlert">{{ buttonText }}</button>

        <!-- Y para parar el burbujeo en <script> pondríamos .stopPropagation; -->
        <!-- en este caso no tiene sentido porque no hay ningun evento por arriba  -->
        <!-- NI elementos padre cque incluyen eventos; -->

        <!-- <button @click.prevent.stop="awesomeAlert">{{ buttonText }}</button> -->

    </section>
</template>


<style scoped>
.introSection {
    margin: 28px auto;
    width: 456px;
    height: 299px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items:center;
    gap: 22px;
    position: relative;

    .vue-logo {
        width: 129px;
        height: 129px;
        position: absolute;
        top: 0;
    }

    .introText {
        width: 100%;
        height: 158px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;

        h1 {
        width: 100%;
        font-family: Inter;
        font-weight: 800;
        font-size: 50px;
        line-height: 95px;
        letter-spacing: -2%;
        text-align: center;
        vertical-align: middle;
        position: absolute;
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
    }
}
</style>