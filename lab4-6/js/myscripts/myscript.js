import validation from "./validation.js";

const DELETE_BUTTON = document.getElementById('delete')
const DUPLICATE_BUTTON = document.getElementById('duplicate')
const TBODY = document.querySelector('tbody')

let users = []

function updateTable(users) {
    TBODY.innerHTML = '';
    for (const user of users) {
        let newRow = document.createElement('tr')
        let newTd = document.createElement('td')
        let checkbox = document.createElement('input')
        checkbox.type = "checkbox"
        checkbox.classList.add("form-check-input")
        newTd.appendChild(checkbox)
        newRow.appendChild(newTd);
        for (let key in user) {
            let newTd = document.createElement('td')
            newTd.innerText = user[key];
            newRow.appendChild(newTd);
        }
        TBODY.appendChild(newRow)
    }
}

function resetValues() {
    let inputs = document.querySelectorAll('input')
    Array.from(inputs).map( (input) => {
        input.value = '';
    })
}

function returnUser(name, surname, middlename, date, group, phone, gender) {
    let user = {
        name,
        surname,
        middlename,
        date,
        group,
        phone,
        gender
    }
    users.push(user)
}

$(document).ready(function () {
    $(":input").inputmask();
    $("#phone-input").inputmask({"mask": "+38(099)-999-9999"});

     $("#form").submit((evt) => {
             evt.preventDefault()
         let name = $("#floatingName").val()
         let surname = $("#floatingSurname").val()
         let middlename = $("#floatingMiddleName").val();
         let password = $("#floatingPassword").val()
         let dateOfBirth = $("#floatingDateOfBirth").val()
         let group = $("#floatingGroup").val()
         let phone = $("#phone-input").val()
         let gender = $("input[name=inlineRadioOptions]:checked").val()
         if (validation(name, surname, middlename, password, dateOfBirth)) {
             returnUser(name, surname, middlename, dateOfBirth, group, phone, gender)
             updateTable(users)
             resetValues()
         }

    }
    )
});

DELETE_BUTTON.addEventListener('click', (evt) => {
    ($("input[type=checkbox]")).each(function (index) {
        if ($(this).is(":checked")){
            users.splice(index)
        }
    })
    updateTable(users)
})

DUPLICATE_BUTTON.addEventListener('click', (evt) => {
    ($("input[type=checkbox]")).each(function (index) {
        if ($(this).is(":checked")) {
            users.push(users[index])
        }
    })
    updateTable(users)
})

returnUser('Henry', 'Kavill', 'Witcher', "2016-5-11", '14', "+38(066)-666-6666", 'Чоловік');
updateTable(users)