<template>
  <div id="wallet-container" class="content">
    <div id="wallet-content">

    </div>
  </div>
</template>

<script>
  export default {
    name: "WalletComponent"
  }
</script>

<style scoped>
  #wallet-container {
    padding: 30px;
  }

  #wallet-content {
    width: 100%;
    height: 400px;
    background-color: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.17);
  }
</style>