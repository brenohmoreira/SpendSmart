<template>
  <div id="spents-container" class="content">
    <!-- 
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
    -->

    <div id="spents-content">
      <header>
        <input id="date" type="datetime-local" v-model="spentDate">

        <div id="actions-btn">
          <button> CRIAR </button>
          <button> EDITAR </button>
          <button> APAGAR </button>
        </div>
      </header>

      <main>
        <table>
          <tr class="light-gray">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr>
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr class="light-gray">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr>
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr class="light-gray">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr>
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr class="light-gray">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr>
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr class="light-gray">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr>
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr class="light-gray">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr>
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr class="light-gray">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr>
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr class="light-gray">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr>
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr class="light-gray">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr>
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr class="light-gray">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
          <tr>
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
            <td class="view-column"> <button> VER </button> </td>
          </tr>
        </table>
      </main>
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

  #spents-content {
    width: 100%;
    height: 100%;
    background-color: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.17);
    padding: 30px;
  }

  #actions-btn {
    display: flex;
    gap: 10px;
  }

  #actions-btn button {
    width: 175px;
    height: 40px;
    background-color: #5678dd;
    color: white;
    border: none;
    outline: none;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.17);
    cursor: pointer;
    transition: .3s;
  }

  #actions-btn button:hover {
    background-color: #3c5ec5;
  }

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 40px;
  }

  #date {
    width: 300px;
    height: 40px;
    text-align: center;
    border: 1px solid rgb(187, 184, 184);
    outline: none;
  }

  main {
    width: 100%;
    height: calc(100% - 80px);
    overflow: auto;
  }

  main table {
    width: 100%;
    max-height: calc(100% - 120px);
    border-collapse: collapse;
  }

  td {
    height: 30px;
    text-align: left;
  }

  .select-column {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .select-column input {
    width: 25px;
    height: 25px;
  }

  .title-column {
    width: 40%;
    padding-left: 10px;
  }

  .data-column {
    width: 25%;
  }

  .view-column {
    width: 10%;
  }

  .value-column {
    width: 30%;
  }

  .view-column button {
    width: 100%;
    height: 25px;
    background-color: #5678dd;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .view-column button:hover {
    background-color: #3c5ec5;
    transition: .3s;
  }

  .light-gray {
    background-color: #e8edf2;
  }

  /*
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
  }*/
</style>