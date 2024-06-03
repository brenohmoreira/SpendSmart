<template>
  <div id="bg-auth">
    <div id="bg-auth-content">
      <div id="header-auth">
        <h2 v-if="type === 'signIn'"> Conecte-se no SpendSmart! </h2>
        <h2 v-else> Cadastre-se no SpendSmart! </h2>
        <p v-if="type === 'signIn'" class="trade-type-auth"> Não possui uma conta? <span @click="type = 'signUp'"> Cadastre-se! </span> </p>
        <p v-else class="trade-type-auth"> Já possui uma conta? <span @click="type = 'signIn'"> Conecte-se! </span> </p>
      </div>
      <auth-component :type="type"></auth-component>
    </div>
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
    data: () => ({
      type: "signIn",
    }),
    mounted() {
      if(cookie.exists('id')) {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  #bg-auth-content {
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }

  #bg-auth {
    width: 100%;
    background: linear-gradient(#4169e1, #2a50c0);
    height: 100vh;
    margin: 0 auto
  }

  #header-auth {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }

  .trade-type-auth > span {
    cursor: pointer;
    text-decoration: underline;
  }

  h2 {
    font-weight: 400;
    font-size: 20px;
  }
</style>
