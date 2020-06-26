import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

const api = axios.create({
  baseURL: 'https://api.weatherbit.io/v2.0/forecast/',
});

api.interceptors.request.use((req) => {
  req.params = req.params || {};
  req.params.appid = API_KEY;
  return req;
});

export default api;
