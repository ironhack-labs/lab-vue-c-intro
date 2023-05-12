<script>
export default {
    name: 'BenefitCard',
    props: {
        imageSource: {
            type: String,
        },
        title: {
            type: String,
        },
        text: {
            type: String,
        }
    }
}
</script>

<template>
<div>
<img :src="imageSource">
<h3>{{title}}</h3> 
<p>{{text}}</p>
</div>
</template>

<style scoped>
    div {
        text-align: center;
        width: 125px;
    }

    h3 {
        font-weight: bold;
        font-size: 1em;
        margin: 5px 0;
    }

    p {
    font-size: 12px;
    }
</style>