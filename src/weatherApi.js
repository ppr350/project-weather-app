import { values } from "lodash";

async function callWeatherApi() {
    try {
        const response = await fetch(
            "http://api.weatherapi.com/v1/forecast.json?key=f2eb902d7da44680b97101422242004&q=cork&days=3&aqi=no&alerts=no",
            { mode: "cors" },
          );
        let responseJson = await response.json();
        console.log(responseJson.forecast.forecastday[0])
        console.log(responseJson.forecast.forecastday[1])
        console.log(responseJson.forecast.forecastday[2])
        weatherForecast(responseJson)
        // console.log(responseJson.forecast[1])
        // console.log(responseJson.forecast[2])
        return responseJson

    } catch(error) {
        throw new Error(error.code)
    }

}

function weatherForecast(values) {
    console.log(values)
}

export { callWeatherApi }