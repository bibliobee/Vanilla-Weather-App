function displayDate() {
  let date = new Date(timestamp);
  let hours = date.getHours;
  let minutes = date.getMinutes;
  if (minutes<10) {
    minutes = `0${minutes}`;
  }

let days = [
"Sunday",
 "Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];
let day = days[date.getDay()];
return `${day} ${hours}:${minutes};
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let precipitationElement = document.querySelector("#precipitation");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind);
let cityElement = document.querySelector("#city");
let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = response.data.main.humidity;
  precipitationElement.innerHTML = response.data.main.precipitation;
  windElement.innerHTML = Math.round(response.data.main.wind.speed);
dateElement.innerHTML = formatDate(response.data.dt *1000);
iconElement.setAttribute("src", `openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);
}

let apiKey = "63214c4281922e3bb72fdf12dada7734";
let apiUrl =
  "https://api.openweathermap.org/data/3.0/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={apiKey}&units={metric}";
  axios.get(url).then(displayTemperature);

  function search(event) {
    event.preventDefault;
let cityInputElement = document.querySelector("#city-input");
console.log(cityInputElement.value);
  }
  
  let form = document.querySelector(#search-form);
  form.addEventListern("submit", search);