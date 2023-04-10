<script></script>

<template>
  <section class="greenBackground">
    <div class="features-section">
      <img src="../images/USP-1.png" alt="performant logo" />
      <h3>Performant</h3>
      <p class="features-section-text">
        Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.
      </p>
    </div>
    <div class="features-section">
      <img src="../images/USP-2.png" alt="performant logo" />
      <h3>Performant</h3>
      <p class="features-section-text">
        Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.
      </p>
    </div>
    <div class="features-section">
      <img src="../images/USP-3.png" alt="performant logo" />
      <h3>Performant</h3>
      <p class="features-section-text">
        Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.
      </p>
    </div>
  </section>
</template>

<style scoped>
.greenBackground {
  background-color: #39b983;
  width: 600px;
  height: 312px;
  margin-bottom: 41px;
  display: flex;
  text-align: center;
  flex-direction: row;
  justify-content: space-around;
}

.features-section {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 125px;
  height: 202px;
  padding-top: 59px;
  padding-bottom: 51px;
}

.features-section img {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
}

.features-section h3 {
  width: 60px;
  height: 60px;
  margin: 0;
}

.features-section p {
  width: 125px;
  height: 91px;
}
</style>