import "./styles.css";
//637d10571b414c779f872124241603 api key for weatherapi.
//forecast.json?key=" + apiKey +  "&q=id:" + cityID

let cityID = "london";

async function fetchData() {
	try {
		const response = await fetch(
			"http://api.weatherapi.com/v1/forecast.json?key=637d10571b414c779f872124241603&q=id:" +
				cityID
		);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error("error displaying data", error);
	}
}

fetchData();
