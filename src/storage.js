import { forEach, indexOf, nth, templateSettings } from "lodash";
import { projectTemplate, displayProjects, myProjectTasks } from "./index";
import { generateProjectDeleteButton } from "./delete"
import { generateInfoButton } from "./moreInfo";
import { saveProject } from "./memory";

let items = JSON.parse(localStorage.getItem('todolist')) || [];

function fromLocalStorage(itemsInLocalStorage) {
    if (items.length === 0) {

        saveProject('TO DO')
    }

    if(localStorage.getItem('todolist')) {

        reloadPage()

        itemsInLocalStorage = JSON.parse(localStorage.getItem('todolist'))
        for (let i = 0; i < itemsInLocalStorage.length; i++) {
            const projectElement = document.importNode(projectTemplate.content, true)
            const projectCheckBox = projectElement.querySelector('input')
            const projectLabel = projectElement.querySelector('label')
            projectLabel.htmlFor = itemsInLocalStorage[i].id
            projectCheckBox.checked = itemsInLocalStorage[i].isComplete == false ? false : true

            generateInfoButton(projectLabel.parentElement)
            generateProjectDeleteButton(projectLabel.parentElement)
                     
            projectLabel.append(itemsInLocalStorage[i].name);
            displayProjects.appendChild(projectElement);

            items = itemsInLocalStorage;
        }
    }
}

function toLocalStorage() {
    localStorage.setItem('todolist', JSON.stringify(items));
}

function reloadPage() {
    items = [];
    displayProjects.innerHTML = '';
    myProjectTasks.innerHTML = '';
}


export { fromLocalStorage, toLocalStorage, reloadPage, items }