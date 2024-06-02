<template>
  <div id="auth-container">
    <div id="sign-in" v-if="signIn">
      <form @submit.prevent="authenticate()">
        <input type="email" id="email" name="email" v-model="email">
        <input type="password" id="password" name="password" v-model="password">
        <button> Enviar </button>
      </form>
    </div>
    <div id="sign-up" v-else>

    </div>
  </div>
</template>

<script>
  import auth from '@/services/auth'
  import cookie from '@/services/cookie'

  export default {
    name: 'AuthComponent',
    data: () => ({
      signIn: true,
      email: '',
      password: ''
    }),
    methods: {
      async authenticate() {
        let id = await auth.authenticate(this.email, this.password);
        
        if(id !== null) {
          cookie.setCookie('id', id, 1)
          this.$router.push('/?message=authenticated')
        }
        
        // popup de login paia
      }
    }
  }
</script>

<style scoped>
  #auth-container {
    width: 60%;
    padding: 20px;
    border-radius: 5px;
  }
</style>