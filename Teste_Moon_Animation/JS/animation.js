let animation = anime.timeline({
    autoplay: false
});

animation.add({
    targets: '#btn',
    top: '3000px',
    duration: 500,
    easing: 'easeInOutSine'
}).add({
    targets: '#stars',
    top: '0px',
    duration: 500,
    easing: 'easeInOutSine'
}).add({
    targets: '#mountains_behind',
    bottom: '0px',
    duration: 500,
    easing: 'easeInOutSine'
}).add({
    targets: '#moon',
    top: '0px',
    duration: 500,
    easing: 'easeInOutBack'
}).add({
    targets: '#mountains_front',
    bottom: '0px',
    duration: 500,
    easing: 'easeInOutSine'
}).add({
    targets: '#nav',
    top: '0px',
    duration: 300,
    easing: 'easeInOutBack'
}).add({
    targets: '#text',
    duration: 1000,
    marginRight: 0,
    easing: 'easeInOutBack'
}).add({
    targets: '#btn2',
    top: '50%',
    duration: 1000,
    easing: 'easeInOutBack'
});

function teste(){
    console.log('teste');
}

document.querySelector('#btn').addEventListener('click', animation.play);