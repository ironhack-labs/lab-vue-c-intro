<script>
import BenefitCard from './benefitCardComponent.vue'
export default {
    components: {
        BenefitCard
    },
    data() 
    {
        return {
            items:[
                {   
                    image:'1.png',
                    title: 'Performant',
                    text: 'Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.'
                }, 
                { 
                    image:'2.png',
                    title: 'Approachable',
                    text: 'Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.'
                }, 
                { 
                    image:'3.png',
                    title: 'Versatile',
                    text: 'A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.'}, 
            ]
        }
    }
}
</script>

<template>
    <div id="bodyBenefits">
        <BenefitCard 
        v-for="item in items"
        :key="item.id"
        :imageSource="'/src/assets/USP-' + item.image"
        :title="item.title"
        :text="item.text"
        />
    </div>

</template>

<style scoped>
#bodyBenefits {
    background-color: #39B983;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2em 2em;
    margin: 2em auto;
}

div {
    text-align: center;
}
</style>