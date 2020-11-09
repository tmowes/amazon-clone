import axios from 'axios'

const api = axios.create({
  baseURL: 'https://us-central1-clone-a69fd.cloudfunctions.net/api',
  // baseURL: 'http://localhost:5001/clone-a69fd/us-central1/api',
})

export default api
