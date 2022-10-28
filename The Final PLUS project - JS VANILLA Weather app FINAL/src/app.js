let submit = document.querySelector(`#submit`);
submit.addEventListener(`click`, logCityName);

function logCityName(event) {
  event.preventDefault();
  let city = getCityName();
  console.log(city);
  let h1 = document.querySelector("h1");
  h1.innerHTML = city;
}

function getCityName() {
  event.preventDefault();
  let city = document.querySelector(`#cityName`).value;
  let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
  let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=${metric}`;
  axios.get(url).then(getCityName);
}

let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
let lat = document.querySelector(`response.data.lat`);
let lon = document.querySelector(`response.data.lon`);
let metric = document.querySelector(math.round(`response.data.temp`));
let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=${metric}`;
axios.get(url).then(currentTemp);

function currentTemp(response) {
  let temperature = document.querySelector(`response.data.temp`);
  h1.innerHTML(`temperature`);
}
