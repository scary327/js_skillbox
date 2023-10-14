function getAge(birthYear) {
    let currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

console.log(getAge(1998))