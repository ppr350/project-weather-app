import { infoDialog, projectDescription, projectDueDate, priorityButtons, doneButton } from "./index";
import { saveInfo } from "./memory";
import { getDate } from "date-fns";

function generateInfoButton(project) {
    
    const btn = document.createElement('BUTTON')
    btn.classList.add('add-info')
    const btnText = document.createTextNode('i')
    btn.appendChild(btnText)
    project.appendChild(btn)
    btn.addEventListener('click', function(e) {
        e.preventDefault()
        getInfo(project)
    })
}

function getInfo(project) {

    let info = []

    infoDialog.showModal();
    doneButton.addEventListener('click', function() {

        let getDescription
        console.log(projectDescription.value)
        getDescription = projectDescription.value
        
        let getDueDate
        console.log(projectDueDate.value)
        getDueDate = projectDueDate.value
        
        let getPriority
        for (const priorityButton of priorityButtons) {
            if (priorityButton.checked) {
                console.log(priorityButton.value)
                getPriority = priorityButton.value
                break
            }
        }
        info = [getDescription, getDueDate, getPriority]
        saveInfo(project, info)
        projectDescription.value = ''
        projectDueDate.value = ''
        for (let i = 0; i < priorityButtons.length; i++) {
            priorityButtons[i].checked = false
        }
    })
}

export { generateInfoButton, getInfo }