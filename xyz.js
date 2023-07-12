let type = document.getElementById('type');
let submit = document.getElementById('submit');
let todos = document.getElementById('todos');
let toggle = document.getElementById('toggle')




submit.addEventListener('click', function(){
    var main = document.createElement('div');
    todos.appendChild(main);
    main.classList.add('todo');

    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    main.appendChild(checkbox);

    var par = document.createElement('p');
    par.innerHTML = type.value;
    main.appendChild(par);

    var par2 = document.createElement('p');
    par2.innerHTML = type.value;
    par2.classList.add('p2');
    main.appendChild(par2);

    var btn = document.createElement('button');
    main.appendChild(btn);
    btn.classList.add('button2')
    btn.innerHTML = 'X';
    type.value = "";
    
    checkbox.addEventListener('change', function(){
        btn.classList.toggle('btn-show')
    })
    checkbox.addEventListener('click', function(){
        content3.appendChild(par2)
        par2.classList.add('active3')
    })
    btn.addEventListener('click', function(){
        return main.classList.add('todos-remove');
    })
})


var toggle2 = document.createElement('div');
toggle.appendChild(toggle2);
toggle2.classList.add('overlay');

var content3 = document.createElement('div');
toggle2.appendChild(content3);
content3.classList.add('content');

var btn3 = document.createElement('button');
content3.appendChild(btn3);
btn3.innerHTML = 'X';
btn3.classList.add('x-btn');

var h4 = document.createElement('h4');
content3.appendChild(h4);
h4.innerHTML = 'COMPLETED';

var btn4 = document.createElement('button');
toggle.appendChild(btn4);
btn4.innerHTML = 'All things I have done';
btn4.classList.add('accom');

btn4.addEventListener('click', function(){
    toggle2.classList.add('active');
    content3.classList.add('active2');
    btn3.addEventListener('click', function(){
        toggle2.classList.remove('active');
        content3.classList.remove('active2');
    })
})


