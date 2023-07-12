let loginButton = document.getElementById('toHomepage');
// let username = document.getElementsByClassName('user');
// let password = document.getElementsByClassName('pass');
// console.log(loginButton,username,password)
// let username1 = document.querySelector('.user').value;
// let password = document.querySelector('.pass').value;
// loginButton.onclick = () => {
//     let username1 = document.querySelector('.user').value;
//     let password = document.querySelector('.pass').value;
//     let userInput = account.some((x) => x.username)
//     if(account.some((x) => x.username === username1)) {
//     }else {
//         alert('wrong username')
//     }
//     if(account.some((x) => x.password === password)) {
//         window.location.href = 'home.html';
//     }else {
//         alert('wrong password')
//     }
// }
// let userPassword = account.map((x) => x.password)
// // if(basket.some((x) => x.title === title))

loginButton.addEventListener('click', toHomepage)

function toHomepage(){
    setTimeout(homePage, 200)
    let username1 = document.querySelector('.user').value;
    let userInput = account.some((x) => x.username)
    if(account.some((x) => x.username === username1)) {
    }else {
        alert('wrong username')
    }
}
function homePage(){
    let password = document.querySelector('.pass').value;
    if(account.some((x) => x.password === password)) {
        window.location.href = 'home.html';
    }else {
        alert('wrong password')
    }
}