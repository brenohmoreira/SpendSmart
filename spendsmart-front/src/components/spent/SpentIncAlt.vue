<template>
  <div id="popup-dialog" v-if="incAltDialog.state">
    <div class="overlay"></div>
    
    <div class="popup-content">
      <h2> IncAlt - Spent </h2>
      <input type="text" placeholder="Título do gasto">
      <input type="number">
      <input type="datetime-local">
      <textarea></textarea>
      <select>
      </select>
      <p>Este é o conteúdo do popup.</p>
      <button @click="closeDialog">Fechar</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "SpentIncAlt",
  props: ["incAltDialog"],
  methods: {
    closeDialog() {
      this.$emit('update:incAltDialog', false)
    }
  }
}

</script>

<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); /* Cor escura com transparência */
    z-index: 999;
  }

  /* Estilos para o conteúdo do popup */
  .popup-content {
    position: fixed;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    max-width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Estilizando o botão de fechar */
  .popup-content button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 10px;
  }

  .popup-content button:hover {
    background-color: #0056b3;
  }
</style>
