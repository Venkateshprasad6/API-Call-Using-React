// axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // ✅ Correct key is baseURL
});

export default instance;
