import { userCity, okButton } from "./index";

function getUserLocation() {
    okButton.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(e)
        const city = userCity.value.toLowerCase()
        console.log(city)
        userCity.value = ''
    })
}

export { getUserLocation }