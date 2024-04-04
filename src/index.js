import "./styles.css";
//637d10571b414c779f872124241603 api key for weatherapi.

let cityID;
let inputfield = document.getElementById("cityID");
let submitbutton = document.getElementById("submitbutton");

async function fetchData() {
  try {
    const response = await fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=637d10571b414c779f872124241603&q=id:" +
        cityID
    );
    const data = await response.json();
    currentData(data);
  } catch (error) {
    console.error("error displaying data", error);
  }
}

function currentData(data) {
  let weatherInfo = {
    tempc: data.current.temp_c,
    tempf: data.current.temp_f,
    feelsc: data.current.feelslike_c,
    feelsf: data.current.feelslike_f,
    humidity: data.current.humidity,
    clouds: data.current.cloud,
    uv: data.current.uv,
    winddir: data.current.wind_dir,
    windkph: data.current.wind_kph,
    windmph: data.current.wind_mph,
    sunrise: data.forecast.forecastday[0].astro.sunrise,
    sunset: data.forecast.forecastday[0].astro.sunset,
  };

  console.log(weatherInfo);
}

submitbutton.addEventListener("click", function () {
  let inputfieldvalue = inputfield.value;
  cityID = inputfieldvalue;
  fetchData();
});
