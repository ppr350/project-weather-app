import "./style.css";
import { callWeatherApi } from "./weatherApi";
import { getUserLocation } from "./userLocation";

window.onload = function() {
    callWeatherApi('cork')
    getUserLocation()
}
