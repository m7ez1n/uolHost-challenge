import axios from 'axios';

const api = axios.create({
  baseURL: 'https://demo5283088.mockable.io/customers',
});

export default api;
