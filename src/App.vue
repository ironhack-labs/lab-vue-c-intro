<template>
  <navBar />
  <section class="section1">
  <img src='./images/Vue_logo.png' alt="vueLogo">
  <h1>Welcome to Vue.js</h1>
  <h5>Become a coding ninja with the fastest<br> 
    growing JavaScript framework</h5>
  <a href="#" class="greenBtn">Awesome!</a>
  </section>
  <section class="section2">
  <eachArticle v-for="article in arrArticles" :key="article.id" 
    :title="article.title"
    :icon="article.icon"
    :description="article.description"
  ></eachArticle>
  </section>
</template>

<script>
import navBar from './components/navBar.vue'
import eachArticle from './components/eachArticle.vue'

export default {

  name: "App",
  components: {
        navBar,
        eachArticle,
      },
  data(){
    return {
      arrArticles: [{
        title: 'Performat',
        icon: '/src/images/USP-1.png',
        description: 'Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.',
      },
      {
        title: 'Approchable',
        icon: '/src/images/USP-2.png',
        description: 'Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.',
      },
      {
        title: 'Versatile',
        icon: '/src/images/USP-3.png',
        description: 'A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.',
      },

      ]
    }
  }
}

</script>

<style scoped>
  #app {
  }
  .section1{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5rem;
  }
  .section1 img{
    height: 13rem;
  }
  .section1 h5{
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .greenBtn{
    padding: 0.5rem 1rem;
    color: white;
    text-decoration: none;
    background-color: #34495E;
    border-radius: 1rem;
    font-weight: 700;
    margin-top: 1rem;
  }
  
  .section2{
    width: 100%;
    height: auto;
    background-color: #39B983;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem;
  }
</style>
