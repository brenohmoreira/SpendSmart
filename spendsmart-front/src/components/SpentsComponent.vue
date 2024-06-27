<template>
  <div id="spents-container" class="content">
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
          <tr>
            <th class="select-column"></th>
            <th class="title-column"> Título </th>
            <th class="value-column"> Valor </th>
            <th class="data-column"> Data </th>
          </tr>
          <tr class="light-gray row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="light-gray row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="row-td"> 
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="light-gray row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="light-gray row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="light-gray row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="light-gray row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="light-gray row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="light-gray row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="light-gray row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="light-gray row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
          </tr>
          <tr class="row-td">
            <td class="select-column"> <input type="checkbox"> </td>
            <td class="title-column"> <span> Título de teste </span> </td>  
            <td class="value-column"> <span> R$ 20,00 </span> </td>
            <td class="data-column"> <span> 21/06/2024 21:35:00 </span> </td>
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
  main::-webkit-scrollbar {
      width: 12px; 
  }

  main::-webkit-scrollbar-track {
      background: #f1f1f1; 
  }

  main::-webkit-scrollbar-thumb {
      background-color: #888; 
      border-radius: 6px; 
  }

  main::-webkit-scrollbar-thumb:hover {
      background-color: #555; 
  }

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
    width: 100px;
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

  .row-td:hover {
    background-color: rgb(223, 223, 223);
    cursor: pointer;
    transition: .3s;
  }

  td, th {
    padding: 10px;
    text-align: left;
  }

  td {
    height: 30px;
    text-align: left;
  }

  th {
    font-weight: 400;
  }

  tr {
    border-bottom: 1px solid lightgray;
  }

  .select-column {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
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

  .value-column {
    width: 30%;
  }
</style>