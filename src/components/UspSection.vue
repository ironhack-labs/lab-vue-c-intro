<script setup></script>

<template>
  <section id="usp">
    <div class="container">
      <img class="container-image" src="@/images/USP-1.svg" />
      <h2 class="container-title">Performant</h2>
      <p class="container-text">
        Truly reactive, compiler-optimized rendering system that rarely requires manual
        optimization.
      </p>
    </div>
    <div class="container">
      <img class="container-image" src="@/images/USP-2.svg" />
      <h2 class="container-title">Approachable</h2>
      <p class="container-text">
        Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class
        documentation.
      </p>
    </div>
    <div class="container">
      <img class="container-image" src="@/images/USP-3.svg" />
      <h2 class="container-title">Versatile</h2>
      <p class="container-text">
        A rich, incrementally adoptable ecosystem that scales between a library and a full-featured
        framework.
      </p>
    </div>
  </section>
</template>

<style scoped>
#usp {
  background-color: var(--vt-c-green);
  display: flex;
  align-items: center;
  margin-top: 70px;
  width: 100%;
  height: 312px;
  box-sizing: border-box;
}
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 25px;
}
.container-image{
    width: 60px;
    height: 60px;
}
.container-title{
    font-size: 16px;
    font-weight: 700;
    line-height: 65px;
    text-align: center;
}
.container-text{
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    
}
</style>
