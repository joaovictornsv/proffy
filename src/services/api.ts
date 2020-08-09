import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proffy-deploy-jv.herokuapp.com/'
})

export default api;