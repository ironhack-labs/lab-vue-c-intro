
<template>
    <div>
        <img alt="Vue logo" class="logo" src="../assets/logo.svg" />
        <h1>Welcome to Vue.js</h1>
        <p>Become a coding ninja with the fastest-growing JavaScript framework</p>
        <a href="#">Awesome!</a>
    </div>
</template>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        align-items: middle;
        text-align: center;
        gap: 10px;
        margin: 0 auto;
    }

    img {
        width: 129px;
        margin: 0 auto;
    }

    h1 {
        font-weight: 900;
        font-size: 50px;
    }

    p {
        font-weight: bold;
    }

    a {
        background-color: #34495E;
        color:white;
        text-decoration: none;
        font-weight: bold;
        padding: 10px 20px;
        width: 121px;
        border-radius: 20px;
        box-sizing: border-box;
        margin: 0 auto;
    }
</style>