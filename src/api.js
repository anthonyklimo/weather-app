function searchApi() {
  const cityName = document.getElementById('input').value;
  const apiKey = '4600a2c73e9351da7e0e9c6bb1014316';

  function handleData(weatherData) {
    const weather = {
      location: cityName,
      weather: weatherData.weather[0].main,
      temp: weatherData.main.temp,
      feelsLike: weatherData.main.feels_like,
      humidity: weatherData.main.humidity,
      high: weatherData.main.temp_max,
      low: weatherData.main.temp_min,
    };
    return weather;
  }

  async function getData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`,
        { mode: 'cors' },
      );
      const weatherData = await response.json();
      console.log(handleData(weatherData));
      return handleData(weatherData);
    } catch (error) {
      console.log('error');
    }
  }
  return getData();
}

export default searchApi;
