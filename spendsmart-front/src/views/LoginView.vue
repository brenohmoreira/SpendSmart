<template>
  <div id="bg-auth">
    <auth-component></auth-component>
  </div>
</template>

<script>
  import AuthComponent from '@/components/AuthComponent.vue'
  import cookie from '@/services/cookie'

  export default {
    name: "LoginView",
    components: {
      AuthComponent,
    },
    mounted() {
      if(cookie.exists('id')) {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  #bg-auth {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
