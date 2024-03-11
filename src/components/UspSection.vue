<template>
  <section class="container-info">
    <div class="single-container">
      <img class="container-img" src="../images/Usp-1.svg" />
      <h2 class="container-title">Performant</h2>
      <p class="container-text">
        Truly reactive, compiler-optimized rendering system that rarely requires
        manual optimization.
      </p>
    </div>
    <div class="single-container">
      <img class="container-img" src="../images/Usp-2.svg" />
      <h2 class="container-title">Approachable</h2>
      <p class="container-text">
        Builds on top of standard HTML, CSS and JavaScript with intuitive API
        and world-class documentation.
      </p>
    </div>
    <div class="single-container">
      <img class="container-img" src="../images/Usp-3.svg" />
      <h2 class="container-title">Versatile</h2>
      <p class="container-text">
        A rich, incrementally adoptable ecosystem that scales between a library
        and a full-featured framework.
      </p>
    </div>
  </section>
</template>

<style scoped>
.container-info {
  background-color: var(--vt-c-green);
  display: flex;
  align-items: center;
  margin-top: 70px;
  width: 100%;
  height: 312px;
  box-sizing: border-box;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.single-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; 
}

.container-image {
  width: 60px;
  height: 60px;
}

.container-title {
  font-size: 16px;
  font-weight: 700;
  line-height: 65px;
  text-align: center;
  color: var(--vt-c-black);
}

.container-text {
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: var(--vt-c-black);
  margin-left: 30px;
  margin-right: 30px;
}
</style>
