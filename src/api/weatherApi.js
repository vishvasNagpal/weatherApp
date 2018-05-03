
const weatherApi = (api) => {
  function getFiveDayWeather(payload) {
    return api.get(`data/2.5/forecast?q=${payload.city}&mode=json&type=accurate&units=metric&appid=f8bf055299ecf93373c28105f784c9ae`);
  }
  return {
    getFiveDayWeather
  };
};

export default weatherApi;
