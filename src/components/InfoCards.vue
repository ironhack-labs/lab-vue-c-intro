<template>
    <div id="card" v-for="card in cards" :key="card.index">
        <img src="../assets/USP-1.png">
        <!-- <img :src="card.image" :alt="card.title" /> -->
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            cards: [
                {
                    index: '0',
                    image: "../assets/USP-1.png",
                    title: 'Performant',
                    description: 'Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.'
                },
                {
                    index: '1',
                    image: '../assets/USP-2.png',
                    title: 'Approachable',
                    description: 'Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.',
                },
                {
                    index: '2',
                    image: '../assets/USP-3.png',
                    title: 'Versatile',
                    description: 'A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.',
                },
            ],
        }
    }
}
</script>


<style scoped>
#card {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* max-width: 60px; */
    /* padding: 10px 0px; */
    margin: 20px;
    justify-items: center;
    gap: 20px;
}

img {
    height: 60px;
}

h3 {
    font-weight: 700;
    font-size: 16px;
    color: black;
}

p {
    font-weight: 400;
    font-size: 12px;
    color: #000;
    text-align: center;
}
</style>

    