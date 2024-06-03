<script setup>

</script>

<template>
  <section id="home-content">
    <img src="/src/assets/images/Vue_logo.png">
    <h1>Welcome to Vue.js</h1>
    <p>Become a coding ninja with the fastest-growing JavaScript framework</p>
    <button>Awesome</button>
  </section>
</template>

<style scoped>

 #home-content{

    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-self: center;
    gap: 30px;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;

  }

  #home-content img {

    width: 250px;

  }

#home-content h1{

    font-size: 50px;
    font-weight: bolder;

}

#home-content p{

font-size: 14px;
font-weight: bold;

}

#home-content button{

font-size: 14px;
font-weight: bolder;
background-color: #34495E;
color: white;
padding: 15px;
border-radius: 20px;
border: 0;
width: 150px;

}

@media (max-width:780px) {
  #home-content h1{
  font-size: 36px;
}

#home-content p{
  font-size: 13px;
  padding-left: 20px;
  padding-right: 20px;
}

#home-content img {

width: 150px;

}


}



</style>

