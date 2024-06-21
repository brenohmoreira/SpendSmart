<template>
  <div id="main-bg"> 
    <header-component></header-component>
    <main id="content-container">
      <menu-component></menu-component>
      <spents-component></spents-component>
    </main>
  </div>
</template>

<script>
  import HeaderComponent from '@/components/common/HeaderComponent.vue'
  import MenuComponent from '@/components/common/MenuComponent.vue'
  import SpentsComponent from '@/components/SpentsComponent.vue'

  export default {
    name: "WalletView",
    components: { HeaderComponent, MenuComponent, SpentsComponent }
  }
</script>

<style scoped>
  #main-bg {
    height: 100vh;
    background-color: #e8edf2;
  }

  #content-container {
    display: flex;
  }
</style>