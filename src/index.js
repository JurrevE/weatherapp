import "./styles.css";
//637d10571b414c779f872124241603 api key for weatherapi.

let cityID = "Dokkum";

async function fetchData() {
  try {
    const response = await fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=637d10571b414c779f872124241603&q=id:" +
        cityID
    );
    const data = await response.json();
    console.log(data);
    currentData(data);
  } catch (error) {
    console.error("error displaying data", error);
  }
}

fetchData();

function currentData(data) {
  let weatherInfo = {};

  let clouds = data.current.cloud;
  weatherInfo.cloudy = clouds;

  let feelsliketemp = data.current.feelslike_c;
  weatherInfo.feelsliketemp = feelsliketemp;
  console.log(weatherInfo);
}
