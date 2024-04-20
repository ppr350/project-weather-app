import { toLocalStorage, items } from "./storage";
import { taskTemplate, myProjectTasks, infoTemplate, } from "./index";
import { generateTask } from "./actions"

function saveProject(newItemFromUser) {

    let newItem = {};
    if (newItemFromUser != '') {
        newItem.name = newItemFromUser;
        newItem.id = new Date().valueOf();
        newItem.isComplete = false;
        newItem.subItem = [];
        newItem.info = [];
            
        items.push(newItem);

        toLocalStorage();
    }
    const projects = document.querySelectorAll('.project-item')
    for (let i = 0; i < projects.length; i++) {
        projects[i].classList.remove('active');
    }

    projects.forEach(project => {
        if (project.children[1].htmlFor == newItem.id.toString) {
            return
        }
    })
}

function saveInfo(project, info) {

    let newInfo = {}
    newInfo.description = info[0]
    newInfo.dueDate = info[1]
    newInfo.priority = info[2]
    console.log(newInfo)
    console.log(project.children[1])

    items.forEach(item => {
        if (item.id === parseInt(project.children[1].htmlFor)) {
            console.log(item)
            item.info = (newInfo)
            toLocalStorage()
        }
    })

}

function loadInfo(activeProject) {

    // DOM
    const projects = document.querySelectorAll('.project-name')
    Array.from(projects).forEach(project => {
        if (project.nextElementSibling) {

            project.nextElementSibling.remove()
        }
    })
    
    // localStorage
    items.forEach(item => {

        if (item.id === parseInt(activeProject.htmlFor)) {

            const
                infoElement = document.importNode(infoTemplate.content, true),
                projectInfo = infoElement.firstElementChild

            let itemInfoArray = new Array()

            itemInfoArray[0] = item.info.description
            itemInfoArray[1] = item.info.dueDate
            itemInfoArray[2] = item.info.priority

            for (let i = 0; i < itemInfoArray.length; i++) {
                if (itemInfoArray[i] !== undefined || itemInfoArray[i] != null) {
                    projectInfo.children[i].innerText = itemInfoArray[i]
                }
                
            }
            activeProject.appendChild(infoElement)
            
        }
    })
}

function saveTask(projectName, newTaskName) {
    let newSubTask = {};

    newSubTask.name = newTaskName;
    newSubTask.className = projectName.htmlFor;
    newSubTask.isComplete = false;

    items.forEach(item => {
        if (item.id === parseInt(projectName.htmlFor)) {
            item.subItem.push(newSubTask);
            toLocalStorage();
        } 
    })
}

function loadTask(activeProject) {
    if (myProjectTasks) {
        const myProjectTasks = document.querySelector('.my-project-tasks')
        items.forEach(item => {
            if (item.id === parseInt(activeProject.htmlFor)) {
                item.subItem.forEach(task => {
                    const
                        taskItem = document.importNode(taskTemplate.content, true),
                        textArea = taskItem.querySelector('textarea'),
                        taskCheckbox = taskItem.querySelector('.checkbox')

                    textArea.value = task.name;
                    textArea.classList = task.className;
                    textArea.setAttribute('readonly', 'true');
                    task.isComplete == true ? taskCheckbox.checked = true : taskCheckbox.checked = false

                    myProjectTasks.appendChild(taskItem);
                })
            }
        })
    } if (myProjectTasks.children.length < 1) {
        
        const projectName = document.querySelectorAll('.active')[0].children[1]
        generateTask(projectName, '')
    }
}

export { saveProject, saveInfo, loadInfo, saveTask, loadTask }