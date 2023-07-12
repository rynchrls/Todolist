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



let totalStudy = document.getElementsByClassName('total-study')[0]
let todayTask = JSON.parse(localStorage.getItem('task')) || [];

let Studytask = (todayTask.filter((x) => x.List === 'Study')) || [];

totalStudy.innerText = Studytask.length

let studyToday = Studytask.filter((x) => x.date === 'today')


let perstudy = document.getElementsByClassName('per-total-t-study')[0]
perstudy.innerText = studyToday.length


let forToday = (studyToday.filter((x) => x.tags === 'P')) ||[]



let priorityContentWork = document.getElementsByClassName('priorityContent-study')[0]


priorityContentWork.innerHTML = forToday.map((x) => {
    let {taskName} = x;
    return (`<div class="Content-study">${taskName}</div>`)
}).join('');



let forStudy_LP = (Studytask.filter((x) => x.date === 'today')) || []

let leastContentStudy = document.getElementsByClassName('leastprioContent-study')[0]

let LP_forStudy = forStudy_LP.filter((x) => x.tags === 'LP')

leastContentStudy.innerHTML = LP_forStudy.map((x) => {
    let {taskName} = x;
    return (`<div class="leastContent-study">${taskName} </div>`)
}).join('');


function forWeek() {
    let forWeek = Studytask.filter((x) => x.date === 'week')
    let perStudyweek = document.getElementsByClassName('per-total-w-study')[0]
    perStudyweek.innerText = forWeek.length

    let priorityContentWork2 = document.getElementsByClassName('priorityContent2-study')[0]

    let forweek = forWeek.filter((x) => x.tags === 'P')
    priorityContentWork2.innerHTML = forweek.map((x) => {
        let {taskName} = x;
        return (`<div class="Content2-study">${taskName}</div>`)
    }).join('');



    let leastContentWork2 = document.getElementsByClassName('leastprioContent2-study')[0]

    let LP_forToday2 = forWeek.filter((x) => x.tags === 'LP')

    leastContentWork2.innerHTML = LP_forToday2.map((x) => {
        let {taskName} = x;
        return (`<div class="leastContent2-study">${taskName} </div>`)
    }).join('');
}

function forMonth() {

    let forMonth = Studytask.filter((x) => x.date === 'month')
    let perStudymonth = document.getElementsByClassName('per-total-m-study')[0]
    perStudymonth.innerText = forMonth.length

    let priorityContentWork3 = document.getElementsByClassName('priorityContent3-study')[0]

    let formonth = forMonth.filter((x) => x.tags === 'P')
    priorityContentWork3.innerHTML = formonth.map((x) => {
        let {taskName} = x;
        return (`<div class="Content3-study">${taskName}</div>`)
    }).join('');


    let leastContentWork3 = document.getElementsByClassName('leastprioContent3-study')[0]

    let LP_forToday3 = forMonth.filter((x) => x.tags === 'LP')

    leastContentWork3.innerHTML = LP_forToday3.map((x) => {
        let {taskName} = x;
        return (`<div class="leastContent3-study">${taskName} </div>`)
    }).join('');
}

function forYear() {
    let forYear = Studytask.filter((x) => x.date === 'year')
    let perStudyYear = document.getElementsByClassName('per-total-y-study')[0]
    perStudyYear.innerText = forYear.length

    
    let priorityContentWork4 = document.getElementsByClassName('priorityContent4-study')[0]

    let foryear = forYear.filter((x) => x.tags === 'P')
    priorityContentWork4.innerHTML = foryear.map((x) => {
        let {taskName} = x;
        return (`<div class="Content4-study">${taskName}</div>`)
    }).join('');


    let leastContentWork4 = document.getElementsByClassName('leastprioContent4-study')[0]

    let LP_forToday4 = forYear.filter((x) => x.tags === 'LP')

    leastContentWork4.innerHTML = LP_forToday4.map((x) => {
        let {taskName} = x;
        return (`<div class="leastContent4-study">${taskName} </div>`)
    }).join('');

}
forWeek();
forMonth();
forYear();


