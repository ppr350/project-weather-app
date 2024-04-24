import "./style.css";
import { getUserLocation } from "./userLocation";
import { updateDisplay } from "./createDomElements";

const userInputCity = document.querySelector('#user-city')
const okButton = document.querySelector('#btn')
const displayForecast = document.querySelector('#display-forecast')
const cityName = document.querySelector('#city-name')
const contentOnscreen = document.querySelectorAll('.content-onscreen')
const cityOnscreen = document.querySelectorAll('.city-onscreen')
const dateOnscreen = document.querySelectorAll('.date-onscreen')

window.onload = () => {
    getUserLocation()
    updateDisplay()
}

export { userInputCity, okButton, displayForecast, cityName, contentOnscreen, cityOnscreen, dateOnscreen }