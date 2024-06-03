<template>
  <div class="container">
    <nav>
      <div>
        <img :src="logoImg" alt="IronHack Logo" />
        <img :src="logoHamburgerMenuImg" alt="Hamburger Menu Logo" />
      </div>
    </nav>

    <main>
      <section>
        <img :src="logoVueImg" alt="Vue Framework Logo" :style="logoStyle" />
        <h1>{{ headerH1 }}</h1>
        <p>{{ headerParagragh }}</p>
        <button class="btn">{{ btn }}</button>
      </section>
    </main>

    <footer>
      <div v-for="(usp, index) in usps" :key="index">
        <img :src="usp.img" :alt="usp.alt" />
        <h2>{{ usp.heading }}</h2>
        <p>{{ usp.paragraph }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import logoPath from "@/images/Ironhack_logo.png";
import logoVuePath from "@/images/Vue_logo.png";
import burgerMenuPath from "@/images/Burger_menu.png";
import usp1Path from "@/images/USP-1.png";
import usp2Path from "@/images/USP-2.png";
import usp3Path from "@/images/USP-3.png";

const logoImg = ref(logoPath);
const logoVueImg = ref(logoVuePath);
const logoHamburgerMenuImg = ref(burgerMenuPath);
const logoUsp1Img = ref(usp1Path);
const logoUsp2Img = ref(usp2Path);
const logoUsp3Img = ref(usp3Path);

const logoStyle = ref({
  width: "129px",
  height: "129px",
});

const usps = ref([
  {
    img: logoUsp1Img,
    heading: "Performat",
    paragraph:
      "Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.",
    alt: "Performat Icon Logo",
  },
  {
    img: logoUsp2Img,
    heading: "Approachable",
    paragraph:
      "Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.",
    alt: "Approachable Icon Logo",
  },
  {
    img: logoUsp3Img,
    heading: "Versatile",
    paragraph:
      "A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.",
    alt: "Versatile Icon Logo",
  },
]);

const btn = ref("Awesome!");

const headerH1 = ref("Welcome to Vue.js");

const headerParagragh = ref(
  "Become a coding ninja with the fastest-growing JavaScript framework"
);
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

nav div {
  display: flex;
  justify-content: space-evenly;
  margin: 20px auto;
}

/*---------- Main --------> */
main section {
  display: flex;
  color: black;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 25px auto;
}

h1 {
  font-size: 50px;
  line-height: 95px;
  font-weight: 800;
}

main section p {
  font-weight: 800;
}

.btn {
  width: 121px;
  height: 31px;
  font-weight: 700;
  margin: 20px auto;
  border: none;
  border-radius: 13px;
  background-color: #34495e;
  color: white;
  font-size: 14px;
  cursor: pointer;
}

/*---------- Footer --------> */
footer {
  display: flex;
  min-height: 450px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  color: black;
  background: #39b983;
  margin-top: auto;
  flex-shrink: 0;
}

footer div {
  width: 300px;
  padding: 20px;
  margin: 20px;
}

footer div h2 {
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 700;
}

footer div p {
  text-align: center;
}
</style>
