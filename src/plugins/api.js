import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bolanarededjango-dev-sgak.1.us-1.fl0.io',
});

export default api;
