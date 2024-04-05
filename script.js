const ModoDark = document.querySelector('.modo-dark');

ModoDark.addEventListener('click', () =>{
    toogleDarkMode();
});

let moon = document.getElementById('moon')
let sun = document.getElementById('sun')
let body = document.querySelector('body');
let container = document.querySelector('.container');

function toogleDarkMode(){
    moon.classList.toggle('hide');
    sun.classList.toggle('hide');
    ModoDark.classList.toggle('dark');
    body.classList.toggle('dark');
    container.classList.toggle('dark');
}