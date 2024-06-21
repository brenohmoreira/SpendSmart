<template>
  <div id="spents-container" class="content">
    <div id="spents-crud">

    </div>
    <div id="spents-content">

    </div>
  </div>
</template>

<script>
  export default {
    name: "SpentsComponent"
  }
</script>

<style scoped>
  #spents-container {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  #spents-crud {
    width: 100%;
    height: 30%;
    background-color: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.17);
  }

  #spents-content {
    width: 100%;
    height: 70%;
    background-color: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.17);
  }
</style>