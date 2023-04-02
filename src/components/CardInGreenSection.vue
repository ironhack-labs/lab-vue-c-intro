<template>
  <div class="cardInGreenSection">
    <img class="greenIcon" :src="image" alt="" />
    <h3 class="greenTitle">{{ greenTitle }}</h3>
    <p class="greenText">{{ greenText }}</p>
  </div>
</template>

<script>
export default {
  name: 'CardInGreenSection',
  props: {
    image: String,
    greenTitle: String,
    greenText: String
  }
}
</script>

<style scoped>
.cardInGreenSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
}
.greenIcon {
  width: 60px;
  height: 60px;
  margin-bottom: 16px;
}
.greenTitle {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
  color: black;
}
.greenText {
  font-size: 12px;
  line-height: 17px;
  font-weight: 400;
  color: black;
  text-align: center;
}
</style>
