<template>
  <router-view></router-view>
</template>

<script>
  import cookie from '@/services/cookie'

  export default {
    name: 'App',
    mounted() {
      if(!cookie.exists('id') && this.$route.path !== '/login') {
        this.$router.push('/login')
      }
    }
  }
</script>

<style>
  @font-face {
      font-family: poppins;
      src: url('./assets/font/Poppins-Regular.ttf');
  }

  * {
    padding: 0; 
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    box-sizing: border-box;
    font-family: poppins;
  }

  button, input, textarea {
    font-family: poppins;
  }

  body {
    font-family: 'Lato', sans-serif;
  }

  .content {
    width: 82%;
    height: 100%;
  }

  aside.menu {
    width: 18%;
    height: 100%;
    background-color: white;
    overflow: auto;
  }

  main {
    width: 100%;
    height: calc(100vh - 65px);
  }
</style>