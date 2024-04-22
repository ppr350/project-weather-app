import "./style.css";
import { callWeatherApi } from "./weatherApi";
import { getUserLocation } from "./userLocation";

const userCity = document.querySelector('#user-city')
const okButton = document.querySelector('#btn')

window.onload = function() {
    callWeatherApi('cork')
    getUserLocation()
}

export { userCity, okButton }