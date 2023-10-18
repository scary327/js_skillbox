function createStudentsList() {
    let ul = document.createElement('ul');
    for (let student of allStudents) {
        let li = document.createElement('li');
        let h2 = document.createElement('h2');
        h2.textContent = student.name;
        let span = document.createElement('span');
        span.textContent = 'Возраст: ' + student.age + ' ' + corrConclusion(student.age, 'год', 'года', 'лет');

        li.appendChild(h2);
        li.appendChild(span);
        ul.appendChild(li);
    }

    document.body.appendChild(ul);
}


function corrConclusion(number, typeMin, typeAve, typeMax){
    if ([11, 12, 13, 14, 15, 16, 17, 18, 19].indexOf(number % 100) !== -1) {
        return typeMax;
    } else if (number % 10 === 1) {
        return typeMin;
    } else if ([2, 3, 4].indexOf(number % 10) !== -1) {
        return typeAve;
    } else {
        return typeMax;
    }
}


let allStudents=[
    {name: 'Валя', age: 11},
    {name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
];

createStudentsList(allStudents);