import "./styles.css";

let cityID;
let weatherInfo;
let futureWeatherInfo;
const inputfield = document.getElementById("cityID");
const submitbutton = document.getElementById("submitbutton");
const tempcp = document.getElementById("tempc");
const otherinfop = document.getElementById("otherinfo");
const placeinfop = document.getElementById("placeinfop");
const day1date = document.getElementById("day1date");
const day1tempc = document.getElementById("day1temp");
const day1condition = document.getElementById("day1conditions");
const day2date = document.getElementById("day2date");
const day2tempc = document.getElementById("day2temp");
const day2condition = document.getElementById("day2conditions");

async function fetchData() {
	try {
		const response = await fetch(
			"https://api.weatherapi.com/v1/forecast.json?key=637d10571b414c779f872124241603&q=id:" +
				cityID +
				"&days=4"
		);
		const data = await response.json();
		console.log(data);
		getCurrentData(data);
		getFutureData(data);
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

function getFutureData(data) {
	futureWeatherInfo = {
		day1tempc: data.forecast.forecastday[1].day.avgtemp_c,
		day1condition: data.forecast.forecastday[1].day.condition.text,
		day1date: data.forecast.forecastday[1].date,
		day2tempc: data.forecast.forecastday[2].day.avgtemp_c,
		day2condition: data.forecast.forecastday[2].day.condition.text,
		day2date: data.forecast.forecastday[2].date,
	};
	displayFutureData();
}

function displayFutureData() {
	day1date.innerHTML = futureWeatherInfo.day1date;
	day1tempc.innerHTML = futureWeatherInfo.day1tempc + "°C";
	day1condition.innerHTML = futureWeatherInfo.day1condition;
	day2date.innerHTML = futureWeatherInfo.day2date;
	day2tempc.innerHTML = futureWeatherInfo.day2tempc + "°C";
	day2condition.innerHTML = futureWeatherInfo.day2condition;
}
submitbutton.addEventListener("click", function () {
	let inputfieldvalue = inputfield.value;
	cityID = inputfieldvalue;
	fetchData();
	inputfield.value = " ";
});
