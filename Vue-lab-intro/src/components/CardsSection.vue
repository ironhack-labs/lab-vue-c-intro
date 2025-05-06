<script setup>

import card1 from '../images/seo.png';
import card2 from '../images/web-development.png';
import card3 from '../images/app-development.png';



const cards = [
    {
        id: 1,
        icon: card1,
        title: 'Performant',
        description: 'Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.'
    },
    {
        id: 2,
        icon: card2,
        title: 'Approachable',
        description: 'Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.'
    },
    {
        id: 3,
        icon: card3,
        title: 'Versatile',
        description: 'A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.'
    },
]

</script>


<template>

    <section class="cardSection">
        <div v-for="card of cards" :key="card.id" class="cardItem">
            
                    <img :src="card.icon">
                    <h3>{{ card.title }}</h3>
                    <p>{{ card.description }}</p>
          
        </div>
        
    </section>

</template>


<style scoped>
.cardSection {
    width: 100%;
    height: 312px;
    margin: 65px 0 41px;
    padding: 50px 10px 51px;
    background-color: #39B983;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0px;

    .cardItem {
        width: auto;
        max-width: 125px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;

        img {
            width: 60px;
            height: 60px;
        }

        h3 {
            font-family: Inter;
            font-weight: 700;
            font-size: 16px;
            line-height: 95px;
            letter-spacing: -2%;
            text-align: center;
            vertical-align: middle;
            position: absolute; 
            top: 35px;
        }

        p {
            font-family: Inria Sans;
            font-weight: 400;
            font-size: 12px;
            line-height: 17px;
            letter-spacing: -2%;
            text-align: center;
            vertical-align: middle;
            width: 125px;
            height: 91px;
        }
    }
}

</style>