<script></script>

<template>
  <nav>
    <img src="@/assets/images/Ironhack_logo.svg" alt="Ironhack logo" />
    <img src="@/assets/images/Burger_menu.svg" alt="" />
  </nav>
  <main>
    <section id="hero">
      <img src="@/assets/images/Vue_logo.svg" alt="Vue logo" />
      <h1>Welcome to Vue.js</h1>
      <p>Become a coding ninja with the fastest-growing JavaScript framework</p>
      <button>Awesome!</button>
    </section>
    <section id="features">
      <div id="performant" class="card">
        <img src="@/assets/images/USP-1.svg" alt="Performant icon" />
        <h2>Performant</h2>
        <p>Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.</p>
        </div>
        <div id="approachable" class="card">
          <img src="@/assets/images/USP-2.svg" alt="Approachable icon" />
          <h2>Approachable</h2>
        <p>Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.</p>
        </div>
        <div id="versatile" class="card">
          <img src="@/assets/images/USP-3.svg" alt="Versatile icon" />
          <h2>Versatile</h2>
          <p>A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
        </div>
    </section>
</main>
</template>

<style scoped>
  * {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 30px 0 30px;
  }

  #hero {
    width: 456px;
    height: 299px;
    text-align: center;
  }

  #hero img {
    width: 129px;
    height: 129px;
  }

  #hero p {
    width: 309px;
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
  }

  #features {
    background-color: var(--color-primary-green);
    display: flex;
    flex-direction: row;
    top: 450;
    height: 312px;
    padding-top: 59px;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .card img {
    width: 60px;
    height: 60px;
  }
</style>
