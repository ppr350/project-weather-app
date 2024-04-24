import { userInputCity, okButton } from "./index";
import { saveCity } from "./localStorage";
import { updateDisplay } from "./createDomElements";

let cityToDisplay

function getUserLocation() {
    okButton.addEventListener('click', (e) => {
        e.preventDefault()
        if (userInputCity.value !== '') {
            cityToDisplay = userInputCity.value.toLowerCase()
            console.log(cityToDisplay)
            saveCity(cityToDisplay)
            userInputCity.value = ''
            updateDisplay()
        }
    })
}

export { getUserLocation, cityToDisplay }