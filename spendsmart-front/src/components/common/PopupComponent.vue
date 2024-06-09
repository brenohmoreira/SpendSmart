<template>
  <div class="popup" v-if="exibePopup" @abre="exibePopup = true">
    <p> Teste </p>
  </div>
</template>

<script>
  export default {
    name: "PopupComponent",
    data: () => ({
      exibePopup: false
    })
  }
</script>

<style scoped>
  .popup {
    width: 400px;
    height: 400px;
    color: white;
    background-color: black;
  }
</style>