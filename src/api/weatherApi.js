import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';

const weatherApi = () => {
  const getFiveDayWeather = (parmas) => axios.get(`${baseUrl}?q=${parmas.city}&mode=json&type=accurate&units=metric&appid=${apiKey}`);
  return {
    getFiveDayWeather
  };
};

export default weatherApi();
