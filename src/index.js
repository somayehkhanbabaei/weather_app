let key = '4691d8ccf7a9670f33b8c20bb85f89ee';
let dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function showCity(response) {
  let nowDate = new Date();
  let hours = nowDate.getHours();
  let day = dayNames[nowDate.getDay()];
  let minutes = nowDate.getMinutes();
  let city = document.getElementById('cityName');
  let cityTime = document.getElementById('cityTime');
  let citySit = document.getElementById('citySit');
  let cityCanti = document.getElementById('cityCanti');
  let windSpeed = document.getElementById('windSpeed');
  let precip = document.getElementById('precip');

  city.innerHTML = response.data.name;
  cityTime.innerHTML = `${day} ${hours}:${minutes}`;
  citySit.innerHTML = response.data.weather[0].main;
  cityCanti.innerHTML = Math.round(response.data.main.temp);
  windSpeed.innerHTML = `Wind ${response.data.wind.speed}km/h`;
  precip.innerHTML = `Humidity: ${response.data.main.humidity}%`;
}

function handlePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
  axios.get(url).then(showCity);
}

function cityDatails(event) {
  event.preventDefault();
  let cityName = document.querySelector('input').value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
  axios.get(url).then(showCity);
}

document.querySelector('form').addEventListener('submit', cityDatails);

document.querySelector('.btn-success').addEventListener('click', function () {
  navigator.geolocation.getCurrentPosition(handlePosition);
});
