<template>
  <div class="popup" v-if="open">
    <div :class="[typePopup]">
      {{ messagePopup }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "PopupComponent",
    props: ["typePopup", "messagePopup", "open"]
  }
</script>

<style scoped>
  .popup {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9999;
    transition: .3s;
  }

  .popup div {
    padding: 20px;
    border-radius: 5px;
    transition: .3s;
  }

  .error {
    color: white;
    background-color: red;
    width: auto;
  }
</style>
