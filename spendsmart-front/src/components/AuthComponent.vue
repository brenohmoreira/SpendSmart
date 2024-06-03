<template>
  <div id="auth-container">
    <div id="auth-text">
      <p v-if="type === 'signIn'"> Bem-vindo(a)! Estamos </p>
      <p v-if="type === 'signIn'"> felizes em te ver </p>
      <p v-if="type === 'signIn'"> novamente! </p>

      <p v-if="type === 'signUp'"> Bem-vindo(a)! Parece </p>
      <p v-if="type === 'signUp'"> que você é novo </p>
      <p v-if="type === 'signUp'"> por aqui! </p>
    </div>
    <div id="auth-form">
      <div id="auth-form-content">
        <div id="sign-in" v-if="type === 'signIn'" class="auth-el">
          <form @submit.prevent="authenticate()">
            <div class="input-form">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="125" height="100" viewBox="0 0 125 100"> <path d="M60,0 l50,0 a10,10 0 0,1 7,17 l-50,50 a10,10 0 0,1 -13,0 l-50,-50 a10,10 0 0,1 7,-17z" stroke="#000" stroke-width="0" fill="#4169e1" /> <path d="M60,90 l54,0 a10,10 0 0,0 7,-7 l0,-60 -50,50 a15,15 0 0,1 -21,0 l-50,-50 0,60 a10,10 0 0,0 7,7z" stroke="#000" stroke-width="0" fill="#4169e1" /> </svg>              
              <input type="email" id="email" name="email" v-model="email" placeholder="Digite o e-mail">
            </div>
            <div class="input-form" style="margin-top: 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 64 80" x="0px" y="0px"><title>lock</title><path d="M32 1.333c-9.407 0-17.164 6.893-18.453 16-0.014 0.001-0.025 0.002-0.047 0l-0.031 0.505c-0.081 0.71-0.135 1.428-0.135 2.161v2.667c-2.946 0-5.333 2.4-5.333 5.333v29.333c0 2.933 2.388 5.333 5.333 5.333h37.333c2.947 0 5.333-2.4 5.333-5.333v-29.333c0-2.933-2.387-5.333-5.333-5.333v-2.667c0-0.734-0.054-1.451-0.135-2.161l-0.031-0.505c-0.022 0.002-0.033 0.001-0.047 0-1.289-9.107-9.046-16-18.453-16zM32 9.333c0.736 0 1.457 0.077 2.151 0.219 3.472 0.714 6.328 3.12 7.677 6.307 0.268 0.635 0.478 1.299 0.62 1.99 0.143 0.696 0.219 1.414 0.219 2.151v2.667h-21.333v-2.667c0-0.736 0.108-1.472 0.25-2.167 0.201-0.985 0.57-1.901 1.021-2.766 0.137-0.259 0.26-0.525 0.417-0.771 0.162-0.257 0.349-0.493 0.531-0.734 0.218-0.286 0.442-0.566 0.688-0.828 0.173-0.185 0.356-0.359 0.542-0.531 0.306-0.283 0.626-0.55 0.964-0.797 0.183-0.134 0.366-0.269 0.557-0.391 0.372-0.237 0.765-0.44 1.167-0.63 0.191-0.091 0.376-0.192 0.573-0.271 0.434-0.175 0.889-0.3 1.349-0.417 0.192-0.049 0.376-0.118 0.573-0.156 0.66-0.128 1.339-0.208 2.036-0.208z"/></svg>
              <input type="password" id="password" name="password" v-model="password" placeholder="Digite a senha">
            </div>
            <button> Conectar-se </button>
            <a> Esqueceu sua senha? </a>
          </form>
        </div>
        <div id="sign-up" v-else class="auth-el">
          <form @submit.prevent="createAccount()">
            <div class="input-form">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>              
              <input type="text" id="name" name="name" v-model="name" placeholder="Digite o seu nome">
            </div>
            <div class="input-form" style="margin-top: 10px;">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="125" height="100" viewBox="0 0 125 100"> <path d="M60,0 l50,0 a10,10 0 0,1 7,17 l-50,50 a10,10 0 0,1 -13,0 l-50,-50 a10,10 0 0,1 7,-17z" stroke="#000" stroke-width="0" fill="#4169e1" /> <path d="M60,90 l54,0 a10,10 0 0,0 7,-7 l0,-60 -50,50 a15,15 0 0,1 -21,0 l-50,-50 0,60 a10,10 0 0,0 7,7z" stroke="#000" stroke-width="0" fill="#4169e1" /> </svg>              
              <input type="email" id="email" name="email" v-model="email" placeholder="Digite o e-mail">
            </div>
            <div class="input-form" style="margin-top: 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 64 80" x="0px" y="0px"><title>lock</title><path d="M32 1.333c-9.407 0-17.164 6.893-18.453 16-0.014 0.001-0.025 0.002-0.047 0l-0.031 0.505c-0.081 0.71-0.135 1.428-0.135 2.161v2.667c-2.946 0-5.333 2.4-5.333 5.333v29.333c0 2.933 2.388 5.333 5.333 5.333h37.333c2.947 0 5.333-2.4 5.333-5.333v-29.333c0-2.933-2.387-5.333-5.333-5.333v-2.667c0-0.734-0.054-1.451-0.135-2.161l-0.031-0.505c-0.022 0.002-0.033 0.001-0.047 0-1.289-9.107-9.046-16-18.453-16zM32 9.333c0.736 0 1.457 0.077 2.151 0.219 3.472 0.714 6.328 3.12 7.677 6.307 0.268 0.635 0.478 1.299 0.62 1.99 0.143 0.696 0.219 1.414 0.219 2.151v2.667h-21.333v-2.667c0-0.736 0.108-1.472 0.25-2.167 0.201-0.985 0.57-1.901 1.021-2.766 0.137-0.259 0.26-0.525 0.417-0.771 0.162-0.257 0.349-0.493 0.531-0.734 0.218-0.286 0.442-0.566 0.688-0.828 0.173-0.185 0.356-0.359 0.542-0.531 0.306-0.283 0.626-0.55 0.964-0.797 0.183-0.134 0.366-0.269 0.557-0.391 0.372-0.237 0.765-0.44 1.167-0.63 0.191-0.091 0.376-0.192 0.573-0.271 0.434-0.175 0.889-0.3 1.349-0.417 0.192-0.049 0.376-0.118 0.573-0.156 0.66-0.128 1.339-0.208 2.036-0.208z"/></svg>
              <input type="password" id="password" name="password" v-model="password" placeholder="Digite a senha">
            </div>
            <button> Cadastrar-se </button>
          </form>
        </div>
        <div class="copywr-cont">
          <p> Copyright © 2024 - <span> Breno </span> </p>
          <p> Todos os direitos reservados </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import auth from '@/services/auth'
  import cookie from '@/services/cookie'

  export default {
    name: 'AuthComponent',
    props: ['type'],
    data: () => ({
      email: '',
      password: '',
      name: ''
    }),
    methods: {
      async createAccount() {
        let message = await auth.createAccount(this.name, this.email, this.password)

        if(message === "Account already exists") {
          this.name = ''
          this.email = ''
          this.password = ''
          console.log("A conta já existe patrão")
        }
        else {
          this.name = ''
          this.email = ''
          this.password = ''
          console.log("Conta criada!")
        }
        
      },

      async authenticate() {
        let id = await auth.authenticate(this.email, this.password)
        
        if(id !== null) {
          cookie.setCookie('id', id, 1)
          this.$router.push('/?message=authenticated')
        }
        
        console.log("Errou o login, coisa feia!")
      }
    }
  }
</script>

<style scoped>
  #auth-container {
    width: 100%;
    height: 80%;
    display: flex;
    padding: 5rem 0;
  }

  #auth-text {
    width: 70%;
    padding-top: 2em;
  }

  #auth-form {
    width: 30%;
    position: relative;
  }

  #auth-form-content {
    width: 100%;
    border-radius: 5px;
    background-color: white;
  }

  .copywr-cont {
    position: absolute;
    bottom: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: white;
  }

  .copywr-cont span {
    text-decoration: underline;
  }

  #auth-form-content input {
    width: 100%;
    height: 50px;
    border: none;
    border-bottom: 1px solid lightgray;
    padding: 0 35px;
    outline: none;
    font-size: 16px;
  }

  #sign-in form, #sign-up form {
    padding: 40px;
    display: flex;
    flex-direction: column;
  }

  #sign-in form button, #sign-up form button {
    width: 100%;
    height: 50px;
    background-color: #4169e1;
    color: white;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 2em;
  }

  #sign-in form button:hover, #sign-up form button:hover {
    background-color: #335bd3;
    transition: .3s;
  }

  .input-form {
    position: relative;
  }

  .input-form svg {
    width: 20px;
    height: auto;
    position: absolute;
    top: 15px;
    fill: #4169e1;
  }

  .input-form input:focus {
    transition: .3s;
    border-bottom: 1px solid #4169e1 !important;
  }

  a {
    margin-top: 30px;
    text-align: center;
    color: #4169e1;
    cursor: pointer;
  }

  a:hover {
    color: #335bd3;
  }

  #auth-text {
    font-size: 40px;
    color: white;
    font-weight: 200;
  }
</style>