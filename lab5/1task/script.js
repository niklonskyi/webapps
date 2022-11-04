const LENGTH = document.getElementById('length');
const WIDTH = document.getElementById('width');
const PERIMETER = document.getElementById('perimetr');
const AREA = document.getElementById('area');
const DIAGONAL = document.getElementById('diagonal');

function validation(length, width) {
    return !(length < 0 || width < 0);
}

function displayResults(length, width) {
    let perimeter = length * 2 + width * 2
    let area = length * width;
    let diagonal = Math.sqrt((length ** 2) + (width ** 2));
    PERIMETER.innerText = perimeter.toString();
    AREA.innerText = area.toString();
    DIAGONAL.innerText = diagonal.toString();
}

LENGTH.addEventListener('input', (evt) => {
    if (validation(LENGTH.value, WIDTH.value)){
        displayResults(LENGTH.value, WIDTH.value)
    }
    else {
        PERIMETER.innerText = 'Incorrect argument';
        AREA.innerText = 'Incorrect argument';
        DIAGONAL.innerText = 'Incorrect argument';
    }
})

WIDTH.addEventListener('input', (evt) => {
    if (validation(LENGTH.value, WIDTH.value)){
        displayResults(LENGTH.value, WIDTH.value)
    }
    else {
        PERIMETER.innerText = 'Incorrect argument';
        AREA.innerText = 'Incorrect argument';
        DIAGONAL.innerText = 'Incorrect argument';
    }
})
