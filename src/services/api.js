import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

const api = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`,
});

export default api;
