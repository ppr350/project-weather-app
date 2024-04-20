import { toLocalStorage, items } from "./storage"
import { activateProject, toggleProjectIsComplete, generateTask } from "./actions"
import { myProjectTasks } from "./index"
import { last } from "lodash";
import { loadInfo } from "./memory";

function clickedOnProjectSection(item) {
    if (item.matches('[type="checkbox"]')) {

        myProjectTasks.innerHTML = ''

        activateProject(item.nextElementSibling)
        toggleProjectIsComplete(item);
        return;

    } else if (item.classList.contains('delete-project')) {

        return

    } else if (item.parentElement.classList.contains('project-item')) {

        if (item.parentElement.classList.contains('active')) {

            if (item.children.length > 1) {
                let firstChild = item.querySelector('.project-name')
                firstChild.nextElementSibling.remove()

            } else if (item.children.length == 1) {
                loadInfo(item)
            }

        } else {
            myProjectTasks.innerHTML = ''

            if (document.querySelectorAll('.project-name').nextElementSibling) {
                document.querySelectorAll('.project-name').nextElementSibling.remove()
            }

            activateProject(item);
            loadInfo(item)
        }
    } else {

        return

    }
}

function clickedOnTaskSection(e) {
    const task = e.target

    if (task.matches('[type="checkbox"]')) {
        const projectName = document.querySelectorAll('.active')[0].children[1]

        if (task.nextElementSibling.children[0].value == '' || projectName.previousElementSibling.checked == true) {
            e.preventDefault()

        } else {
            const itemClass = task.nextElementSibling.childNodes[1]
            if (myProjectTasks.lastElementChild.children[1].children[0].readOnly == false) {

                myProjectTasks.lastElementChild.remove()
            }

            items.forEach(item => {
                if (item.id == itemClass.classList) {
                    for (let i = 0; i < item.subItem.length; i++) {
                        if (item.subItem[i].name == itemClass.value) {
                            item.subItem[i].isComplete = !item.subItem[i].isComplete
                            toLocalStorage()
                        }
                    }
                }
            })     
        }
        
    } else if (document.getElementsByClassName('active').length !== 0) {
        const 
            projectName = document.querySelectorAll('.active')[0].children[1],
            lastTaskIsReadOnly = myProjectTasks.lastElementChild.children[1].children[0]

        if (task.nodeName != 'TEXTAREA' && !task.matches('[type="checkbox"]')) {

            if (lastTaskIsReadOnly.readOnly == false && lastTaskIsReadOnly.value == '') {
                const firstTaskIsReadOnly = myProjectTasks.firstElementChild.children[1].children[0]

                if (firstTaskIsReadOnly.readOnly == true) {
                    lastTaskIsReadOnly.parentElement.parentElement.remove()
                }

            } else if (lastTaskIsReadOnly.readOnly == true && projectName.previousElementSibling.checked != true) {
                generateTask(projectName, '')

            } else if (lastTaskIsReadOnly.value != '' && projectName.previousElementSibling.checked != true) {
                generateTask(projectName, '')
            }

        } else if (task.nodeName == 'TEXTAREA') {
            const allTextArea = document.querySelectorAll('.task-textarea')
            allTextArea.forEach(textArea => {

                if (textArea.value != '') {
                    textArea.setAttribute('readonly', 'true')
                }
            })

            if (lastTaskIsReadOnly.readOnly == false) {
                const taskContainer = task.parentElement.parentElement.parentElement

                if (task.value != taskContainer.lastElementChild.children[1].children[0].value) {

                    task.removeAttribute('readonly');

                    if (lastTaskIsReadOnly.value == '') {
                        lastTaskIsReadOnly.parentNode.parentNode.remove();
                    }
                    if (lastTaskIsReadOnly.value != '') {
                        lastTaskIsReadOnly.setAttribute('readonly', 'true')
                    }

                    let
                        thisItem = task.parentElement.parentElement,
                        index = 0;

                    while (thisItem.previousElementSibling) {
                        index += 1
                        thisItem = thisItem.previousElementSibling                       
                    }
                    
                    task.addEventListener('keydown', function(e) {
                    if (e.keyCode == 13 && task.value != '') {

                        e.preventDefault();    
                        items.forEach(itemOnLocalStorage => {
                            if (itemOnLocalStorage.id === parseInt(projectName.htmlFor)) {
                                itemOnLocalStorage.subItem[index].name = task.value;                             
                                toLocalStorage();
                            }
                        })
                        task.setAttribute('readonly', 'true');
                        }
                    })

                }

            } else if (lastTaskIsReadOnly.readOnly == true) {

                generateTask(projectName, task)
            }

        }
    } else {
        return
    }
}

export { clickedOnProjectSection, clickedOnTaskSection }