let navActivate = document.querySelector('.nav-btn');
let nav =document.querySelector('.navlinks');
navActivate.onclick = () => {
    nav.classList.toggle('nav-active')
}
let activePage = window.location.pathname;
console.log(activePage)
let navigate = document.querySelectorAll('.link a')
.forEach(links => {
    if(links.href.includes(`${activePage}`)) {
        let indicate = links;
        console.log(indicate)
        indicate.classList.add('navigate-active')
    }
});




let todaytask = JSON.parse(localStorage.getItem('taskDone')) || [];
let Counts = document.getElementsByClassName('count')[0];
Counts.innerText = todaytask.map((x) => x.item).reduce((x,y) => x+y, 0)



let totalPersonal = document.getElementsByClassName('total')[0]
let todayTask = JSON.parse(localStorage.getItem('task')) || [];

let Personaltask = (todayTask.filter((x) => x.List === 'Personal')) || [];

totalPersonal.innerText = Personaltask.length

let PersonalToday = Personaltask.filter((x) => x.date === 'today')


let perPersonal = document.getElementsByClassName('per-total-t')[0]
perPersonal.innerText = PersonalToday.length


let forToday = (PersonalToday.filter((x) => x.tags === 'P')) ||[]



let priorityContentWork = document.getElementsByClassName('priorityContent')[0]


priorityContentWork.innerHTML = forToday.map((x) => {
    let {taskName} = x;
    return (`<div class="Content">${taskName}</div>`)
}).join('');



let forToday_LP = (Personaltask.filter((x) => x.date === 'today')) || []

let leastContentWork = document.getElementsByClassName('leastprioContent')[0]

let LP_forToday = forToday_LP.filter((x) => x.tags === 'LP')

leastContentWork.innerHTML = LP_forToday.map((x) => {
    let {taskName} = x;
    return (`<div class="leastContent">${taskName} </div>`)
}).join('');


function forWeek() {
    let forWeek = Personaltask.filter((x) => x.date === 'week')
    let perPersonalweek = document.getElementsByClassName('per-total-w')[0]
    perPersonalweek.innerText = forWeek.length

    let priorityContentWork2 = document.getElementsByClassName('priorityContent2')[0]

    let forweek = forWeek.filter((x) => x.tags === 'P')
    priorityContentWork2.innerHTML = forweek.map((x) => {
        let {taskName} = x;
        return (`<div class="Content2">${taskName}</div>`)
    }).join('');



    let leastContentWork2 = document.getElementsByClassName('leastprioContent2')[0]

    let LP_forToday2 = forWeek.filter((x) => x.tags === 'LP')

    leastContentWork2.innerHTML = LP_forToday2.map((x) => {
        let {taskName} = x;
        return (`<div class="leastContent2">${taskName} </div>`)
    }).join('');
}

function forMonth() {

    let forMonth = Personaltask.filter((x) => x.date === 'month')
    let perPersonalmonth = document.getElementsByClassName('per-total-m')[0]
    perPersonalmonth.innerText = forMonth.length

    let priorityContentWork3 = document.getElementsByClassName('priorityContent3')[0]

    let formonth = forMonth.filter((x) => x.tags === 'P')
    priorityContentWork3.innerHTML = formonth.map((x) => {
        let {taskName} = x;
        return (`<div class="Content3">${taskName}</div>`)
    }).join('');


    let leastContentWork3 = document.getElementsByClassName('leastprioContent3')[0]

    let LP_forToday3 = forMonth.filter((x) => x.tags === 'LP')

    leastContentWork3.innerHTML = LP_forToday3.map((x) => {
        let {taskName} = x;
        return (`<div class="leastContent3">${taskName} </div>`)
    }).join('');
}

function forYear() {
    let forYear = Personaltask.filter((x) => x.date === 'year')
    let perPersonalYear = document.getElementsByClassName('per-total-y')[0]
    perPersonalYear.innerText = forYear.length

    
    let priorityContentWork4 = document.getElementsByClassName('priorityContent4')[0]

    let foryear = forYear.filter((x) => x.tags === 'P')
    priorityContentWork4.innerHTML = foryear.map((x) => {
        let {taskName} = x;
        return (`<div class="Content4">${taskName}</div>`)
    }).join('');


    let leastContentWork4 = document.getElementsByClassName('leastprioContent4')[0]

    let LP_forToday4 = forYear.filter((x) => x.tags === 'LP')

    leastContentWork4.innerHTML = LP_forToday4.map((x) => {
        let {taskName} = x;
        return (`<div class="leastContent4">${taskName} </div>`)
    }).join('');

}
forWeek();
forMonth();
forYear();