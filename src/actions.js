import { forEach, indexOf, nth, templateSettings } from "lodash";
import { toLocalStorage, items } from "./storage";
import { taskTemplate, myProjectTasks, } from "./index";
import { saveTask, loadTask, loadInfo } from "./memory";


function activateProject(targetProject) {
    const projects = document.querySelectorAll('.project-item')
    for (let i = 0; i < projects.length; i++) {
        projects[i].classList.remove('active');
    }

    targetProject.parentElement.classList.add('active');

    loadTask(targetProject)
    loadInfo(targetProject)
}

function toggleProjectIsComplete(checkBoxItem) {
    const
        parentElement = checkBoxItem.parentElement,
        completedItem = parentElement.querySelector(':nth-child(2)')

    items.forEach(item => {
        if (item.id == completedItem.htmlFor) {
      
            item.isComplete = !item.isComplete;
            if (item.isComplete && item.subItem != '') {
                completedItem.classList.add('completed')
                const subItem = item.subItem
                subItem.forEach(task => {
                    task.isComplete = true                        
                })
                
                const subTasks = document.getElementsByClassName(item.id)
                for (let i = 0; i < subTasks.length; i++) {
                    const subTaskCheckBoxes = subTasks[i].parentElement.previousElementSibling
                    subTaskCheckBoxes.checked = true
                }
                
            } else if (!item.isComplete) {
                completedItem.classList.remove('completed')
                const subItem = item.subItem
                subItem.forEach(task => {
                    task.isComplete = false
                })

                const subTasks = document.getElementsByClassName(item.id)
                for (let i = 0; i < subTasks.length; i++) {
                    const subTaskCheckBoxes = subTasks[i].parentElement.previousElementSibling
                    subTaskCheckBoxes.checked = false
                }

            }
        }
    })
    toLocalStorage();
}

function generateTask(projectName, item) {
    if (item.readOnly == true) {
        item.removeAttribute('readonly');
        let
            thisItem = item.parentElement.parentElement,
            index = 0
        while (thisItem.previousElementSibling) {
            index += 1
            thisItem = thisItem.previousElementSibling                    
        }

        item.addEventListener('keydown', function(e) {

            if (e.keyCode == 13 && item.value.length == 1) {
                e.preventDefault();
                e.stopImmediatePropagation()

                item.parentElement.parentElement.remove()
                toLocalStorage()
            }

            else if (e.keyCode == 13 && item.value != '') {
                e.preventDefault();
                e.stopImmediatePropagation()

                items.forEach(itemInLocalStorage => {
                        if (itemInLocalStorage.id === parseInt(projectName.htmlFor)) {
                            itemInLocalStorage.subItem[index].name = item.value;

                            toLocalStorage()
                        }
                    })
                    item.setAttribute('readonly', 'true');
                    item.blur()                   
            }
        }, true)

    } else if (item.value == undefined) {

        if (item.readOnly == undefined) {

            const
                taskSection = document.importNode(taskTemplate.content, true),
                textArea = taskSection.querySelector('textarea')

            myProjectTasks.appendChild(taskSection);
            textArea.focus();

            textArea.addEventListener('keydown', function(e) {
                if (e.keyCode == 13 && textArea.value != '' && item.readOnly !== true) {
                    textArea.setAttribute('readonly', 'true');
                    saveTask(projectName, textArea.value)
                    textArea.blur()
                }
            })
        } else if (item.readOnly == true) {
            return
        }
    } else {
            return
    }
}

export { activateProject, toggleProjectIsComplete, generateTask }