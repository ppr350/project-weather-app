# Project To Do List
# Ver. 1.0

### Stable version
- Added basic CSS, which targeted to provide a contrasty layout with miminal colours

### Possible future update(s):
- time related functions (days remaining, clock, etc...)

## App Logic

### On page loads :
>
    if
    data exists in localStorage
    >
    load data from it

    else
    data doesn’t exist in localStorage 
    >
    create a new empty array to store data
    
    create a default project called 'TO DO'

### Add eventListener to display language :
>
    if
    user clicks "Gaeilge" :
    >>
    display Irish languge on page,

    else if
    user clicks "English" :
    >>
    display English language on page,

### Add eventListener to project container :
>
    if
    user clicks on project container
    >>
    trigger project container’s eventListener
    
    eventListener determines what part of project container is clicked
        if
        it’s a checkbox :
        >>>
            if
            checked
            >>>>
            add "isComplete" class to the project and its tasks,

            add linethrough to the project and its tasks,
            if
            unchecked
            >>>>
            remove "isComplete" class to the project and its tasks,

            remove linethrough to the project and its tasks,

        else if
        it’s a project name :
        >>>
        remove ‘active’ class on project in the same level if there is any,

        remove existing task(s) on the task section if there is any,

        add an “active” class on that project name,

        display project info
            if
            the project has info displayed at the time (description, date, priority) :
            >>>>
            hide the project info,

            else if
            the project does not have info at the time:
            >>>>
            show the project info,

                if
                there is info on display at the time from another project,
                >>>>>
                collapse info on another project
        
        remove project info on previously active project,

        highlight the project name with CSS,

        display the project’s task section,
        >>>>
            if
            the task section is empty :
            >>>>>
            display an empty textarea for user to enter new task,

            display an optional description textarea for user to enter description for the new task,

            display calendar for user to select due date,

            display a radio button for user to select priority,

            addEventListener to listen to “enter”,

            get the values that user has just inputted,

            call the HTML task template, this template should contain places to store task name, checkbox, due date and priority,

            give this task the same className as its main project’s id,

            add a checkbox,

            import date.fns and use one of its libraries function to calculate due date,

            add “readonly” attribute to this task textarea and it’s description textarea,

            take data from this new task and add them to the project’s subItem array as an object,

            update the new value to localStorage,

            else if
            the task section has existing task(s) :
            >>>>>>
                if
                the existing task’s parent project is not the same project that the user has just clicked :
                >>>>>>>
                remove all existing tasks,

                populate the empty task section with task that belongs to the project that was just clicked,

                if
                user clicks on an existing readonly textarea with value :
                >>>>>>>
                remove “readonly” attribute on that textarea to enable user edit the task,

                listen to user’s new value,

                update that textarea with the new value,

                add “readonly” attribute to the textarea,

                update the new value to localStorage,

                if
                user clicks on a task’s checkbox :
                >>>>>>>
                    if
                    check
                    >>>>>>>>
                    update the check status,

                    add css style line through to the task next to it,

                    update the checked state to localStorage,

                    if
                    uncheck
                    >>>>>>>>
                    update the checked status,

                    remove css style line through to the task next to it,

                    update the checked state to localStorage,

                if
                user clicks on an empty space inside the task section :
                >>>>>>>
                    if
                    task section does not contains empty textarea :
                    >>>>>>>>
                    generate a new textarea for new task,

                    else if
                    task section contains empty textarea :
                    >>>>>>>>
                    Do nothing 

        if
        user press the "x" button :
        >>>>
        it deletes the project and all its tasks and info,

        if
        user press the "i" button :
        >>>>
        A modal shows up :
            >>>>>
            if
            user clicks on one of the priority radio buttons :
            >>>>>>
            options are “low”, “medium” and “high”,

            if
            user clicks on the description :
            >>>>>>
            let user write description on a text type input,

            if
            user clicks on due date:
            >>>>>>
            let user modify due date,

            after submission, the project info should displays below the active project item,

    else
    >>
    do nothing

### Add eventListener to task container :

>
    if 
    user clicks on task container :
    >
        if
        there is no active project
        >>
        Do nothing
        
        else if
        there is an active project
        >>
            if
            there is no task yet :
            >>>
            add a new taskarea,

            else if
            there is an empty taskarea :
            >>>
            remove the empty taskarea,

            else if
            there is existing task(s)
            >>>
                if
                user clicks on the empty area :
                >>>>
                Generate a new taskarea

                else if
                user clicks on an existing task :
                >>>>
                remove new empty taskarea if there is any,

                remove "readonly" attribute on that taskarea and let user edit the task,

                else if
                user clicks on a checkbox :
                >>>>
                    if
                    checked :
                    >>>>>
                    add linethrough on the textarea nbext to it,

                    else if
                    unchecked :
                    >>>>>
                    remove linethrough on the textarea next to it,


### add eventListener to project input button :
>
    if
    user press the type=“submit” button without entering a value in the input box
    >>
    return

    else
    project name equals to entered value 
    >>
    create a new project id for this new project name using new Date().valueOf()
    >>
    set isComplete Boolean value to “false”



### Special Thanks
Discord users Blu3, Jonathan || saltypirate10 on TOP's Javascript-help-1 for advice