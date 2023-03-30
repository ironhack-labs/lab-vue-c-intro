<template>
    <main>
        <section>
            <div class="vuelogo">                
            </div>
        </section>
        <div>
            <h1>Welcome to Vue.Js</h1>
            <p>Become a coding ninja with the fastest-growing JavaScript framework</p>
            <button></button>
        </div>
        <section>
            <div class="awesome-element">Awesome!</div>
        </section>

    </main>

</template>

<style scoped>

main {
    font-family: inter;
    font-weight: bold;
}

.vuelogo {
    background-image: url("src/assets/logo.svg");
    background-repeat: no-repeat;
    width: 129px;
    height: 129px;
    margin-top: 28px;
    margin-bottom: 50px;
}

h1 {
    font-size: 50px;
    color: #2B2F30;
    line-height: 95px;
    text-align: center;
    margin-bottom: 24px;
}

p {
    font-size: 14px;
    color: #000000;
    text-align: center;
    letter-spacing: -0.02em;
    margin-bottom: 27px;
}

.aewsome-element {
    font-size: 14px;
    text-align: center;
}

</style>