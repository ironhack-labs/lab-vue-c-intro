<template>
  <div id="app">
    <!-- TOP BAR -->
    <header class="topbar">
      <img class="ironhack" src="./images/ironhack-logo.png" alt="Ironhack logo" />
      <img class="menu" src="./images/menu-top.png" alt="menu icon" />
    </header>

    <!-- HERO -->
    <main class="hero">
      <img class="vue-logo" src="./images/vue-logo.png" alt="Vue logo" />

      <h1 class="title">
        Welcome to <span>Vue.js</span>
      </h1>

      <p class="subtitle">
        Become a coding ninja with the fastest-<br />
        growing JavaScript framework
      </p>

      <button class="cta">Awesome!</button>
    </main>

    <!-- FEATURES -->
    <section class="features">
      <article class="feature">
        <img src="./images/performant.png" alt="performant icon" />
        <h2>Performant</h2>
        <p>
          Truly reactive, compiler-optimized rendering system that rarely
          requires manual optimization.
        </p>
      </article>

      <article class="feature">
        <img src="./images/approachable.png" alt="approachable icon" />
        <h2>Approachable</h2>
        <p>
          Builds on top of standard HTML, CSS and JavaScript with intuitive API
          and world-class documentation.
        </p>
      </article>

      <article class="feature">
        <img src="./images/versatile.png" alt="versatile icon" />
        <h2>Versatile</h2>
        <p>
          A rich, incrementally adoptable ecosystem that scales between a
          library and a full-featured framework.
        </p>
      </article>
    </section>
  </div>
</template>

<script setup>
// No logic required for this lab
</script>

<style>
/* Reset */
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, Arial, sans-serif; background: white; color: #2c2f30; }

#app {
  min-height: 100vh;
  position: relative;
}

/* Top bar */
.topbar {
  position: absolute;
  top: 24px;
  left: 24px;
  right: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.ironhack { width: 70px; }
.menu { width: 34px; }

/* Hero */
.hero {
  min-height: 78vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding-top: 40px;
  text-align: center;
}

.vue-logo {
  width: 170px;
  margin-bottom: 10px;
}

.title {
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 800;
}

.subtitle {
  font-size: clamp(16px, 2vw, 22px);
  font-weight: 600;
  color: #111;
  line-height: 1.4;
  margin-top: 6px;
}

.cta {
  margin-top: 10px;
  background: #38495c;
  color: white;
  border: none;
  padding: 12px 60px;
  border-radius: 999px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}

/* Features */
.features {
  background: #61b687;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 70px 60px 90px;
  text-align: center;
}

.feature img {
  width: 85px;
  margin-bottom: 16px;
}

.feature h2 {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 12px;
  color: #0b0b0b;
}

.feature p {
  font-size: 16px;
  line-height: 1.6;
  color: #0b0b0b;
  max-width: 260px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 900px) {
  .features {
    grid-template-columns: 1fr;
    padding: 50px 30px 70px;
  }
  .topbar { top: 16px; left: 16px; right: 16px; }
}
</style>