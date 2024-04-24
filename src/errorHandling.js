import magnifyingGlass from './magnifiyGlass.png'
import { displayForecast } from "./index"

function displayError() {
    const errorIcon = new Image();
    errorIcon.id = 'error-icon'
    errorIcon.src = magnifyingGlass

    const errorMessage = document.createElement('span')
    errorMessage.id = 'error-message'
    errorMessage.innerText = 'City Not Found'

    displayForecast.appendChild(errorIcon)
    displayForecast.appendChild(errorMessage)
}

export { displayError }