let userName = 'Иван';
let userSurname = 'Иванов';

let newUserName = userName.toLowerCase();
newUserName = newUserName[0].toUpperCase() + newUserName.slice(1);

let newUserSurname = userSurname.toLowerCase();
newUserSurname = newUserSurname[0].toUpperCase() + newUserSurname.slice(1);

console.log(newUserName === userName ? 'Имя осталось без изменений' : 'Имя было преобразовано');
console.log(newUserSurname === userSurname ? 'Фамилия осталась без изменений' : 'Фамилия была преобразована');

console.log(newUserName + ' ' + newUserSurname);