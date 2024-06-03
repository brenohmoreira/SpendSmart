const { default: axios } = require("axios")

async function authenticate(email, password) {
  return axios.post(`${process.env.VUE_APP_API_URI}/authenticate`, {
    email: email,
    password: password
  }).then((response) => {
    return response.data
  }).catch((er) => {
    console.log(er)
  })
}

async function createAccount(name, email, password) {
  return axios.post(`${process.env.VUE_APP_API_URI}/api/profile/create`, {
    id: null,
    name: name,
    email: email,
    password: password
  }).then((response) => {
    return response.data
  }).catch((er) => {
    if(er.response) {
      return er.response.data;
    }
    else if(er.request) {
      return 'Erro de comunicação com o servidor';
    } 
    else {
      return 'Erro ao processar a requisição';
    }
  })
}

module.exports = {
  authenticate: authenticate,
  createAccount: createAccount
}