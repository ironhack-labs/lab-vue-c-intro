<template>
  <div id="app">
    <header>
      <div>
        <img src="../images/ironhack-logo.svg" alt="" />
      </div>
      <div>
        <img src="../images/hamburgermenu.svg" alt="" />
      </div>
    </header>

    <div class="main">
      <img src="../images/vite-icon.svg" alt="" />
      <h1>Welcome to Vue.js</h1>
      <p>
        Become a coding ninja with the <br />
        fastest-growing JavaScript framework
      </p>
      <a href="#">awesome!</a>
    </div>
    <div class="last-section">
      <div class="section">
        <img src="../images/performat.svg" alt="" />
        <h2>Performat</h2>
        <p>
          Truly reactive, compiler-optimized rendering system that rarely
          requires manual optimization.
        </p>
      </div>
      <div class="section">
        <img src="../images/approachable.svg" alt="" />
        <h2>approachable</h2>
        <p>
          Builds on top of standard HTML, CSS and JavaScript with intuitive API
          and world-class documentation.
        </p>
      </div>
      <div class="section">
        <img src="../images/versatile.svg" alt="" />
        <h2>versatile</h2>
        <p>
          A rich, incrementally adoptable ecosystem that scales between a
          library and a full-featured framework.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0;
  gap: 200px;
}
.main {
  display: grid;
  justify-items: center;
  align-content: center;
  font-size: 1.6rem;
  font-weight: 400;
  padding: 5rem;
  text-align: center;
}
.main a {
  border: none;
  border-radius: 30px;
  background-color: #34495e;
  padding: 2px 12px;
  margin: 12px;
}
.last-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: row;
  background-color: #39b983;
  padding: 2rem;
  align-content: center;
  justify-items: center;
  text-align: center;
}
.section {
  max-width: 80%;
  width: 69.1%;
  font-size: 1.1rem;
}
</style>
