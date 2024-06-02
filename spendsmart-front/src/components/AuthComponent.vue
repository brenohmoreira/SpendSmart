<template>
  <div id="auth-container">
    <div id="sign-in" v-if="signIn" class="auth-el">
      <form @submit.prevent="authenticate()">
        <label for="email"> E-mail </label>
        <input type="email" id="email" name="email" v-model="email" placeholder="Digite o e-mail">
        <label for="password"> Senha </label>
        <input type="password" id="password" name="password" v-model="password" placeholder="Digite a senha">
        <button> Conectar-se </button>
      </form>
    </div>
    <div id="sign-up" v-else class="auth-el">

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
    width: 30%;
    padding: 20px;
    border-radius: 5px;
  }

  .auth-el {
    width: 80%;
    display: flex;
    flex-direction: column;
  }

  .auth-el input {
    width: 100%;
    height: 40px;
    border: 1px solid rgb(143, 143, 143);
    border-radius: 5px;
    outline: none;
    padding: 0 10px;
    margin-bottom: 10px;
  }

  .auth-el label {
    margin-bottom: 4px;
  }

  .auth-el button {
    width: 100%;
    height: 40px;
    background-color: dodgerblue;
    color: white;
    border-radius: 5px;
    outline: none;
    border: none;
  }
</style>