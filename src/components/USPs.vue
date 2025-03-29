<script setup>
import { reactive } from 'vue';
import image1 from '@/images/USP-1.png';
import image2 from '@/images/USP-2.png';
import image3 from '@/images/USP-3.png';

// const USPs = reactive(['usp1' , 'usp2' , 'usp3'])

const USPs = reactive([
    {
        id: 1,
        // icon: require('@/images/USP-1.png'),
        icon: image1,
        title: 'Performant',
        description: 'Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.'
    },
    {
        id: 2,
        // icon: require('@/images/USP-2.png'),
        icon: image2,
        title: 'Approachable',
        description: 'Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.'
    },
    {
        id: 3,
        // icon: require('@/images/USP-3.png'),
        icon: image3,
        title: 'Versatile',
        description: 'A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.'
    },
])

</script>


<template>

    <section class="USPsection">
        <div v-for="USP of USPs" :key="USP.id" class="USPitem">
            
                    <img :src="USP.icon">
                    <h3>{{ USP.title }}</h3>
                    <p>{{ USP.description }}</p>
          
        </div>
        
    </section>

</template>


<style scoped>
.USPsection {
    width: 100%;
    height: 312px;
    margin: 65px 0 41px;
    padding: 59px 88px 51px;
    background-color: #39B983;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    .USPitem {
        width: auto;
        max-width: 125px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;

        .img {
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
            top: 20px;
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