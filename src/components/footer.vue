<script setup>
    export default {
        name: "footer",

    }
</script>

<template>
    <footer>
        <section>
            <div>
                <img src="src/assets/USP-1.png" alt="computer">
                <h4>Performant</h4>
                <p>Truly reactive, compiler-optmized rendering system that rarely requires manual optimization.</p>
            </div>
            <div>
                <img src="src/assets/USP-2.png" alt="person speaking on codes">
                <h4>Approachable</h4>
                <p>Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentaion.</p>
            </div>
            <div>
                <img src="src/assets/USP-3.png" alt="computer and mobile together">
                <h4>Versatile</h4>
                <p>A rich, incrementally adoptable ecosystem that scales between a library and a full features framework.</p>
            </div>
        </section>
    </footer>
</template>

<style scoped>
    footer {
        background-color: #39B983;
        font-family: inter;
    }
</style>