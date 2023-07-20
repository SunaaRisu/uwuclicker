document.addEventListener('contextmenu', event => event.preventDefault());

const button = document.getElementById('span');
const counter = document.getElementById('counter');
counter.innerHTML = 0;

let flag = false;

function buttonDown() {
    if (flag === false) {
        flag = true;
        button.innerHTML = 'OwO';
        counter.innerHTML++; 
    }
    
}

function buttonUp() {
    button.innerHTML = 'UwU';
    flag = false;
}

function hoverIn() {
    button.style.fontSize = '220px'
}

function hoverOut() {
    button.style.fontSize = '200px'
}