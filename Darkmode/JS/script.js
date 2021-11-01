let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');

themeSwitch.onclick = function(){
    themeSwitch.classList.toggle('active');
    body.classList.toggle('dark');
}

let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation')

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active')
}