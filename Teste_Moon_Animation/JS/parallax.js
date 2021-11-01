function swap(){
    setTimeout(function(){document.querySelector('section').classList.add('borrado');document.querySelector('body').style.overflowY = "visible";}, 2400);
}
document.querySelector('#btn').addEventListener('click', swap);


/* Parallax */
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let header = document.querySelector('header');
let text = document.getElementById('text');
let btn = document.getElementById('btn2');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    stars.style.left = (value * 0.25) + 'px';
    moon.style.top = (value * 0.90) + 'px';
    mountains_behind.style.bottom = (value * -0.5) + 'px';
    header.style.top = (value * 0.5) + 'px';
    text.style.marginRight = (value * 3) + 'px';
    btn.style.marginTop = (value * 1.5) + 'px';
});