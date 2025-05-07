<template>
  <div id="app">
    <header class="main-header">
      <img src="/Ironhack_logo.png" alt="Ironhack Logo" class="logo-ironhack" />
      <img src="/Burger_menu.png" alt="Menu Icon" class="menu-icon" />
    </header>

    <div class="container">
      <img src="/Vue_logo.png" alt="Vue Logo" class="logo" />
      <h1>Welcome to Vue.js</h1>
      <h2>
        Become a coding ninja with the fastest-<br />
        growing JavaScript framework
      </h2>
      <button>Awesome!</button>
    </div>

    <div class="info">
      <div class="performant">
        <img src="/USP-1.png" alt="image" class="info-image" />
        <h3>Performant</h3>
        <p>
          Truly reactive, compiler-optimized rendering system <br />
          that rarely requires manual optimization.
        </p>
      </div>
      <div class="approchable">
        <img src="/USP-2.png" alt="image" class="info-image" />
        <h3>Approachable</h3>
        <p>
          Builds on top of standard HTML,<br />
          CSS and JavaScript with intuitive API and <br />
          world-class documentation.
        </p>
      </div>
      <div class="Versatile">
        <img src="/USP-3.png" alt="image" class="info-image" />
        <h3>Versatile</h3>
        <p>
          A rich, incrementally adoptable ecosystem<br />
          that scales between a library and <br />a full-featured framework.
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
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  max-width: 1200px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #fff;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}

/* Header */
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
}

.logo-ironhack,
.menu-icon {
  width: 30px;
  height: auto;
  margin: 0px;
}

/* Container */
.container {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
}

.logo {
  width: 150px;
  margin-bottom: 1rem;
}

h1 {
  font-size: 50px;
  color: #34495e;
  margin: 0.5rem 0;
  font-weight: 800;
}

h2 {
  font-size: 14px;
  color: #34495e;
  margin-bottom: 1.5rem;
  font-weight: 800;
}

button {
  background-color: #34495e;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #369f6b;
}

.info {
  background-color: #369f6b;
  color: #000000;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 50px;
}
.info-image {
  align-content: center;
}
h3 {
  font-size: 1rem;
  text-align: center;
}
p {
  font-size: 12px;
  font-weight: 400;
  text-align: center;
}
.performant {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.approchable {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.Versatile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
