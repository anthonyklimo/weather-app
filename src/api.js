async function getData() {
  const cityName = document.getElementById('input').value;
  const apiKey = '4600a2c73e9351da7e0e9c6bb1014316';
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`,
    { mode: 'cors' },
  );
  const weatherData = await response.json();
  console.log(weatherData);
}

export default getData;
