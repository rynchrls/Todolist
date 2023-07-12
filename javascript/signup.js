let x = document.getElementById('signup');
let firstName = document.querySelector('.firstname');
let lastName = document.querySelector('.lastname');
let usernaME = document.querySelector('.username');
let password = document.querySelector('.password');
x.onclick = (event) => {
    let c = event.target;
    let fn = document.getElementById('fn').value;
    let ln = document.getElementById('ln').value;
    let ur = document.getElementById('ur').value;
    let pass = document.getElementById('password').value;
    if(fn === "" || ln === ""){
        firstName.classList.add('active');
        lastName.classList.add('lastname2');
        return;
    }
    account.push({
        firstname: fn,
        lastname: ln,
        username: ur,
        password: pass
    })
    localStorage.setItem('account',JSON.stringify(account))
    gsap.to('.hero', { duration: 1.5,opacity: 0, ease: "none", y: -500});
    let parent  = c.parentElement.parentElement.remove();
    let goLog = document.getElementById('go-to-login');
    goLog.style.display = 'flex';

}
// let y = document.getElementById('create');

// y.onclick = (event) => {
//     let see = event.target;
//     // let Username = document.querySelector('#username').value;

//     // account.push({
//     //     username: Username,
//     // })
//     // localStorage.setItem('account', JSON.stringify(account))
//     let parent = see.parentElement.remove();

// }