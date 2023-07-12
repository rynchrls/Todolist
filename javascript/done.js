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
let Counts = document.getElementById('count');
Counts.innerText = todaytask.map((x) => x.item).reduce((x,y) => x+y, 0)

let createtaskDone = () => {

    let today = todaytask.filter((x) => x.date === 'today')

    let prioritycontent = document.getElementsByClassName('priorityContent-ft')[0];
    prioritycontent.innerHTML = today.map((x) => {
        let {taskName} = x;
        return (`<div class="Content-ft">${taskName}</div>`)
    }).join(" ");


    let week = todaytask.filter((x) => x.date === 'week')

    let prioritycontent2 = document.getElementsByClassName('priorityContent2-ft')[0];
    prioritycontent2.innerHTML = week.map((x) => {
        let {taskName} = x;
        return (`<div class="Content2-ft"> ${taskName}</div>`)
    }).join(" ");

    let month = todaytask.filter((x) => x.date === 'month')

    let prioritycontent3 = document.getElementsByClassName('priorityContent3-ft')[0];
    prioritycontent3.innerHTML = month.map((x) => {
        let {taskName} = x;
        return (`<div class="Content3-ft"> ${taskName}</div>`)
    }).join(" ");

    let year = todaytask.filter((x) => x.date === 'year')

    let prioritycontent4 = document.getElementsByClassName('priorityContent4-ft')[0];
    prioritycontent4.innerHTML = year.map((x) => {
        let {taskName} = x;
        return (`<div class="Content4-ft"> ${taskName}</div>`)
    }).join(" ");
}

createtaskDone();

let totalft = document.getElementsByClassName('total-ft')[0]
totalft.innerText = todaytask.map((x) => x.item).reduce((x,y) => x+y, 0);

let pertotalToday = document.getElementsByClassName('per-total-t-ft')[0]

let today = todaytask.filter((x) => x.date === 'today')
pertotalToday.innerText = today.map((x) => x.item).reduce((x,y) => x+y,0)


let pertotalWeek = document.getElementsByClassName('per-total-w-ft')[0]

let week = todaytask.filter((x) => x.date === 'week')

pertotalWeek.innerText = week.map((x) => x.item).reduce((x,y) => x+y,0)


let month = todaytask.filter((x) => x.date === 'month')
let pertotalMonth = document.getElementsByClassName('per-total-m-ft')[0]

pertotalMonth.innerText = month.map((x) =>x.item).reduce((x , y) => x+y,0)


let year = todaytask.filter((x) => x.date === 'year')
let pertotalYear = document.getElementsByClassName('per-total-y-ft')[0]

pertotalYear.innerText = year.map((x) =>x.item).reduce((x , y) => x+y,0)

