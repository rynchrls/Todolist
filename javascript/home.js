let navActivate = document.querySelector('.nav-btn');
let nav =document.querySelector('.navlinks');
navActivate.onclick = () => {
    nav.classList.toggle('nav-active')
}
let activePage = window.location.pathname;
let navigate = document.querySelectorAll('.link a')
.forEach(links => {
    if(links.href.includes(`${activePage}`)) {
        let indicate = links;
        indicate.classList.add('navigate-active')
    }
});




let todayTask = JSON.parse(localStorage.getItem('task')) || [];

let typeTask = document.getElementsByClassName('typeTask')[0];

typeTask.onkeyup = (e) => {
    if(e.keyCode === 13) {
        let newTask = document.createElement('div');
        newTask.classList.add('per-task');
        let taskAdded = document.getElementsByClassName('taskAdded')[0];
    
        let newTaskContent = `  <div class="inputTask">
                                    <div class="forinputTask">
                                        <div class="check">
                                            <div class="checked"></div>
                                        </div>
                                        <h6 class="taskText">${e.target.value}</h6>
                                    </div>
                                    <div class="dash">></div>
                                </div>  
                                <div class="dueAndType">
                                </div>`;
        newTask.innerHTML = newTaskContent;
    
        taskAdded.append(newTask);


        let perTask = document.getElementsByClassName('per-task');
        for (let i = 0; i < perTask.length; i++) {
            const oneTask = perTask[i];
            oneTask.classList.add('per-task-active')
        }
        e.target.value = '';
        let descrip = document.getElementsByClassName('description')[0];
        if(descrip.hasAttribute('readonly', true)){
            descrip.removeAttribute('readonly', true);
        }
        descrip.value = '';
    }
    oneTask();

}

function oneTask() {
        let perTask = document.getElementsByClassName('per-task');
        for (let i = 0; i < perTask.length; i++) {
            const oneTask = perTask[i];
            oneTask.classList.add('per-task-active')
 
            oneTask.onclick = (event) => {
                let parent = event.target;
                let addParent = parent.parentElement;
                let tasktodo = document.getElementsByClassName('taskTodoAll')[0];
                let taskText = addParent.getElementsByClassName('taskText')[0];
                let taskName = tasktodo.getElementsByClassName('taskName')[0];
                taskName.innerHTML = taskText.innerText;

 
                // console.log(taskName.innerText)
                // if(task.some((x)=> x.taskName) === taskName.innerText){
                //     console.log('congrats')
                // }

                const dropdowns = document.querySelectorAll('.dropdown');

                dropdowns.forEach(dropdown => {
                const select = dropdown.querySelector('.select');
                const caret = dropdown.querySelector('.caret');
                const menu = dropdown.querySelector('.meNu');
                const options = dropdown.querySelectorAll('.meNu li');
                const selected = dropdown.querySelector('.selected')

                select.onclick = () => {
                    menu.classList.toggle('menu-active')
                    caret.classList.toggle('caret-active')
                        options.forEach(option => {
                            option.onclick = () => {
                                selected.innerText = option.innerText;
                                menu.classList.remove('menu-active')
                                caret.classList.remove('caret-active');
                                option.classList.add('li-active')
                                options.forEach(option => {
                                    option.classList.remove('li-active')
                                })
                                option.classList.add('li-active')
                            }
                        })
                    }
                })

                let firstDate = document.getElementsByClassName('firstDate')[0];
                firstDate.style.display = 'block';
                let due = document.getElementsByClassName('due')[0];
                due.innerText = 'Due date:';







                let descrip = document.getElementsByClassName('description')[0];
                descrip.value = '';
                if(descrip.hasAttribute('readonly', true)){
                    descrip.removeAttribute('readonly', true);
                }

                let section_2 = document.getElementsByClassName('section-2')[0];
                tasktodo.classList.add('taskTodoAll-active')
                section_2.classList.add('section-2-inactive')

                let prio = document.getElementsByClassName('prio')[0];
                let leastprio = document.getElementsByClassName('least-prio')[0];

                prio.classList.remove('prio-active')
                prio.onclick = () => {
                    prio.classList.add('prio-active')
                    leastprio.classList.remove('least-prio-active')
                }
                leastprio.classList.remove('least-prio-active')
                leastprio.onclick = () => {
                    leastprio.classList.add('least-prio-active')
                    prio.classList.remove('prio-active')
                }

                let saveBtn = document.getElementsByClassName('save-btn')[0];
                saveBtn.innerText= 'Save';
                saveBtn.style.display = 'block';
                saveBtn.onclick = () => {
                    let taskname = document.getElementsByClassName('taskName')[0].innerText;
                    let descrip = document.getElementsByClassName('description')[0].value;
                    let selectedList = document.getElementsByClassName('selected')[0].innerText;
                    let due = document.getElementsByClassName('firstDate')[0].value;

                    if(prio.classList.contains('prio-active') && selectedList === 'Personal'){

                        todayTask.push({
                            tags: prio.innerText,
                            taskName: taskname,
                            due: due,
                            List: selectedList,
                            item: 1,
                            description: descrip,
                            date: 'today'
                        })
                        localStorage.setItem('task', JSON.stringify(todayTask))
                    }
                    else if(prio.classList.contains('prio-active') && selectedList === 'Work'){

                        todayTask.push({
                            tags: prio.innerText,
                            taskName: taskname,
                            due: due,
                            List: selectedList,
                            item: 1,
                            description: descrip,
                            date: 'today'
                        })
                        localStorage.setItem('task', JSON.stringify(todayTask))
                    }

                    else if(prio.classList.contains('prio-active') && selectedList === 'Study'){

                        todayTask.push({
                            tags: prio.innerText,
                            taskName: taskname,
                            due: due,
                            List: selectedList,
                            item: 1,
                            description: descrip,
                            date: 'today'
                        })
                        localStorage.setItem('task', JSON.stringify(todayTask))
                    }

                    if(leastprio.classList.contains('least-prio-active') && selectedList === 'Personal'){

                        todayTask.push({
                            tags: leastprio.innerText,
                            taskName: taskname,
                            due: due,
                            List: selectedList,
                            item: 1,
                            description: descrip,
                            date: 'today'
                        })
                        localStorage.setItem('task', JSON.stringify(todayTask))
                    }

                    else if(leastprio.classList.contains('least-prio-active') && selectedList === 'Work'){

                        todayTask.push({
                            tags: leastprio.innerText,
                            taskName: taskname,
                            due: due,
                            List: selectedList,
                            item: 1,
                            description: descrip,
                            date: 'today'
                        })
                        localStorage.setItem('task', JSON.stringify(todayTask))
                    }
                    if(leastprio.classList.contains('least-prio-active') && selectedList === 'Study'){

                        todayTask.push({
                            tags: leastprio.innerText,
                            taskName: taskname,
                            due: due,
                            List: selectedList,
                            item: 1,
                            description: descrip,
                            date: 'today'
                        })
                        localStorage.setItem('task', JSON.stringify(todayTask))
                    }

                    addParent.remove();
                    tasktodo.classList.remove('taskTodoAll-active')
                    section_2.classList.remove('section-2-inactive')
                    oneTask.classList.remove('heightFit')
                    GenerateTask();

                }
                let deleteTask = document.getElementsByClassName('del-btn')[0];

                deleteTask.style.display = 'none';
            }
        }
}

let todaytaskDone = JSON.parse(localStorage.getItem('taskDone')) || [];

let Personal = JSON.parse(localStorage.getItem('Personal')) || [];
let Work = JSON.parse(localStorage.getItem('Work')) || [];
let Study = JSON.parse(localStorage.getItem('Study')) || [];

let GenerateTask = () => {
    
    let newElement = document.getElementsByClassName('todo-added')[0];

    let Today = todayTask.filter((x) => x.date === 'today')
    newElement.innerHTML = Today.map((x) =>{
        let {taskName, tags, due, List, item, description} = x 
        return (`
        <div class="division">
            <div class="check">
                <div class="checked"></div>
            </div>
            <div class="per-task2 per-task-active" id="${item}" onclick="openTask(event)">
                <div class="inputTask">
                    <div class="forinputTask">
                        <div class="descriPtion">${description}</div>
                        <h6 class="taskText">${taskName}</h6>
                    </div>
                    <div class="dash">></div>
                </div>  
                <div class="dueAndType">
                    <div class="dueDates">Due: ${due}</div>
                    <div class="typeofTag">${tags}</div>
                    <div class="typeofList">
                        <div class="box"></div>
                        <h4 class="natureList">${List}</h4>
                    </div>
                </div>
            </div>
        </div>`)
    }).join("");
    let countings = document.getElementById('todayCount');
    let today = todayTask.filter((x) => x.date === 'today')
    countings.innerText = Today.length

    let todayCounts = document.getElementById('today');
    todayCounts.innerText = today.length


    let week = todayTask.filter((x) => x.date === 'week')
    let countingsweek = document.getElementById('week');
    countingsweek.innerText = week.length

    let Month = todayTask.filter((x) => x.date === 'month')
    let monthCounts = document.getElementById('month');
    monthCounts.innerText = Month.map((x) => x.item).reduce((x, y) => x+y,0)

    let Year = todayTask.filter((x) => x.date === 'year')
    let yearCounts = document.getElementById('year');
    yearCounts.innerText = Year.map((x) => x.item).reduce((x, y) => x+y,0)


    let tag = document.getElementsByClassName('typeofTag');
    for (let i = 0; i < tag.length; i++) {
        const tagColor = tag[i];
        if(tagColor.innerText === 'P'){
            tagColor.style.backgroundColor = 'rgb(121, 220, 121)';
        }
        else {
            tagColor.style.backgroundColor = 'rgb(241, 124, 88)';
        }        
    }

    let typeofList = document.getElementsByClassName('natureList');
    for (let i = 0; i < typeofList.length; i++) {
        const type = typeofList[i];
        if(type.innerText === 'Work'){
            let box = document.getElementsByClassName('box')[i];
            box.style.backgroundColor = 'rgb(252, 97, 104)';
        }
        else if(type.innerText === 'Study'){
            let box = document.getElementsByClassName('box')[i];
            box.style.backgroundColor = 'rgb(97, 252, 242)';
        }
        
    }

    let delbtn = document.getElementsByClassName('del-btn');
    for (let i = 0; i < delbtn.length; i++) {
        const deletenow = delbtn[i];
        deletenow.addEventListener('click', removeBtn)
    }


    let tas_K = document.getElementsByClassName('check')

    for (let i = 0; i < tas_K.length; i++) {
        let donetask = tas_K[i];
        donetask.onclick = (event) => {
            let giy = event.target
            let parent = giy.parentElement.parentElement;
            let checked = parent.getElementsByClassName('checked')[0];
            checked.classList.add('checkedActive');

            setTimeout(function(){
                parent.remove()
            }, 500)
            
            let diVi = parent.getElementsByClassName('taskText')[0];
            todayTask = todayTask.filter((x) => x.taskName !== diVi.innerText)
            localStorage.setItem('task', JSON.stringify(todayTask))

            let today = todayTask.filter((x) => x.date === 'today')
            let countings = document.getElementById('todayCount');
            countings.innerText = today.map((x) => x.item).reduce((x,y) => x+y, 0)
        
            let todayCounts = document.getElementById('today');
            todayCounts.innerText = today.map((x) => x.item).reduce((x,y) => x+y, 0)


            if(todaytaskDone.some((x) => x.taskName === diVi.innerText)){
                alert('already done');
                return;
            }

            todaytaskDone.push({
                taskName: diVi.innerText,
                item: 1,
                date: 'today'
            })
            localStorage.setItem('taskDone', JSON.stringify(todaytaskDone))
            // console.log(todaytaskDone.map((x) => x.taskName))
    
            let Counts = document.getElementById('count');
            Counts.innerText = todaytaskDone.map((x) => x.item).reduce((x,y) => x+y, 0)
            // Counts.innerText = todaytaskDone.map((x) => x.item).reduce((x,y) => x+y, 0)


            let Personaltask = (todayTask.filter((x) => x.List === 'Personal')) || [];

            let personalCounts = document.getElementById('personal');
            personalCounts.innerText = Personaltask.length
        
        
            let Worktask = (todayTask.filter((x) => x.List === 'Work')) || [];
        
            let workCounts = document.getElementById('work');
            workCounts.innerText = Worktask.length
        
        
        
            let Studytask = (todayTask.filter((x) => x.List === 'Study')) || [];
        
            let studyCounts = document.getElementById('study');
            studyCounts.innerText = Studytask.length
        }

        
    }

    let Personaltask = (todayTask.filter((x) => x.List === 'Personal')) || [];
    localStorage.setItem('Personal', JSON.stringify(Personaltask));
    let personalCounts = document.getElementById('personal');
    personalCounts.innerText = Personaltask.length


    let Worktask = (todayTask.filter((x) => x.List === 'Work')) || [];
    localStorage.setItem('Work', JSON.stringify(Worktask));
    let workCounts = document.getElementById('work');
    workCounts.innerText = Worktask.length


    let Studytask = (todayTask.filter((x) => x.List === 'Study')) || [];
    localStorage.setItem('Study', JSON.stringify(Studytask));
    let studyCounts = document.getElementById('study');
    studyCounts.innerText = Studytask.length



    // let collectTask = (todayTask.filter((x) => x.List === 'Personal')) || [];
    // localStorage.setItem('Personal', JSON.stringify(collectTask));
    // let personalCounts = document.getElementById('personal');
    // personalCounts.innerText = collectTask.length

    // collectingD(newElement);

    // let tagg = newElement.getElementsByClassName('typeofTag');
    // for (let i = 0; i < tagg.length; i++) {
    //     let taggs = tagg[i];
    //     let listType = document.getElementsByClassName('natureList')[i].innerText;
    //     if(listType ==='Personal') {
    //         let taskforWork = document.getElementsByClassName('taskText')[i].innerText
    //         // console.log(listType, taggs.innerText, taskforWork)
    //         forPersonal.push({
    //             taskName: taskforWork,
    //             tag: taggs.innerText,
    //             item: 1
    //         })
    //         localStorage.setItem('personal', JSON.stringify(forPersonal))

    //         const Personal= forPersonal.filter(function(item, index) {
    //             return index === forPersonal.findIndex(function(obj) {
    //                 return (item.taskName === obj.taskName) && (item.tag === obj.tag);
    //             })
    //         })
    //         localStorage.setItem('Personal', JSON.stringify(Personal))

    //         let forpersonal = document.getElementById('personal');
    //         forpersonal.innerText = Personal.map((x) => x.item).reduce((x,y) => x+y, 0)
    //     }
        // if(listType === 'Work') {
        //     let taskforWork = document.getElementsByClassName('taskText')[i].innerText
        //     console.log(listType, taggs.innerText, taskforWork)
        // }
        // if(listType ==='Study') {
        //     let taskforWork = document.getElementsByClassName('taskText')[i].innerText
        //     console.log(listType, taggs.innerText, taskforWork)
        // }
        
    // }
    // let taskforWork = document.getElementsByClassName('taskText')[0].innerText
    // forList(forpersonal, listType, tagg,taskforWork)



    
    
}
GenerateTask();



let Personaltask = (todayTask.filter((x) => x.List === 'Personal')) || [];

let personalCounts = document.getElementById('personal');
personalCounts.innerText = Personaltask.length


let Worktask = (todayTask.filter((x) => x.List === 'Work')) || [];

let workCounts = document.getElementById('work');
workCounts.innerText = Worktask.length



let Studytask = (todayTask.filter((x) => x.List === 'Study')) || [];

let studyCounts = document.getElementById('study');
studyCounts.innerText = Studytask.length

let Counts = document.getElementById('count');
Counts.innerText = todaytaskDone.map((x) => x.item).reduce((x,y) => x+y, 0)
// function collectingD() {
//     console.log(todayTask)
// }

// collectingD();
// let Counts = document.getElementById('count');
// Counts.innerText = todaytaskDone.map((x) => x.item).reduce((x,y) => x+y, 0)

// function forList(forpersonal, listType, tagg, taskforWork){
//     if(listType === 'Personal'){
//         forPersonal.push({
//             taskName: taskforWork,
//             tag: tagg
//         })
//         console.log(forPersonal)
//     }

// }








function removeBtn(event) {

    let z = event.target;
    let parentTask = z.parentElement.parentElement.parentElement;
    console.log(parentTask)
    let sec2 = document.getElementsByClassName('section-2')[0];
    sec2.classList.remove('section-2-inactive')

    parentTask.classList.remove('taskTodoAll-active')

    let pertaskRemove = document.getElementsByClassName('division')[0];
    // let check = document.getElementsByClassName('check')[0];

    // check.remove();
    pertaskRemove.remove();
    let tName = parentTask.getElementsByClassName('taskName')[0];
    todayTask = todayTask.filter((x) => x.taskName !== tName.innerText) 
    localStorage.setItem('task', JSON.stringify(todayTask))

    let today = todayTask.filter((x) => x.date === 'today')
    let countings = document.getElementById('todayCount');
    countings.innerText = today.map((x) => x.item).reduce((x,y) => x+y, 0)

    let todayCounts = document.getElementById('today');
    todayCounts.innerText = today.map((x) => x.item).reduce((x,y) => x+y, 0)


    let Personaltask = (todayTask.filter((x) => x.List === 'Personal')) || [];

    let personalCounts = document.getElementById('personal');
    personalCounts.innerText = Personaltask.length


    let Worktask = (todayTask.filter((x) => x.List === 'Work')) || [];

    let workCounts = document.getElementById('work');
    workCounts.innerText = Worktask.length



    let Studytask = (todayTask.filter((x) => x.List === 'Study')) || [];

    let studyCounts = document.getElementById('study');
    studyCounts.innerText = Studytask.length
    


    // let forpersonal = document.getElementById('personal').innerText;
    // let tagg = document.getElementsByClassName('typeofTag');
    // for (let i = 0; i < tagg.length; i++) {
    //     let taggs = tagg[i];
    //     let listType = document.getElementsByClassName('natureList')[i].innerText;
    //     let taskforWork = document.getElementsByClassName('taskText')[i].innerText
    //     if(listType ==='Personal') {
    //         console.log(listType, taggs.innerText, taskforWork)
    //     }
    //     if(listType === 'Work') {
    //         console.log(listType, taggs.innerText, taskforWork)
    //     }
    //     if(listType ==='Study') {
    //         console.log(listType, taggs.innerText, taskforWork)
    //     }
        
    // }
}


let openTask = (event) => {
    let parent = event.target;
    let mother = parent.parentElement.parentElement;
    // console.log(mother)
    
    let tasktodo = document.getElementsByClassName('taskTodoAll')[0];
    tasktodo.classList.add('taskTodoAll-active')

    console.log(mother)
    let section_2 = document.getElementsByClassName('section-2')[0];
    section_2.classList.add('section-2-inactive')

    let taskname = document.getElementsByClassName('taskName')[0];
    let tasktext = mother.getElementsByClassName('taskText')[0];
    taskname.innerHTML = tasktext.innerHTML;

    let textarea = document.getElementsByClassName('description')[0];
    textarea.setAttribute('readonly', true)

    let description = mother.getElementsByClassName('descriPtion')[0];
    textarea.value = description.innerText;

    let deleteTask = document.getElementsByClassName('del-btn')[0];
    deleteTask.style.display = 'block';

    let natureList = mother.getElementsByClassName('natureList')[0];
    let Selected = document.getElementsByClassName('selected')[0];
    let Select = document.getElementsByClassName('select')[0];
    let menu = document.getElementsByClassName('meNu')[0];
    let caret = document.getElementsByClassName('caret')[0];

    if(natureList.innerText === 'Personal'){
        Selected.innerText = natureList.innerText;
        Select.onclick = null;
    }
    else if(natureList.innerText === 'Study'){
        Selected.innerText = natureList.innerText;
        Select.onclick = null;
    }
    else if(natureList.innerText === 'Work'){
        Selected.innerText = natureList.innerText;
        Select.onclick = null;
    }

    let firstDate = document.getElementsByClassName('firstDate')[0];
    let dueDate = mother.getElementsByClassName('dueDates')[0];
    firstDate.style.display = 'none';
    let due = document.getElementsByClassName('due')[0];
    due.innerText =  dueDate.innerText;


    let typeTag = mother.getElementsByClassName('typeofTag')[0];
    let prio = document.getElementsByClassName('prio')[0];
    let least_prio = document.getElementsByClassName('least-prio')[0];

    if(typeTag.innerText === 'P'){
        prio.classList.add('prio-active')
        least_prio.classList.remove('least-prio-active')
    }
    else {
        least_prio.classList.add('least-prio-active')
        prio.classList.remove('prio-active')
    }

    let savebtn = document.getElementsByClassName('save-btn')[0];
    savebtn.style.display = 'none';

 
}


let signingout = document.getElementsByClassName('signingOut')[0]

signingout.onclick = () => {
    window.location.href = 'firstpage.html'
}






