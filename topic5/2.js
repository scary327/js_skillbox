function getOlderUserArray(arrayUsers) {
    let maxAge = 0;
    let olderUser;
    for (let user of arrayUsers) {
        if (user.age > maxAge) {
            maxAge = user.age;
            olderUser = user.name;
        }
    }

    return olderUser;
}

let allUsers= [
    {name: 'Валя', age: 11},
    {name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
];

let result = getOlderUserArray(allUsers);
console.log(result);