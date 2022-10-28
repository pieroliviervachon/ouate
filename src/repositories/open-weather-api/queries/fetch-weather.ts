import API from '../api';

export type WeatherData = {
  main: {
    temp: number;
  };
  name: string;
};

export default function fetch_weather(lat: string, lon: string) {
  return API.get<WeatherData>('/weather', {
    params: {lat, lon},
  });
}
