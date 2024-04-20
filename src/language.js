import { title, submitProjectButton, myProjects, myTasksTitle, projectInfo, description, dueDate, priority, lowPriority, mediumPriority, highPriority, infoDoneButton } from "./index";

function changeLanguage(choice) {
    console.log('change language here')
    if (choice == 'gaeilge') {
        title.innerText = 'LIOSTA A DHÉANAMH'
        submitProjectButton.innerText = 'TIONSCADAL NUA'
        myProjects.innerText = 'MO THIONSCADAIL'
        myTasksTitle.innerText = 'TASCANNA TIONSCADAIL'
        projectInfo.innerText = 'EOLAS TIONSCADAIL'
        description.innerText = 'CUNTAS'
        dueDate.innerText = 'DÁTA DLITE'
        priority.innerText = 'TOSAÍOCHT'
        lowPriority.innerText = 'ÍSEAL'
        mediumPriority.innerText = 'MEÁNACH'
        highPriority.innerText = 'ARD'
        infoDoneButton.innerText = 'DÉANTA'
        
    } else if(choice == 'english') {
        title.innerText = 'TO DO LIST'
        submitProjectButton.innerText = 'NEW PROJECT'
        myProjects.innerText = 'MY PROJECTS'
        myTasksTitle.innerText = 'MY PROJECT TASKS'
        projectInfo.innerText = 'PROJECT INFO'
        description.innerText = 'DESCRIPTION'
        dueDate.innerText = 'DUE DATE'
        priority.innerText = 'PRIORITY'
        lowPriority.innerText = 'LOW'
        mediumPriority.innerText = 'MEDIUM'
        highPriority.innerText = 'HIGH'
        infoDoneButton.innerText = 'DONE'
    }
}

export { changeLanguage }