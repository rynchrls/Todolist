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

let check = document.querySelector('.check');
let checkActivate = document.querySelector('.checked');
let arrow = document.querySelector('.dash');

check.onclick = () => {
    checkActivate.classList.toggle('checkedActive')
}

let perTask = document.querySelector('.per-task');
// let active = document.querySelector('.heightFit');

perTask.onclick = () => {
    perTask.classList.toggle('heightFit');
    arrow.classList.toggle('dashActive')
}
let Menu = document.querySelector('.select');
let dropdown = document.querySelector('.meNu');
let caret = document.querySelector('.caret');

Menu.onclick = () => {
    dropdown.classList.toggle('menu-active');
    caret.classList.toggle('caret-active')
}