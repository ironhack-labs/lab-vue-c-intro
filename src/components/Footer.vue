<script setup>
const props = defineProps({
  name: "Footer",
});
</script>

<template>
  <footer class="footer">
    <section class="footer-class">
      <div>
        <img src="src/assets/USP-1.png" alt="computer" />
        <h4>Performant</h4>
        <p>
          Truly reactive, compiler-optmized rendering system that rarely
          requires manual optimization.
        </p>
      </div>
      <div>
        <img src="src/assets/USP-2.png" alt="person speaking on codes" />
        <h4>Approachable</h4>
        <p>
          Builds on top of standard HTML, CSS and JavaScript with intuitive API
          and world-class documentaion.
        </p>
      </div>
      <div>
        <img src="src/assets/USP-3.png" alt="computer and mobile together" />
        <h4>Versatile</h4>
        <p>
          A rich, incrementally adoptable ecosystem that scales between a
          library and a full features framework.
        </p>
      </div>
    </section>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #39b983;
  width: 600px;
  height: 310px;
  color: #000000;
}  

.footer-class {
  display: flex;
  justify-content: space-around;
  padding: 50px;
  height: 100%;
}

.footer-class div {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.footer-class img {
  width: 60px;
  height: 60px;
}

h4 {
  font-size: 16px;
  font-weight: bold;
  margin: 10px;
}

p {
  font-size: 12px;
  font-family: inriaSans;
  width: 125px;
  text-align: center;
}

</style>
