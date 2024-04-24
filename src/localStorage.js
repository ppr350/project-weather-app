let currentCity = JSON.parse(localStorage.getItem('city')) || ['dublin']

function saveCity(cityToDisplay) {
    currentCity[0] = cityToDisplay
    localStorage.setItem('city', JSON.stringify(currentCity))
}

export { currentCity, saveCity }