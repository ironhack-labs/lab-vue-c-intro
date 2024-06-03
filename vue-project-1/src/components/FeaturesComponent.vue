<template>
  <section id="features">
    <div id="features-wrapper">
      <div class="feature-card">
        <img src="/src/assets/images/USP-1.png">
        <h3>Performant</h3>
        <p>Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.</p>
      </div>
      <div class="feature-card">
        <img src="/src/assets/images/USP-2.png">
        <h3>Approachable</h3>
        <p>Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.</p>
      </div>
      <div class="feature-card">
        <img src="/src/assets/images/USP-3.png">
        <h3>Versatile</h3>
        <p>A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>


#features{
  background-color: #39B983;
}

#features-wrapper{
  display: flex;
  flex-direction: row;
  max-width: 1330px;
  gap: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.feature-card{ 
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  align-items: center;
  align-self: center;
  gap: 15px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}

@media (max-width:780px) {
  #features-wrapper{
  display: flex;
  flex-direction: column;
  max-width: 1330px;
  padding-left: 50px;
  padding-right: 50px;
}

}


</style>
