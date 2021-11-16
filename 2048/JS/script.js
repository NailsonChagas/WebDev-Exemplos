grid.init();

document.addEventListener('keyup', function(e){
    let direction = null;

    if(e.key === 'ArrowUp' || e.key === 'w' || e.key === "W"){
        direction = "UP";
    }
    else if(e.key === 'ArrowDown' || e.key === 's' || e.key === "S"){
        direction = "DOWN";
    }
    else if(e.key === 'ArrowLeft' || e.key === 'a' || e.key === "A"){
        direction = "LEFT";
    }
    else if(e.key === 'ArrowRight' || e.key === 'd' || e.key === "D"){
        direction = "RIGHT";
    }

    if(direction !== null){
        grid.slide(direction);
    }

    return false;
});