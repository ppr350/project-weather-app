import "./style.css";
import { fromLocalStorage } from "./storage";
import { clickedOnProjectSection, clickedOnTaskSection } from "./clickEvents";
import { changeLanguage } from './language';
import { saveProject } from './memory'

// DIALOG
const
    infoDialog = document.querySelector('#get-info-dialog'),
    projectDescription = document.querySelector('#description'),
    projectDueDate = document.querySelector('#due-date'),
    priorityButtons = document.querySelectorAll('input[name="priority"]'),
    doneButton = document.querySelector('#done-button')

// PROJECTS AND TASKS
const
    userInput = document.querySelector('#user-input-project'),
    submitProjectButton = document.querySelector('#submit-project-btn'),
    displayProjects = document.querySelector('#projects'),
    projectTemplate = document.querySelector('#project-template'),
    taskTemplate = document.querySelector('#task-template'),
    infoTemplate = document.querySelector('#info-template'),
    checkBox = document.querySelectorAll('.checkbox'),
    sidebarContainer = document.querySelector('.sidebar-section'),
    myProjectTasks = document.querySelector('.my-project-tasks'),
    taskSection = document.querySelector('#task-section')


// LANGUAGE //
const
    chooseGaeilge = document.querySelector('#gaeilge'),
    chooseEnglish = document.querySelector('#english'),
    title = document.querySelector('.title'),
    myProjects = document.querySelector('.my-projects'),
    myTasksTitle = document.querySelector('.my-tasks-title'),
    projectInfo = document.querySelector('#info-title'),
    description = document.querySelector('#description-section').firstElementChild,
    dueDate = document.querySelector('#due-date-section').firstElementChild,
    priority = document.querySelector('#priority'),
    lowPriority = document.querySelector('#low-priority').nextElementSibling,
    mediumPriority = document.querySelector('#medium-priority').nextElementSibling,
    highPriority = document.querySelector('#high-priority').nextElementSibling,
    infoDoneButton = document.querySelector('#done-button')

function startUp() {
    fromLocalStorage();
    submitProjectButton.addEventListener('click', function(e) {
        e.preventDefault();
        saveProject(userInput.value)
        fromLocalStorage();
        userInput.value = ''
    })
    displayProjects.addEventListener('click', function(e) {
        clickedOnProjectSection(e.target);
    })
    taskSection.addEventListener('click', function(e) {
        clickedOnTaskSection(e)
    })
    chooseGaeilge.addEventListener('click', function(e) {
        changeLanguage('gaeilge');
    })
    chooseEnglish.addEventListener('click', function(e) {
        changeLanguage('english')
    })
}
startUp();

export { userInput, submitProjectButton, displayProjects, projectTemplate, taskTemplate, infoTemplate, checkBox, sidebarContainer, chooseGaeilge, chooseEnglish, title, myProjects, myProjectTasks, myTasksTitle, infoDialog, projectDescription, projectDueDate, priorityButtons, doneButton, projectInfo, description, dueDate, priority, lowPriority, mediumPriority, highPriority, infoDoneButton }