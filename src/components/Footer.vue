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
  margin: 0;
}

.footer-class {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: spacea;
  align-items: center;
}

.footer-class div {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 125px;
  padding: 20px 35px;
}

.footer-class img {
  width: 60px;
  height: 60px;
}


h4 {
  font-size: 16px;
  font-weight: bold;
}

p {
  font-size: 12px;
  font-family: inriaSans;
  width: 125px;
  text-align: center;
}

</style>
