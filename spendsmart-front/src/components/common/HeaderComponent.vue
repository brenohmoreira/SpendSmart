<template>
  <header>
    <div class="logo">
      <img src="../../assets/img/logo.png">
      <p> SPEND SMART </p>
    </div>
  </header>
</template>

<script>
  export default {
    name: "HeaderComponent"
  }
</script>

<style scoped>
  header {
    width: 100%;
    height: 65px;
    background-color: #ffffff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.17);
    position: relative;
    z-index: 99999;
  }

  header div {
    height: 100%;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 18%;
  }

  .logo img {
    width: 32px;
    height: auto;
  }
</style>