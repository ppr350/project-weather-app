import { values } from "lodash";

async function callWeatherApi(place) {
    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=f2eb902d7da44680b97101422242004&q=${place}&days=3&aqi=no&alerts=no`,
            { mode: "cors" },
          );
        let responseJson = await response.json();
        // console.log(responseJson.forecast.forecastday[0])
        // console.log(responseJson.forecast.forecastday[1])
        // console.log(responseJson.forecast.forecastday[2])
        weatherForecast(responseJson.forecast.forecastday)
        // console.log(responseJson.forecast[1])
        // console.log(responseJson.forecast[2])
        return responseJson

    } catch(error) {
        throw new Error(error.code)
    }

}

function weatherForecast(values) {
    for (let i = 0; i < values.length; i++) {
        console.log(values[i])
        console.log(`
            Date: ${values[i].date},
            Sunrise: ${values[i].astro.sunrise},
            Sunset: ${values[i].astro.sunset},
            Max Temperature: ${values[i].day.maxtemp_c}°C,
            Min Temperature: ${values[i].day.mintemp_c}°C,
            Condition: ${values[i].day.condition.text},
            UV Index: ${values[i].day.uv}`)
    }

}


export { callWeatherApi }