import axios from "axios";

//criando uma variavel api para facilitar uso na hora de fazermos codigo
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default api;
