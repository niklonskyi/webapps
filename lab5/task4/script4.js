const DATE_FORM = document.getElementById('date-form');
const RESULT_OUTPUT = document.getElementById('result');

const DAYS_OF_WEEK = [ "Субота", "Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця"];

function dayOfWeek(day, month, year) {
    let a = (14 - month) / 12;
    let y = year - a;
    let m = month + 12 * a - 2;
    let dayOfWeek = (day + y + y / 4 - y / 100 + y / 400 + (31 * m) / 12);
    return DAYS_OF_WEEK[Math.round(dayOfWeek) % 7];
}

DATE_FORM.addEventListener('change', (evt => {
    let dateInteger = (DATE_FORM.value.split('-')).map(Number);
    let [year, month, day] = dateInteger;
    RESULT_OUTPUT.innerText = dayOfWeek(day, year, month);
}))