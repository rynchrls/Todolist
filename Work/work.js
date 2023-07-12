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


let todaytask = JSON.parse(localStorage.getItem('taskDone')) || [];
let Counts = document.getElementsByClassName('count')[0];
Counts.innerText = todaytask.map((x) => x.item).reduce((x,y) => x+y, 0)



let totalWork = document.getElementsByClassName('total-work')[0]
let todayTask = JSON.parse(localStorage.getItem('task')) || [];

let Worktask = (todayTask.filter((x) => x.List === 'Work')) || [];

totalWork.innerText = Worktask.length

let workToday = Worktask.filter((x) => x.date === 'today')


let perWork = document.getElementsByClassName('per-total-t-work')[0]
perWork.innerText = workToday.length


let forToday = (workToday.filter((x) => x.tags === 'P')) ||[]



let priorityContentWork = document.getElementsByClassName('priorityContent-work')[0]


priorityContentWork.innerHTML = forToday.map((x) => {
    let {taskName} = x;
    return (`<div class="Content-work">${taskName}</div>`)
}).join('');



let forToday_LP = (Worktask.filter((x) => x.date === 'today')) || []

let leastContentWork = document.getElementsByClassName('leastprioContent-work')[0]

let LP_forToday = forToday_LP.filter((x) => x.tags === 'LP')

leastContentWork.innerHTML = LP_forToday.map((x) => {
    let {taskName} = x;
    return (`<div class="leastContent-work">${taskName} </div>`)
}).join('');


function forWeek() {
    let forWeek = Worktask.filter((x) => x.date === 'week')
    let perWorkweek = document.getElementsByClassName('per-total-w-work')[0]
    perWorkweek.innerText = forWeek.length

    let priorityContentWork2 = document.getElementsByClassName('priorityContent2-work')[0]

    let forweek = forWeek.filter((x) => x.tags === 'P')
    priorityContentWork2.innerHTML = forweek.map((x) => {
        let {taskName} = x;
        return (`<div class="Content2-work">${taskName}</div>`)
    }).join('');



    let leastContentWork2 = document.getElementsByClassName('leastprioContent2-work')[0]

    let LP_forToday2 = forWeek.filter((x) => x.tags === 'LP')

    leastContentWork2.innerHTML = LP_forToday2.map((x) => {
        let {taskName} = x;
        return (`<div class="leastContent2-work">${taskName} </div>`)
    }).join('');
}

function forMonth() {

    let forMonth = Worktask.filter((x) => x.date === 'month')
    let perWorkmonth = document.getElementsByClassName('per-total-m-work')[0]
    perWorkmonth.innerText = forMonth.length

    let priorityContentWork3 = document.getElementsByClassName('priorityContent3-work')[0]

    let formonth = forMonth.filter((x) => x.tags === 'P')
    priorityContentWork3.innerHTML = formonth.map((x) => {
        let {taskName} = x;
        return (`<div class="Content3-work">${taskName}</div>`)
    }).join('');


    let leastContentWork3 = document.getElementsByClassName('leastprioContent3-work')[0]

    let LP_forToday3 = forMonth.filter((x) => x.tags === 'LP')

    leastContentWork3.innerHTML = LP_forToday3.map((x) => {
        let {taskName} = x;
        return (`<div class="leastContent3-work">${taskName} </div>`)
    }).join('');
}

function forYear() {
    let forYear = Worktask.filter((x) => x.date === 'year')
    let perWorkYear = document.getElementsByClassName('per-total-y-work')[0]
    perWorkYear.innerText = forYear.length

    
    let priorityContentWork4 = document.getElementsByClassName('priorityContent4-work')[0]

    let foryear = forYear.filter((x) => x.tags === 'P')
    priorityContentWork4.innerHTML = foryear.map((x) => {
        let {taskName} = x;
        return (`<div class="Content4-work">${taskName}</div>`)
    }).join('');


    let leastContentWork4 = document.getElementsByClassName('leastprioContent4-work')[0]

    let LP_forToday4 = forYear.filter((x) => x.tags === 'LP')

    leastContentWork4.innerHTML = LP_forToday4.map((x) => {
        let {taskName} = x;
        return (`<div class="leastContent4-work">${taskName} </div>`)
    }).join('');

}
forWeek();
forMonth();
forYear();