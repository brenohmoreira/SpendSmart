const { default: axios } = require("axios")

async function authenticate(email, password) {
  return axios.post(`${process.env.VUE_APP_API_URI}/authenticate`, {
    email: email,
    password: password
  }).then((response) => {
    return response.data
  }).catch((er) => {
    console.log(er);
  })
}

module.exports = {
  authenticate: authenticate
}