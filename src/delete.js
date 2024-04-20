import { saveTask, loadTask } from "./memory";
import { fromLocalStorage, toLocalStorage, items, reloadPage } from "./storage";

function generateProjectDeleteButton(project) {
    const btn = document.createElement('BUTTON')
    btn.classList.add('delete-project')
    const btnText = document.createTextNode('X')
    btn.appendChild(btnText)
    project.appendChild(btn)
    btn.addEventListener('click', function(e) {
        e.preventDefault()
        deleteProject(btn.parentElement)
    })
}

function generateTaskDeleteButton(task) {
    const btn = document.createElement('BUTTON')
    btn.classList.add('delete-task')
    const btnText = document.createTextNode('X')
    btn.appendChild(btnText)
    task.prepend(btn)
    btn.addEventListener('click', function(e) {
        e.preventDefault()
        deleteTask(btn.parentElement)
    })
}

function deleteProject(project) {
    items.forEach(item => {
        if (item.name == project.children[1].innerText) {

            const index = items.indexOf(item)
            items.splice(index,1)
            toLocalStorage()
            fromLocalStorage()
        }
    })
}

function deleteTask(task) {

}


export { generateProjectDeleteButton, generateTaskDeleteButton, deleteProject, deleteTask }