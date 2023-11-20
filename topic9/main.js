let students = [];

// Определение функции валидации формы
function validateForm() {
    let isValid = true;
    let inputs = document.getElementsByTagName('input');
    let inputsArray = [].slice.call(inputs);
    let excludedInputs = inputsArray.filter(function(input) {
        return input.id === 'name' && input.id === 'surname' && input.id === 'patronymic' && input.id === 'dob' && input.id === 'startYear' && input.id === 'faculty';
    });

    for (let i = 0; i < excludedInputs.length; i++) {
        if (excludedInputs[i].value.trim() === '') {
            isValid = false;
            break;
        }
    }

    let dob = new Date(document.getElementById('dob').value);
    let startYear = new Date(document.getElementById('startYear').value);
    let currentDate = new Date();

    if (isValid) {
        if (dob < new Date('1900-01-01') || dob > currentDate) {
            isValid = false;
        }
    }

    if (isValid) {
        if (startYear < new Date('2000-01-01') || startYear > currentDate) {
            isValid = false;
        }
    }

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const patronymic = document.getElementById('patronymic').value;
    const faculty = document.getElementById('faculty').value;

    if (name === '' || surname === '' || patronymic === '' || isNaN(dob.getTime()) || isNaN(startYear.getTime()) || faculty === '') {
        return false;
    }

    return isValid;
}

function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Определение функции для добавления студента
function addStudent() {
    if (validateForm()) {
        const student = {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            patronymic: document.getElementById('patronymic').value,
            dob: new Date(document.getElementById('dob').value),
            startYear: new Date(document.getElementById('startYear').value),
            faculty: document.getElementById('faculty').value
        };

        students.push(student);
        console.log(students);

        document.getElementById('name').value = '';
        document.getElementById('surname').value = '';
        document.getElementById('patronymic').value = '';
        document.getElementById('dob').value = '';
        document.getElementById('startYear').value = '';
        document.getElementById('faculty').value = '';
        displayStudents(student);
    } else {
        alert('Форма заполнена некорректно. Пожалуйста, проверьте введенные данные.');
    }
}

function displayStudents(student) {
    let table = document.getElementById('studentsTable');
    let tbody = document.createElement('tbody');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    tr.classList.add('flex__tr')

    td1.textContent = `${student.surname} ${student.name} ${student.patronymic}`;
    td2.textContent = student.faculty;
    td3.textContent = `${student.dob.toLocaleDateString()} (${getAge(student.dob.toISOString())} лет)`;

    let currentYear = new Date().getFullYear();
    let startYear = student.startYear.getFullYear();
    let endYear = startYear + 4;
    let course = Math.ceil((currentYear - startYear) / 2) + 1;

    if (endYear <= currentYear) {
        td4.textContent = `${startYear}-${endYear} (закончил)`;
    } else {
        td4.textContent = `${startYear}-${endYear} (${course} курс)`;
    }

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);

    table.appendChild(tbody);
}

// Форма для добавления студента
const form = `
 <form class="form">
    <label for="name">Имя:</label><br>
    <input type="text" id="name" name="name"><br>
    <label for="surname">Фамилия:</label><br>
    <input type="text" id="surname" name="surname"><br>
    <label for="patronymic">Отчество:</label><br>
    <input type="text" id="patronymic" name="patronymic"><br>
    <label for="dob">Дата рождения:</label><br>
    <input type="date" id="dob" name="dob"><br>
    <label for="startYear">Год начала обучения:</label><br>
    <input type="number" id="startYear" name="startYear" min="2000"><br>
    <label for="faculty">Факультет:</label><br>
    <input type="text" id="faculty" name="faculty"><br>
    <button type="button" onclick="addStudent()">Добавить студента</button>
 </form>
`;

// Отображение формы на странице
document.getElementById('content__form').innerHTML = form;

function checkFilter() {
    const nameFilter = document.getElementById('name__filter');
    const surnameFilter = document.getElementById('surname__filter');
    const patronymicFilter = document.getElementById('patronymic__filter');
    const facultyFilter = document.getElementById('faculty__filter');
    const startYearFilter = document.getElementById('start-year__filter');
    const endYearFilter = document.getElementById('end-year__filter');
    const tbody = document.getElementsByTagName('tbody');

    if (nameFilter.value !== '') {
        students = getNewTable(nameFilter.value, 'name');
        tbody.innerHTML = ``;
        for (let i = 0; i < students.length; i++) {
            displayStudents(students[i]);
        }
        return null;
    } else if (surnameFilter.value !== '') {
        students = getNewTable(surnameFilter.value, 'surname');
        for (let i = 0; i < students.length; i++) {
            displayStudents(students[i]);
        }
        return null;
    } else if (patronymicFilter.value !== '') {
        students = getNewTable(patronymicFilter.value, 'patronymic');
        for (let i = 0; i < students.length; i++) {
            displayStudents(students[i]);
        }
        return null;
    } else if (facultyFilter.value !== '') {
        students = getNewTable(facultyFilter.value, 'faculty');
        for (let i = 0; i < students.length; i++) {
            displayStudents(students[i]);
        }
        return null;
    } else if (startYearFilter.value !== '') {
        students = getNewTable(startYearFilter.value, 'startYear');
        for (let i = 0; i < students.length; i++) {
            displayStudents(students[i]);
        }
        return null;
    } else if (endYearFilter.value !== '') {
        students = getNewTable(endYearFilter.value + 4, 'startYear');
        for (let i = 0; i < students.length; i++) {
            displayStudents(students[i]);
        }
        return null;
    } else {
        return null;
    }
}

function getNewTable (el, key) {
    return students.sort(compareString);
}

function compareString(str1, str2) {
    let condition = str1 in str2;
    if (condition) {
        return 1;
    } else {
        return 0;
    }
}

document.getElementById('btn__filter').addEventListener('click', checkFilter);