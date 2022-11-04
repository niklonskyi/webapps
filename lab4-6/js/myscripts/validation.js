const ERRORS = document.querySelectorAll('.error')

export default function validation(name, surname, middlename, password, date){
    let validated = true;
    if (name === '' || name === null) {
        ERRORS[2].textContent = "Введіть коректне ім'я!";
        ERRORS[2].classList.remove('hidden')
        validated = false
    }
    else ERRORS[2].classList.add('hidden')

    if (surname === '' || surname === null) {
        ERRORS[1].textContent = "Введіть коректне прізвище!";
        ERRORS[1].classList.remove('hidden')
        validated = false
    }
    else ERRORS[1].classList.add('hidden')

    if (middlename === '' || middlename === null) {
        ERRORS[3].textContent = "Введіть коректне по-батькові!";
        ERRORS[3].classList.remove('hidden')
        validated = false
    }
    else ERRORS[3].classList.add('hidden')

    if (password === '' || middlename === null || password.length < 5) {
        ERRORS[0].textContent = "Пароль повинение бути більше 5 символів";
        ERRORS[0].classList.remove('hidden')
        validated = false
    }
    else ERRORS[0].classList.add('hidden')

    if (!dateValidation(date)) {
        ERRORS[4].textContent = "Дата не повинна бути більшою ніж сьогодні";
        ERRORS[4].classList.remove('hidden')
        validated = false
    }
    else ERRORS[4].classList.add('hidden')

    return validated
}

function dateValidation(date) {

    date = date.split('-')
               .map((x) => parseInt(x))
    const currentDate = new Date();
    let [year, month, day] = date;

    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();

    if (year > currentYear || year === currentYear && month > currentMonth || year === currentYear
        && month === currentMonth && day > currentDay) {
        return false
    }
    else return true
}