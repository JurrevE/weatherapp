import "./styles.css";

let cityID;
let weatherInfo;
let inputfield = document.getElementById("cityID");
let submitbutton = document.getElementById("submitbutton");
let tempcp = document.getElementById("tempc");
let otherinfop = document.getElementById("otherinfo");
let placeinfop = document.getElementById("placeinfop");

async function fetchData() {
  try {
    const response = await fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=637d10571b414c779f872124241603&q=id:" +
        cityID
    );
    const data = await response.json();
    console.log(data);
    getCurrentData(data);
  } catch (error) {
    console.error("error displaying data", error);
  }
}

function getCurrentData(data) {
  weatherInfo = {
    cityinfo: data.location.name,
    countryinfo: data.location.country,
    tempc: data.current.temp_c,
    tempf: data.current.temp_f,
    feelsc: data.current.feelslike_c,
    feelsf: data.current.feelslike_f,
    humidity: data.current.humidity,
    clouds: data.current.condition.text,
    uv: data.current.uv,
    winddir: data.current.wind_dir,
    windkph: data.current.wind_kph,
    sunrise: data.forecast.forecastday[0].astro.sunrise,
    sunset: data.forecast.forecastday[0].astro.sunset,
  };

  displayCurrentData();
}

function displayCurrentData() {
  placeinfop.innerHTML = weatherInfo.cityinfo + ", " + weatherInfo.countryinfo;

  tempcp.innerHTML = weatherInfo.tempc + "°C";

  otherinfop.innerHTML =
    "Feels like: " +
    weatherInfo.feelsc +
    "°C" +
    " | " +
    "Conditions: " +
    weatherInfo.clouds +
    " | " +
    "Humidity: " +
    weatherInfo.humidity +
    " | " +
    "UV: " +
    weatherInfo.uv +
    " | " +
    "Wind direction: " +
    weatherInfo.winddir +
    " | " +
    "Wind speed: " +
    weatherInfo.windkph +
    "KPH" +
    " | " +
    "Sunrise: " +
    weatherInfo.sunrise +
    " | " +
    "Sunset: " +
    weatherInfo.sunset;
}

submitbutton.addEventListener("click", function () {
  let inputfieldvalue = inputfield.value;
  cityID = inputfieldvalue;
  fetchData();
});
