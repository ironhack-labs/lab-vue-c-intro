<script setup>
    import InfoArticle from "@/components/InfoArticle.vue";

</script>

<template>
  <nav>
    <img src='@/images/Ironhack_logo.png'>
    <img src='@/images/Burger_menu.png' id="menu-icon">
  </nav>

  <section id="hero-section">
    <img src='@/images/logo.svg'>
    <h1>Welcome to Vue.js</h1>
    <h3>Become a coding ninja with the fastest-growing JavaScript framework</h3>
    <button>Awesome!</button>
  </section>

  <section id="articles-section">
    <InfoArticle imagePath='@/images/USP-1.png' title="Performant" content="Truly reactive, compiler-optimized rendering system that rarely requires manual optimization."/>
    <InfoArticle imagePath='@/images/USP-2.png' title="Approachable" content="Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation."/>
    <InfoArticle imagePath='@/images/USP-3.png' title="Versatile" content="A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework."/>
  </section>
  

</template>

<style scoped>
nav {
  height: 38px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#menu-icon {
  max-width: 22px;
  max-height: 20px;
  width: 100%;
  height: 100%;
}

#hero-section {
  height: 299px;
  margin-left: 72px;
  margin-right: 72px;
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

#hero-section img {
  max-height: 129px;
  max-width: 129px;
  height: 100%;
  width: 100%;
}

h1 {
  font-weight: 800;
  font-size: 49px;
  line-height: 45px;
  color: var(--color-h1)
}

h3 {
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  max-width: 309px;
  text-align: center;
}

#articles-section {
  height: 312px;
  margin-top: 65px;
  margin-bottom: 41px;
  padding-top: 59px;
  padding-left: 72px;
  padding-right: 72px;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-background-section);
}

</style>
