function createStudentCard(student) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerHTML = student.name;
    let span = document.createElement('span');
    span.innerHTML = 'Возраст: ' + student.age + ' ' + corrConclusion(student.age, 'год', 'года', 'лет');

    div.append(h2);
    div.append(span);
    document.body.append(div);
}


function corrConclusion(number, typeMin, typeAve, typeMax) {
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


let studentObj={
    name: 'Игорь',
    age: 11
}

createStudentCard(studentObj);