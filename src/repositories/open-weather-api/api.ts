import axios from 'axios';
import {OPENWEATHERMAP_API_URL, OPENWEATHERMAP_API_KEY} from '@env';

const OpenWeatherAPI = axios.create({
  baseURL: OPENWEATHERMAP_API_URL,
});

OpenWeatherAPI.interceptors.request.use(async request => {
  if (request.url === '/auth') {
    return request;
  }

  request.params = {
    ...request.params,
    appid: OPENWEATHERMAP_API_KEY,
    unit: 'metric',
  };
  return request;
});

export default OpenWeatherAPI;
