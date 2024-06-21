<template>
  <header>
    <div class="logo">
      <img src="../../assets/img/logo.png">
      <p> SPEND SMART </p>
    </div>
    <p id="leave-option" @click="sairDaConta"> SAIR </p>
  </header>
</template>

<script>
  import cookie from '@/services/cookie'

  export default {
    name: "HeaderComponent",
    methods: {
      sairDaConta() {
        cookie.setCookie('id', '', -1)
        this.$router.push('/login?message=desloged')
      }
    }
  }
</script>

<style scoped>
  header {
    width: 100%;
    height: 65px;
    background-color: #ffffff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.17);
    position: relative;
    z-index: 99999;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
  }

  #leave-option {
    cursor: pointer;
  }

  header div {
    height: 100%;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 18%;
  }

  .logo img {
    width: 32px;
    height: auto;
  }
</style>