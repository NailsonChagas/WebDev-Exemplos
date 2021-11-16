const getRandom = (min = 0, max = 100, roundResult = false) => {
    const result = Math.random() * (max - min) + min;
    return roundResult === true ? Math.round(result) : result;
};

const generateStars = (parentElement, starNumber = 500) => {
    if (!(parentElement instanceof HTMLElement)) {
        throw new Error(`Invalid parent element: ${parentElement}.`);
    }

    const getStarInfo = () => ({
        x: getRandom(0, 100),
        y: getRandom(0, 100),
        opacity: getRandom(0.3, 1),
        size: getRandom(0.3, 2),
        delay: getRandom(0.3, 10)
    })

    let html = "";
    for (let i = 0; i < starNumber; i++) {
        const { x, y, opacity, size, delay } = getStarInfo()
        const style = `--x: ${x}%; --y: ${y}%; --opacity: ${opacity}; --size: ${size}; --delay: -${delay}s;`;
        html += `<div class='star' style='${style}'></div>`;
    }
    parentElement.insertAdjacentHTML("beforeend", html);
};

const sky = document.querySelector(".sky");
generateStars(sky, 600);
