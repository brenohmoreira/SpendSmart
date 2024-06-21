<template>
  <div id="spents-container" class="content">
    <div id="spents-crud">
      <div id="row-crud">
        <div class="row-crud-input">
          <label> Título </label> 
          <input type="text" placeholder="Digite um título">
        </div>
        <div class="row-crud-input">
          <label> Preço </label> 
          <input type="text" placeholder="Digite o preço">
        </div>
        <div class="row-crud-input">
          <label> Data </label>
          <input type="datetime-local" v-model="spentDate" placeholder="Digite a data do gasto">
        </div>
      </div>
      <label style="margin-top: 10px;"> Descrição </label>
      <textarea placeholder="Digite a descrição"></textarea>
      <div id="spent-buttons">
        <button id="edit"> Editar </button>
        <button id="add"> Adicionar </button>
      </div>
    </div>
    <div id="spents-content">
      
    </div>
  </div>
</template>

<script>
  import format from "./../util/format"

  export default {
    name: "SpentsComponent",
    data: () => ({
      spentDate: "",
    }),
    mounted() {
      this.spentDate = format.formatDate(new Date())
    }
  }
</script>

<style scoped>
  #spents-container {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  #spents-crud {
    width: 100%;
    height: 35%;
    padding: 20px;
    background-color: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.17);

    display: flex;
    justify-content: space-between;
    flex-direction: column
  }

  .row-crud-input {
    display: flex;
    flex-direction: column;
    width: 32%;
  }

  #spents-crud label {
    font-size: 15px;
  }

  #spents-crud textarea {
    width: 100%;
    height: 35%;
    padding: 10px;
    resize: none;
    border: 1px solid gray;
    outline: none;
  }

  #spents-crud button {
    width: 175px;
    height: 40px;
    border: none;
    outline: none;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.17);
    margin-top: 10px;
    cursor: pointer;
    transition: .3s;
  }

  #add {
    background-color: #5678dd;
    color: white;
  }

  #add:hover {
    background-color: #3d5fc4;
  }

  #edit {
    background-color: white;
    color: #5678dd;
    border: 1px solid #5678dd !important;
  }

  #edit:hover {
    background-color: #5678dd;
    color: white;
    border: none;
  }

  #spent-buttons {
    display: flex;
    justify-content: end;
    gap: 15px;
  }

  #row-crud {
    display: flex;
    gap: 2%;
    justify-content: space-between;
  }

  #row-crud input {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid gray;
    outline: none;
  }

  #spents-content {
    width: 100%;
    height: 65%;
    background-color: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.17);
  }
</style>