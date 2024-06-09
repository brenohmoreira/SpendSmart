<template>
  <div id="main-bg"> 
    <header-component></header-component>
    <main id="content-container">
      <menu-component></menu-component>
      <dashboard-component></dashboard-component>
    </main>
  </div>
</template>

<script>
  import HeaderComponent from '@/components/common/HeaderComponent.vue'
  import MenuComponent from '@/components/common/MenuComponent.vue'
  import DashboardComponent from '@/components/DashboardComponent.vue'

  export default {
    name: "HomeView",
    components: { HeaderComponent, MenuComponent, DashboardComponent }
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