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
  * {
    padding: 0; 
    margin-top: 0;
    margin-bottom: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
  }
</style>