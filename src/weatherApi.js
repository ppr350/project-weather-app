import { createContent } from "./createDomElements";
import { displayError } from "./errorHandling";

async function callWeatherApi(place) {
    try {
        const response = await fetch(
            `https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/forecast.json?key=f2eb902d7da44680b97101422242004&q=${place}&days=3&aqi=no&alerts=no`,
            { mode: "cors" },
          );
        const responseJson = await response.json();
        weatherForecast(responseJson.forecast.forecastday)
        return responseJson

    } catch(error) {
        console.log(error)
        displayError()
    }
}

function weatherForecast(values) {
    for (let i = 0; i < values.length; i++) {
        createContent(values[i])
    }
}


export { callWeatherApi, weatherForecast }