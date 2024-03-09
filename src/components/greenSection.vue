<script setup>

</script>

<template>
  <div class="green-container">
    <section class="ups-section">
        <div class="card">
        <img src="/src/images/ups1.png" alt="Card Image 1">
        <h4>Performant</h4>
        <p>Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.</p>
        </div>
        <div class="card">
        <img src="/src/images/ups2.png" alt="Card Image 2">
        <h4>Approachable</h4>
        <p>Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.</p>
        </div>
        <div class="card">
        <img src="/src/images/ups3.png" alt="Card Image 3">
        <h4>Versatile</h4>
        <p>A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
        </div>
    </section>
  </div>
</template>

<style scope>
.green-container {
    width: 100%;
    margin-top: 66px;
}

.ups-section {
    width: 600px;
    height: 312px;
    background-color: #39B983;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.ups-section h4{
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    margin: 22px 0;
}

.ups-section img{
    width: 60px;
    height: 60px;
}

.ups-section p{
    width: 125px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
}

.card {
    height: 245px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid purple; 
}
</style>