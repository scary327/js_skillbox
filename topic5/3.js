function filter(objectsArray, property, propertyValue) {
    let result = [];
    for (let object of objectsArray) {
        if (object[property] === propertyValue) {
            result.push(object);
        }
    }

    return result
}

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' },
    { name: 'Иван', surname: 'Петров'}
];

let result = filter(objects, 'name', 'Иван');
console.log(result);