<template>
    <section class="features">
      <div v-for="feature in features" :key="feature.id" class="feature">
        <img :src="feature.image" :alt="feature.title" />
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </section>
  </template>
  
<script>
  export default {
    data() {
      return {
        features: [
          { id: 1, title: "Performant", description: "Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.", image: "/src/images/USP-1.png" },
          { id: 2, title: "Approachable", description: "Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.", image: "/src/images/USP-2.png" },
          { id: 3, title: "Versatile", description: "A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.", image: "/src/images/USP-3.png" }
        ]
      };
    }
  };
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
.features {
  display: flex;
  justify-content: space-around;
  padding: 41px;
  width: 100%;
  background: #42b883;
  height: 312px;
}

.feature {
  text-align: center;
  max-width: 300px;
  color: black; /* Ensure text is visible */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  align-self: center;
  align-items: center;
  
}

.feature img {
    width: 60px;
    margin-bottom: 10px;
  }

.feature h3 {
    font-family: Inter;
    font-size: 16px;
    line-height: 50px;
    letter-spacing: -2%;
    font-weight: 700;
}

.feature p {
    font-family: Inria Sans;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: -2%;
    font-weight: 400;
    width: 125px;
}
</style>
