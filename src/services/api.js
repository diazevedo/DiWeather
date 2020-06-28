import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

api.interceptors.request.use((req) => {
  req.params = req.params || {};
  req.params.appid = API_KEY;
  req.params.units = 'metric';
  return req;
});

export default api;
