import axios from "axios";

export async function findByUserId(id) {
  return await axios.get(`${process.env.VUE_APP_API_URI}/api/spent/user/${id}`).then((res) => {
    return res.data
  }).catch((err) => {
    if(err.response) {
      return err.response.data;
    }
    else if(err.request) {
      return 'Erro de comunicação com o servidor';
    } 
    else {
      return 'Erro ao processar a requisição';
    }
  })
}
