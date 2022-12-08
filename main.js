const url = "http://localhost:3000/pessoas";


function getUsers() {
  axios.get(url)
    .then((response) => {
      apiResult.textContent = JSON.stringify(response.data)
      
    })
    .catch((error) => console.error(error));
}
function getUser(id) {
  axios.get(`${url}`)
    .then((response) => {
      this.setState({})
      //const data = response.data
      userID.textContent = JSON.stringify(response.data.id)
      userName.textContent = JSON.stringify(response.data.nome)
      userAge.textContent = JSON.stringify(response.data.idade)
      
    })
    .catch((error) => console.error(error));
}
//getUser(1)
getUsers()
