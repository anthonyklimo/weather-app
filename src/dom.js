function renderPage(weatherData) {
  const location = document.getElementById('location');
  const weather = document.getElementById('weather');
  const temperature = document.getElementById('temperature');
  const feelsLike = document.getElementById('feels-like');
  const humidity = document.getElementById('humidity');
  const high = document.getElementById('high');
  const low = document.getElementById('low');

  location.textContent = weatherData.location;
  weather.textContent = weatherData.weather;
  temperature.textContent = weatherData.temperature;
  feelsLike.textContent = weatherData.feelsLike;
  humidity.textContent = weatherData.humidity;
  high.textContent = weatherData.high;
  low.textContent = weatherData.low;

  console.log(location.textContent);
  console.log(weatherData.location);
}

export default renderPage;
