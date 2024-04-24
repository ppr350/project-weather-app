import { displayForecast, cityName } from "./index";
import { callWeatherApi } from "./weatherApi";
import { currentCity } from "./localStorage";

function createContent(values) {

    const contentOnscreen = document.createElement('div')
    contentOnscreen.classList.add('content')

    const dateOnscreen = document.createElement('p')
    dateOnscreen.classList.add('date')
    dateOnscreen.textContent = values.date
    contentOnscreen.appendChild(dateOnscreen)

    const condOnscreen = document.createElement('p')
    condOnscreen.classList.add('cond')
    condOnscreen.textContent = `CONDITION: ${values.day.condition.text}`
    contentOnscreen.appendChild(condOnscreen)

    const maxTempOnscreen = document.createElement('p')
    maxTempOnscreen.classList.add('maxtemp')
    maxTempOnscreen.textContent = `MAXIMUM TEMPERATURE: ${values.day.maxtemp_c}°C`
    contentOnscreen.appendChild(maxTempOnscreen)

    const minTempOnscreen = document.createElement('p')
    minTempOnscreen.classList.add('mintemp')
    minTempOnscreen.textContent = `MINIMUM TEMPERATURE: ${values.day.mintemp_c}°C`
    contentOnscreen.appendChild(minTempOnscreen)

    const precipOnscreen = document.createElement('p')
    precipOnscreen.classList.add('precip')
    precipOnscreen.textContent = `PRECIPITATION: ${values.day.totalprecip_mm}mm`
    contentOnscreen.appendChild(precipOnscreen)

    const sunriseOnscreen = document.createElement('p')
    sunriseOnscreen.classList.add('sunrise')
    sunriseOnscreen.textContent = `SUNRISE: ${values.astro.sunrise}`
    contentOnscreen.appendChild(sunriseOnscreen)

    const sunsetOnscreen = document.createElement('p')
    sunsetOnscreen.classList.add('sunset')
    sunsetOnscreen.textContent = `SUNSET: ${values.astro.sunset}`
    contentOnscreen.appendChild(sunsetOnscreen)

    const uvOnscreen = document.createElement('p')
    uvOnscreen.classList.add('uv')
    uvOnscreen.textContent = `UV INDEX: ${values.day.uv}`
    contentOnscreen.appendChild(uvOnscreen)

    getWeatherColour(condOnscreen)

    displayForecast.appendChild(contentOnscreen)
}

function updateDisplay() {
    displayForecast.innerHTML = ''
    cityName.textContent = currentCity[0].toUpperCase()
    console.log(currentCity)
    callWeatherApi(currentCity[0])
}

const colourObject = {
    cloudy: '#e4ebf1',
    rain: ' #dcdcc6',
    sunny: '#f2f27a',
    drizzle: '#cfd8d9',
    snow: '#fffafa',
    mist: 'e0e7ea',
    fog: '#abaeb0',
    storm: '#b2d1c8'
}

function getWeatherColour(dailyCondition) {
    for (const condition in colourObject) {
        if (colourObject.hasOwnProperty(condition)) {
            const conditionRegex = new RegExp(condition, 'i')
            if (conditionRegex.test(dailyCondition.textContent) == true) {
                dailyCondition.parentElement.style.backgroundColor = colourObject[condition]
                console.log(dailyCondition.textContent, condition)
                console.log(dailyCondition)
                console.log(colourObject[condition])
            }
        }
    }
}

export { createContent, updateDisplay }